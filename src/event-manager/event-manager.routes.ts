import { Router } from "express";
import { createEventController, deleteEventController, getEventController, getEventsListController, updateEventController } from "./event-manager.controller";

const eventManagerRoutes = Router();

eventManagerRoutes.post("/create", createEventController);
eventManagerRoutes.put("/:_id", updateEventController);
eventManagerRoutes.get("/get", getEventsListController);
eventManagerRoutes.get("/:_id", getEventController);
eventManagerRoutes.delete("/:_id", deleteEventController);

export default eventManagerRoutes;