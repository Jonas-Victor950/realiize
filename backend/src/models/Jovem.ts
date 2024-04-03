import { Schema, model } from "mongoose";

interface IJovem {
  name: string;
  email: string;
  idea?: string;
  phone: string;
  age?: string;
  nicho?: string;
  budget?: string;
  company?: string;
}

const jovemSchema = new Schema<IJovem>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    idea: { type: String },
    phone: { type: String, required: true },
    age: { type: String },
    nicho: { type: String },
    budget: { type: String },
    company: { type: String },
  },
  {
    timestamps: true,
    collection: "Jovem",
  }
);

const Jovem = model<IJovem>("Jovem", jovemSchema);

export { Jovem, IJovem };
