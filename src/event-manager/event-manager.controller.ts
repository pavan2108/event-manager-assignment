import { Request, Response } from "express";
import { EventDraft, EventFilter, EventId } from "./types";
import { createEventService, deleteEventService, getEventService, getEventsService, updateEventService } from "./event-manager.service";

const createEventController = async (req: Request, res: Response) => {
    try {
        const eventDraft: EventDraft = req.body;
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid pass to the service
        const response = await createEventService(eventDraft);
        // If the event is saved successfully, return the event
        if (response.status === "error") return res.status(400).json({ message: response.message });
        else if (response.status === "success") {
            return res.status(201).json({ message: "Event created successfully", data: response });
        }
    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const updateEventController = async (req: Request & any, res: Response) => {
    try {
        const eventDraft: EventDraft = req.body;
        const eventId: any = req.params;
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid pass to the service
        const response = await updateEventService({
            ...eventDraft,
            ...eventId
        });
        if (response.status === "error") return res.status(400).json({ message: response.message });
        else if (response.status === "success") {
            return res.status(200).json({ message: "Event created successfully", data: response });
        }
        // If the event is saved successfully, return the event
    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const getEventController = async (req: Request & any, res: Response) => {
    try {
        const eventId: EventId = req.params;
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid pass to the service
        const response = await getEventService(eventId);
        if (response.status === "error") return res.status(400).json({ message: response.message });
        else if (response.status === "success") {
            return res.status(200).json({ message: "Event created successfully", data: response });
        }
    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteEventController = async (req: Request & any, res: Response) => {
    try {
        const eventId: EventId = req.params;
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid pass to the service
        const response = await deleteEventService(eventId);
        if (response.status === "error") return res.status(400).json({ message: response.message });
        else if (response.status === "success") {
            return res.status(200).json({ message: "Event created successfully", data: response });
        }

    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const getEventsListController = async (req: Request, res: Response) => {
    try {
        const eventFilters: EventFilter = req.query;
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid pass to the service
        const response = await getEventsService(eventFilters);
        if (response.status === "error") return res.status(400).json(response);
        else if (response.status === "success") {
            return res.status(200).json(response);
        }
    }
    catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};


export {
    createEventController,
    updateEventController,
    getEventController,
    deleteEventController,
    getEventsListController
}