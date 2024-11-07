import leaveModel from "../models/leave.model.js";

export const leaveFunc = async (req, res) => {
  const {
    leaveType,
    startDate,
    endDate,
    reason,
    companyMail,
    logo,
    employeeId,
    firstName,
    email,
    mobileNumber,
  } = req.body;

  try {
    const leaveData = new leaveModel({
      leaveType,
      startDate,
      endDate,
      reason,
      companyMail,
      logo,
      employeeId,
      firstName,
      email,
      mobileNumber,
    });


    await leaveData.save();
    res.status(201).json({ message: "Leave applied successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error applying leave", details: error.message });
  }
};


export const leavefetch = async (req, res) => {
  const { companyEmail } = req.params;
  try {

    const leavedata = await leaveModel.find({companyMail: companyEmail });

    if (leavedata.length === 0) {
      return res.status(404).json({ message: "No leave data found for the given company email" });
    }

    res.status(200).json({ message: "Data fetched successfully", leavedata });

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

