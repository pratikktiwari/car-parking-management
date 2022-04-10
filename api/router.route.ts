import { Router } from "express";
import { checkStatus, login, parkVehicle, releaseVehicle } from "./controller";

const router = Router();

router.post("/login", login);

router.post("/park", parkVehicle);

router.post("/checkStatus", checkStatus);

router.post("/release", releaseVehicle);

module.exports = router;
