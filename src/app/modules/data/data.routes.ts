import express from "express";
import { DataController } from "./data.controller";
const router = express.Router();

router.post("/", DataController.createData);
router.get("/", DataController.getAllData);
router.get("/:id", DataController.getData);

export const DataRoutes = router;