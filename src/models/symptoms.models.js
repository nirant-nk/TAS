import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  symptomType: {
    type: String,
    enum: [
      "Severe pain or breathing issues",
      "Moderate discomfort or persistent symptoms",
      "Mild symptoms or routine check-up",
    ],
    required: true,
  },
  duration: {
    type: String,
    enum: ["Less than 24 hours", "1–7 days", "More than a week"],
    required: true,
  },
  painLevel: {
    type: String,
    enum: ["Severe (8–10)", "Moderate (4–7)", "Mild (1–3)"],
    required: true,
  },
  dailyImpact: {
    type: Boolean,
    required: true,
  },
  specialPopulation: {
    type: String,
    enum: ["Child (under 12)", "Elderly (65+)", "Pregnant", "None of the above"],
    required: true,
  },
  urgencyLevel: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps:true});

const Symptom = mongoose.model("Symptom", symptomSchema);
export default Symptom;
