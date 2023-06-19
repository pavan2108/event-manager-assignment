import { ObjectId } from "mongoose";

type EventDraft = {
    eventName: string;
    eventDate: Date;
    organizer: string;
    email: string;
    phone: string;
    location: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    _id?: string | ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
};

type EventId = {
    _id: string | ObjectId;
};

type EventFilter = {
    eventName?: string;
    eventDate?: Date;
    organizer?: string;
    email?: string;
    phone?: string;
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    _id?: string | ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    page?: string;
    limit?: string;
};

export {
    EventDraft,
    EventId,
    EventFilter
};