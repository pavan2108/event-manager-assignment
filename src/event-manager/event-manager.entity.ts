import mongoose from "mongoose";
const eventManagerSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        street: String,
        city: String,
        state: String,
        zip: String,
    },
}, {
    timestamps: true
});

const EventManager = mongoose.model("EventManager", eventManagerSchema);

export default EventManager;