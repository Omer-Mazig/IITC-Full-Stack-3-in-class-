const fs = require("fs/promises");

const USERS_FILE = "users.json";

const SALT_ROUNDS = 10;

async function getUserById(userId) {
  const users = await _readUsers();
  const user = users.find((u) => u.id === userId);
  if (!user) {
    throw new Error("User not found");
  }

  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

async function createUser(email, password, rest) {
  const users = await _readUsers();
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const newUser = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    ...rest,
  };

  users.push(newUser);
  await _writeUsers(users);

  return { message: "User registered successfully", data: newUser };
}

// Private helper functions
async function _readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function _writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

module.exports = { getUserById, createUser };
