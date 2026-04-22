# DevEvent

DevEvent is a full-stack web application built with Next.js that serves as a central hub for discovering, exploring, and booking developer-focused events like hackathons, meetups, and conferences.

## Features

-   **Event Discovery:** Browse a curated list of featured developer events on the homepage.
-   **Detailed Event Pages:** View comprehensive details for each event, including an overview, location, date, time, agenda, organizer information, and relevant tags.
-   **Event Booking:** Users can easily book a spot for an event by providing their email address.
-   **Similar Event Suggestions:** Discover related events based on shared tags to find more content of interest.
-   **Dynamic Backgrounds:** A visually appealing, mouse-interactive light ray effect using OGL (WebGL) enhances the user interface.
-   **RESTful API:** A set of API endpoints to fetch, create, and manage event data.

## Technology Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
-   **Image Management:** [Cloudinary](https://cloudinary.com/) for image hosting and management.
-   **Graphics:** [OGL](https://github.com/oframe/ogl) for WebGL-based background animations.
-   **Analytics:** [PostHog](https://posthog.com/) for client-side event tracking and analytics.
-   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18.0 or later)
-   npm, yarn, or pnpm
-   MongoDB instance (local or cloud-based)
-   Cloudinary account

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables.

```
# MongoDB Connection String
MONGODB_URI=your_mongodb_connection_string

# Base URL for the application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_TOKEN=your_posthog_token
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Cloudinary Credentials (used in the API for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/drilonsaiti/dev-event.git
    cd dev-event
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

The application exposes several API endpoints to manage events.

-   `GET /api/events`
    -   Fetches a list of all events, sorted by creation date.

-   `POST /api/events`
    - Creates a new event. Requires `multipart/form-data` including an image file and other event details.

-   `GET /api/events/[slug]`
    - Fetches a single event by its unique slug.
