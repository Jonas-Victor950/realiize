import Conection from "./Conection";
import mongoose from "mongoose";
import authDB from "./default";

mongoose.set("strictQuery", true);

mongoose.connect(
  `mongodb+srv://${authDB.user}:${authDB.pass}@realiize.arevtwu.mongodb.net/`
);
const mongoDB = new Conection(
  `mongodb+srv://${authDB.user}:${authDB.pass}@realiize.arevtwu.mongodb.net/`
);
export default mongoDB;
