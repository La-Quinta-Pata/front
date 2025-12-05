import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

const linkClass = ({ isActive }) =>
    `block px-6 py-4 text-2xl sm:text-3xl font-grandstander transition-colors ${
        isActive
            ? "text-black"
            : "text-gray-700 hover:text-black"
    }`;


    const mobileLinkClass = ({ isActive }) =>
        `block px-6 py-4 text-2xl transition-colors ${isActive
            ? "text-black bg-[#FCBF49]/10"
            : "text-gray-700 hover:text-black hover:bg-gray-50"
        }`;

    return (
        <nav className="w-full bg-[#FCBF49]/">
            <section className="container px-4 mx-auto sm:px-6 lg:px-8">
                <section className="flex items-center justify-between py-4 lg:hidden">
                    <h3 className="text-xl">Menú</h3>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </section>

<ul className="flex-wrap justify-end hidden gap-4 mb-2 lg:flex sm:gap-8">
                                    <li>
                        <NavLink to="/" className={linkClass}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalogo" className={linkClass}>
                            Catálogo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={linkClass}>
                            Conócenos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacto" className={linkClass}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>

                {isOpen && (
                    <ul className="border-t border-gray-200 lg:hidden">
                                            <li>
                            <NavLink
                                to="/"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/catalogo"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Catálogo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Conócenos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacto"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                )}
            </section>
        </nav>
    );
}