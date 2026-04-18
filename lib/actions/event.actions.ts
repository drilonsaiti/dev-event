'use server'

import connectDB from "@/lib/mongodb";
import Event, {IEvent} from "@/database/event.model";

export const getSimilarEventsBySlug = async (slug: string) => {
    try {
        await connectDB();

        const event: IEvent = await Event.findOne({slug}).lean();

        return await Event.find({
            _id: {$ne: event._id}, tags: {$in: event.tags},
        }).lean();

    } catch (e) {
        return [];
    }
}