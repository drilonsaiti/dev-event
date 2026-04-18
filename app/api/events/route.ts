import {NextRequest, NextResponse} from "next/server";
import {v2 as cloudinary} from "cloudinary";
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function POST(req: NextRequest) {
    let publicImageId = null;
    try {
        await connectDB();

        const formData = await req.formData();
        let event;


        try {
            event = Object.fromEntries(formData.entries());
        } catch (e) {
            return NextResponse.json({message: 'Invalid JSON data format'}, {status: 400});
        }

        const file = formData.get("image");

        if (!(file instanceof File)) {
            return NextResponse.json({
                    message: 'Image file is required',

                },
                {
                    status: 400,
                })
        }

        let tags: string[];
        let agenda: string[];

        try {
            tags = JSON.parse(formData.get("tags") as string);
            agenda = JSON.parse(formData.get("agenda") as string);
        } catch {
            return NextResponse.json(
                { message: "tags and agenda must be valid JSON arrays" },
                { status: 400 }
            );
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadResult = await new Promise((reslove, reject) => {
            cloudinary.uploader.upload_stream({resource_type: "image", folder: "dev-events"}, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    reslove(result);
                }
            }).end(buffer);
        });

        event.image = (uploadResult as { secure_url: string }).secure_url;
        publicImageId = (uploadResult as { public_id: string }).public_id;

        const createdEvent = await Event.create({
            ...event,
            tags,
            agenda,
        });

        return NextResponse.json({
                message: 'Event created successfully', event: createdEvent
            },
            {status: 201});

    } catch (e) {
        console.error(e);

        if (publicImageId) {
            try {
                await cloudinary.uploader.destroy(publicImageId);
            } catch (e) {
                console.error("Error deleting image from Cloudinary:", e);
            }
        }

        if (e instanceof Error && e.name === "ValidationError") {
            return NextResponse.json({ message: e.message }, { status: 400 });
        }

        if (typeof e === "object" && e && "code" in e && e.code === 11000) {
            return NextResponse.json({ message: "Event slug already exists" }, { status: 409 });
        }

        return NextResponse.json({
                message: "Event Creation Failed",
                error: e instanceof Error ? e.message : "Unknown error",
            },
            {status: 500});
    }
}

export async function GET() {
    try {
        await connectDB();

        const events = await Event.find().sort({createdAt: -1});

        return NextResponse.json({message: 'Events fetched successfully', events}, {status: 200});
    } catch (e) {
        return NextResponse.json({message: 'Event fetching failed', error: e}, {status: 500});
    }
}