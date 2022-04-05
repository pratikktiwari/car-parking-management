import { createPool } from "mysql";
import { Request } from "express";
import { UserData } from "./Types";

const sqlConnection = createPool({
  port: parseInt(process.env.MYSQL_PORT),
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASS,
  database: process.env.MYSQL_DB_NAME,
});

const loginService = (
  data: UserData,
  req: Request<any>,
  callBack: Function
) => {
  const currentUserEmail = req.session.email;
  const isAdmin = String(data.isAdmin);
  if (currentUserEmail) {
    sqlConnection.query(
      `CALL SaveNewResume(?,?,?,?,?,?)`,
      [currentUserEmail, data.userEmail, isAdmin, data.password],
      (error, results, fields) => {
        if (error) {
          console.log("Error while saving resume");
          console.log(error);
          return callBack(error);
        }
        console.log("Saved resume to DB");
        console.log(results);
        return callBack(null, results);
      }
    );
  } else {
    console.log("No email in session");
    return callBack(new Error());
  }
};
// const getResumeDataFromEmailService = (
//   data: undefined,
//   req: Request<any>,
//   callBack: Function
// ) => {
//   const currentUserEmail = req.session.email;
//   if (currentUserEmail) {
//     sqlConnection.query(
//       `SELECT UR.modifiedDate, UR.resumeId, UR.resumeName FROM userResume AS UR INNER JOIN userInfo UI ON UI.userId=UR.userId WHERE UI.email=? LIMIT 5;`,
//       [currentUserEmail],
//       (error, results, fields) => {
//         if (error) {
//           return callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   }
// };
// const getResumeDataFromResumeIdService = (
//   data: GetResumeDataParams,
//   req: Request<any>,
//   callBack: Function
// ) => {
//   const currentUserEmail = req.session.email;
//   if (currentUserEmail && !isNaN(data.resumeId)) {
//     sqlConnection.query(
//       `SELECT
//         UR.modifiedDate,
//         UR.resumeId,
//         UR.resumeName,
//         UR.resumeJSONData,
//         UR.resumeJSONOrder,
//         UR.resumeJSONTheme
//         FROM userResume UR INNER JOIN userInfo UI
//         ON UI.userId=UR.userId
//         WHERE UI.email=? AND UR.resumeId=? LIMIT 5;`,
//       [currentUserEmail, data.resumeId],
//       (error, results, fields) => {
//         if (error) {
//           return callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   }
// };

export { loginService };
