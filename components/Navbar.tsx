import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

                    <p>DevEvent</p>
                </Link>

                <ul>
                    <Link href="/about">Home</Link>
                    <Link href="/about">Events</Link>
                    <Link href="/about">Create Events</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
