import { Request, Response } from "express";
import { loginService } from "./service";
import { ErrorConstants, UserData } from "./Types";

const login = (req: Request<UserData>, res: Response) => {
  const body = req.body;
  loginService(body, req, (error: Error, results: any) => {
    if (error) {
      return res.status(500).json(ErrorConstants.DatabaseConnection);
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};

export { login };
