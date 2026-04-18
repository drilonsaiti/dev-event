export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string; // e.g., "2025-11-07"
    time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
    {
        title: "Google I/O 2026",
        image: "/images/event1.png",
        slug: "google-io-2026",
        location: "Mountain View, CA, USA",
        date: "May 20, 2026",
        time: "9:00 AM PDT",
    },
    {
        title: "Microsoft Build 2026",
        image: "/images/event2.png",
        slug: "microsoft-build-2026",
        location: "Seattle, WA, USA",
        date: "May 27, 2026",
        time: "10:00 AM PDT",
    },
    {
        title: "React Summit 2026",
        image: "/images/event3.png",
        slug: "react-summit-2026",
        location: "Amsterdam, Netherlands",
        date: "June 12, 2026",
        time: "9:30 AM CEST",
    },
    {
        title: "ETHGlobal London Hackathon",
        image: "/images/event4.png",
        slug: "ethglobal-london-2026",
        location: "London, UK",
        date: "July 18, 2026",
        time: "8:00 AM BST",
    },
    {
        title: "AWS re:Invent 2026",
        image: "/images/event5.png",
        slug: "aws-reinvent-2026",
        location: "Las Vegas, NV, USA",
        date: "November 30, 2026",
        time: "8:30 AM PST",
    },
    {
        title: "JSConf Budapest 2026",
        image: "/images/event6.png",
        slug: "jsconf-budapest-2026",
        location: "Budapest, Hungary",
        date: "October 9, 2026",
        time: "10:00 AM CEST",
    },
];

export default events;