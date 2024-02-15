"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="navbar py-5">
            <div className="container">
                <Link
                    href="/"
                    className={`link ${pathname === "/" ? "active" : ""}`}
                >
                    <h1 className="text-3xl font-bold">Marvel´s App</h1>
                </Link>

                <ul>
                    <li>
                        <Link
                            className={`link ${
                                pathname === "/" ? "active" : ""
                            }`}
                            href="/"
                        >
                            Characters
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/series"
                            className={`link ${
                                pathname === "/series" ? "active" : ""
                            }`}
                        >
                            Series
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/comics"
                            className={`link ${
                                pathname === "/comics" ? "active" : ""
                            }`}
                        >
                            Comics
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
