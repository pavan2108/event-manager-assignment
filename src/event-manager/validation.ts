import Joi from "joi";
import { EventDraft, EventFilter } from "./types";

export const validateEventCreate = (event: EventDraft) => {
    const schema = Joi.object({
        eventName: Joi.string().required(),
        eventDate: Joi.date().required(),
        organizer: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        location: Joi.object({
            street: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            zip: Joi.string().required().length(6).label("Zip Code")
        }).required()
    });
    return schema.validate(event);
}

export const validateEventUpdate = (event: EventDraft) => {
    const schema = Joi.object({
        eventName: Joi.string(),
        eventDate: Joi.date(),
        organizer: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.string(),
        location: Joi.object({
            street: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.string().length(6).label("Zip Code")
        })
    });
    return schema.validate(event);
}

export const validateEventId = (id: string) => {
    const schema = Joi.object({
        id: Joi.string().required()
    });
    return schema.validate({ id });
}

export const validateEventFilter = (filter: EventFilter) => {
    const schema = Joi.object({
        eventName: Joi.string(),
        eventDate: Joi.date(),
        organizer: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.string(),

        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        zip: Joi.string().length(6).label("Zip Code"),
        page: Joi.string(),
        limit: Joi.string(),
        _id: Joi.string(),
    });
    return schema.validate(filter);
}