const authDB = {
  user: process.env.DB_USER as string,
  pass: process.env.DB_PASS as string,
  email: process.env.EMAIL as string,
  code: process.env.EMAIL_CODE as string,
};
export default authDB;
