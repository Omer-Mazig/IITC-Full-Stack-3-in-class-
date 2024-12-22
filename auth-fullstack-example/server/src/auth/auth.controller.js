async function register(req, res) {
  try {
    const { email, password, ...rest } = req.body;
    const result = await createUser(email, password, rest);
    res.status(201).json(result);
  } catch (error) {
    console.log("Error while registering user", error);
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await authenticateUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error while logging in user", error);
    res.status(401).json({ message: error.message });
  }
}

async function getLoggedInUser(req, res) {
  const { userId } = req;
  try {
    const user = await getUserById(userId);
    res.json(user);
  } catch (error) {
    console.log("Error while getting logged in user", error);
    res.status(404).json({ message: error.message });
  }
}

module.exports = { register, login, getLoggedInUser };
