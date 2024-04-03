import Conection from "./Conection";
import mongoose from "mongoose";
import authDB from "./default";

mongoose.set("strictQuery", true);

mongoose.connect(
  `mongodb+srv://jonasvpsouza950:fDjDTGtZtEiEgGpy@realiize.arevtwu.mongodb.net/`
);
const mongoDB = new Conection(
  `mongodb+srv://jonasvpsouza950:fDjDTGtZtEiEgGpy@realiize.arevtwu.mongodb.net/`
);
export default mongoDB;
