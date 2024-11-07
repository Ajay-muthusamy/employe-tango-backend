import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
  companyMail: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  employeeId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  nickname: { type: String },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  location: { type: String, required: true },
  designation: { type: String, required: true },
  experience: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  aboutMe: { type: String },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});
const EmployeModel = mongoose.model("Employee Data", employeeSchema);
export default EmployeModel;
