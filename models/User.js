// models/User.js
import fs from "fs";

// Fake Schema Definition (just for validation)
const userSchema = {
  name: "string",
  age: "number",
  email: "string"
};

// A helper function to validate data against schema
function validateUser(user) {
  for (const key in userSchema) {
    if (typeof user[key] !== userSchema[key]) {
      throw new Error(`${key} must be a ${userSchema[key]}`);
    }
  }
  return true;
}

// "Model" that works with JSON file
class User {
  static dbFile = "database.json";

  // CREATE
  static create(userData) {
    validateUser(userData);

    let data = JSON.parse(fs.readFileSync(this.dbFile, "utf-8"));
    data.users.push(userData);
    fs.writeFileSync(this.dbFile, JSON.stringify(data, null, 2));
    return userData;
  }

  // READ
  static findAll() {
    let data = JSON.parse(fs.readFileSync(this.dbFile, "utf-8"));
    return data.users;
  }
}

export default User;
