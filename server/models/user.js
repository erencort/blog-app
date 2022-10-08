import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const Users = mongoose.model("Users", userSchema);
export default Users;
