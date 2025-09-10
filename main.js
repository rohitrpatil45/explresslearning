// main.js
import User from "./models/User.js";

try {
  // CREATE
  const newUser = User.create({ name: "Rohit", age: 22, email: "rohit@example.com" });
  console.log("User Created:", newUser);

  // READ
  const users = User.findAll();
  console.log("All Users:", users);
} catch (err) {
  console.error("Error:", err.message);
}
