const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

async function authenticateUser(email, password) {
  const users = await _readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) {
    throw new Error("Authentication failed");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Authentication failed");
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return { token };
}

module.exports = { authenticateUser };
