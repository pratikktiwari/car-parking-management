import { createPool } from "mysql";
import { Request } from "express";
import { CheckStatus, ParkingData, UserData } from "./Types";

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
  //@ts-ignore
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

const checkStatusService = (
  data: CheckStatus,
  req: Request<any>,
  callBack: Function
) => {
  //@ts-ignore
  const currentUserEmail = req.session.email;
  const parkingRecordId = Number(data.tokenNumber);
  if (true) {
    sqlConnection.query(
      `SELECT PR.parkingRecordId, PR.areaId, PR.registrationNumber, PR.parkingDuration, PR.ownerName, PR.ownerAddress, PR.createdTime, SA.city,SA.area FROM parkingRecords PR LEFT JOIN serviceArea SA ON SA.areaId=PR.areaId LEFT JOIN parkingStatus PS ON PS.parkingRecordId=PR.parkingRecordId WHERE PR.parkingRecordId=? OR PR.registrationNumber=?`,
      [parkingRecordId, data.registrationNumber],
      (error, results, fields) => {
        if (error) {
          console.log("Error while fetching vehicle data");
          console.log(error);
          return callBack(error);
        }
        console.log("Fetched resume data successfully");
        console.log(results);
        return callBack(null, results);
      }
    );
  } else {
    console.log("No email in session");
    return callBack(new Error());
  }
};

const parkVehicleService = (
  data: ParkingData,
  req: Request<any>,
  callBack: Function
) => {
  //@ts-ignore
  const currentUserEmail = req.session.email;
  // const isAdmin = String(data.isAdmin);
  let parkingResData = null;
  let areaId = 0;
  if (true) {
    sqlConnection.query(
      `SELECT areaId FROM serviceArea WHERE city='${data.cityName}' AND area='${data.areaName}'`,
      (error, results, fields) => {
        if (error) {
          console.log("Error while saving parking data");
          console.log(error);
          return callBack(error);
        }
        console.log("Saved parking data to DB: Area ID");
        console.log(results[0].areaId);
        areaId = results[0].areaId;

        if (areaId) {
          sqlConnection.query(
            `SELECT COUNT(areaId) AS count FROM parkingStatus WHERE areaId=${areaId} AND status='free' LIMIT 1`,
            (error, results, fields) => {
              if (error) {
                console.log("Error while saving parking data");
                console.log(error);
                return callBack(error);
              }
              console.log("Saved parking data to DB: Area ID");
              parkingResData = results;
              if (results[0].count > 0) {
                console.log("Greater than 0", results[0].count);
                // UPDATE parkingStatus SET status='parked'
                sqlConnection.query(
                  `INSERT INTO parkingRecords ( areaId, vehicleClass, registrationNumber, parkingDuration, ownerName, ownerAddress
                    )
                    VALUES (?,?,?,?,?,?)`,
                  [
                    areaId,
                    data.vehicleClass,
                    data.registrationNumber,
                    data.parkingDuration,
                    data.ownerName,
                    data.ownerAddress,
                  ],
                  (error, results, fields) => {
                    if (error) {
                      console.log("Error while saving parking data");
                      console.log(error);
                      return callBack(error);
                    }
                    console.log("Saved parking data to DB");
                    console.log(results);

                    sqlConnection.query(
                      `UPDATE parkingStatus SET status='parked', parkingRecordId='${results.insertId}' WHERE areaId='${areaId}' AND status='free' LIMIT 1`,
                      (error, results, fields) => {
                        if (error) {
                          console.log("Error while saving parking data");
                          console.log(error);
                          return callBack(error);
                        }
                        console.log("Saved parking data to DB: Area ID");
                      }
                    );
                    return callBack(null, results);
                  }
                );
              } else {
                return callBack(null, { error: "No slots available" });
              }
            }
          );
        }
      }
    );
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

export { loginService, parkVehicleService, checkStatusService };
