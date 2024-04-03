import { Schema, model } from "mongoose";

interface IJovem {
  name: string;
  email: string;
  idea: string;
  phone: string;
  age?: string;
}

const jovemSchema = new Schema<IJovem>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    idea: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: String },
  },
  {
    timestamps: true,
    collection: "Jovem",
  }
);

const Jovem = model<IJovem>("Jovem", jovemSchema);

export { Jovem, IJovem };
