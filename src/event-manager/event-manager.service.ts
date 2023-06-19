import EventManager from "./event-manager.entity"
import { EventDraft, EventId, EventFilter } from "./types";


const createEventService = async (event: EventDraft) => {
    try {
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid, save the event to the database
        const createdEvent = await EventManager.create(event);
        await createdEvent.save();
        return {
            message: "Event created successfully",
            data: createdEvent,
            status: "success"
        };
        // If the event is saved successfully, return the event
    } catch (err: any) {
        return {
            message: err.message,
            status: "error"
        }
    }
}

const updateEventService = async (event: EventDraft & EventId) => {
    try {
        // Validate the data entered by the user
        // If the data is invalid, throw an error
        // If the data is valid, update the event in the database
        const updatedEvent = await EventManager.findByIdAndUpdate(event._id, event, { new: true });
        if (updatedEvent === null) {
            return {
                message: "Event not found",
                status: "error"
            };
        } else {
            await updatedEvent.save();
            return {
                message: "Event updated successfully",
                data: updatedEvent,
                status: "success"
            };
        }
        // If the event is updated successfully, return the event
    }
    catch (err: any) {
        return {
            message: err.message,
            status: "error"
        }
    }
}

const deleteEventService = async (id: EventId) => {
    try {
        const deletedEvent = await EventManager.findByIdAndDelete(id);
        if (deletedEvent === null) {
            return {
                message: "Event not found",
                status: "error"
            };
        }
        return {
            message: "Event deleted successfully",
            data: deletedEvent,
            status: "success"
        };
    }
    catch (err: any) {
        return {
            message: err.message,
            status: "error"
        }
    }
}

const getEventService = async (id: EventId) => {
    try {
        const event = await EventManager.findById(id);
        if (event === null) {
            return {
                message: "Event not found",
                status: "error"
            };
        }
        return {
            message: "Event retrieved successfully",
            data: event,
            status: "success"
        };
    }
    catch (err: any) {
        return {
            message: err.message,
            status: "error"
        }
    }
}

const getEventsService = async (eventFilter: EventFilter) => {
    try {
        const { eventName, eventDate, organizer, email, phone, city, _id, page, limit, state, street, zip } = eventFilter;

        // Build the filter object based on the available fields
        const filter: any = {};

        if (eventName) {
            filter.eventName = eventName;
        }

        if (eventDate) {
            filter.eventDate = new Date(eventDate);
        }

        if (organizer) {
            filter.organizer = organizer;
        }

        if (email) {
            filter.email = email;
        }

        if (phone) {
            filter.phone = phone;
        }

        if (street) {
            filter['location.street'] = street;
        }

        if (city) {
            filter['location.city'] = city;
        }

        if (state) {
            filter['location.state'] = state;
        }

        if (zip) {
            filter['location.zip'] = zip;
        }
        if (_id) {
            filter._id = _id;
        }
        const events = await EventManager.find(filter)
            .skip(page ? parseInt(page) : 0)
            .limit(limit ? parseInt(limit) : 10);
        if (events === null) {
            return {
                message: "Events not found",
                status: "error"
            };
        }
        return {
            message: "Events retrieved successfully",
            data: events,
            status: "success"
        };
    }
    catch (err: any) {
        return {
            message: err.message,
            status: "error"
        }
    }
}

export {
    getEventsService,
    createEventService,
    deleteEventService,
    updateEventService,
    getEventService
}


