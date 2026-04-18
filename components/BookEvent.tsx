'use client'

import {useState} from "react";
import {createBooking} from "@/lib/actions/booking.actions";
import posthog from "posthog-js";

const BookEvent = ({eventId,slug} : {eventId: string,slug: string}) => {
    const [email,setEmail] = useState("");
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {success} = await createBooking({eventId,slug,email})

        if (success) {
            setSubmitted(true);
            posthog.capture('event_booked',{
                event_id: eventId,
                slug: slug,
                email: email,
            })
        }else{
            console.log('booking creation failed');
            posthog.captureException('booking creation failed')
        }
    }

    return (
        <div id="book-event">
            {submitted ? (
                <p className="text-sm">
                    Thank you for signing up!
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder="Enter your email address"
                        />
                    </div>

                    <button type="submit" onClick={() => setSubmitted(true)}>Book Now</button>
                </form>
            )

            }
        </div>
    )
}
export default BookEvent
