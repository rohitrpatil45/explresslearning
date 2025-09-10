let users = [
  { id: 1, name: "Rohit", email: "rohit@gmail.com" }
];


export const getAllUsers = (req, res) => {
  res.json(users);
};


export const addUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.json({ message: "User added!", user: newUser });
};
