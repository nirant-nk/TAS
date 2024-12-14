import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["doctor", "patient"],
    required: true,
  },
  specialization: {
    type: String,
    required: function () {
      return this.role === "doctor";
    },
  },
  consultationFee: {
    type: Number,
    required: function () {
      return this.role === "doctor";
    },
    default: 0,
  },
  clinicLocation: String,
  timeZone: {
    type: String,
    required: true,
    default: "UTC",
  },
  availability: [
    {
      day: String, // e.g., Monday
      startTime: String, // e.g., 09:00
      endTime: String, // e.g., 17:00
    },
  ],
  pastAppointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  upcomingAppointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  cancelledAppointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;
