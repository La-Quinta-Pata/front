import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `block px-3 py-2 text-base font-grandstander transition-colors ${isActive
            ? "text-black"
            : "text-gray-700 hover:text-black"
        }`;


    const mobileLinkClass = ({ isActive }) =>
        `block px-3 py-3 text-xs transition-colors
            ${isActive
            ? "text-black bg-[#FCBF49]/10"
            : "text-gray-700 hover:text-black hover:bg-gray-50"
        }`;

    return (
        <nav className="w-full bg-[#FCBF49]/">
            <section className="container px-0 mx-auto sm:px-4 lg:px-4">
                <section className="flex items-center justify-end lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-0 text-gray-700 hover:text-[#F77F00] focus:outline-none focus:ring-2 focus:ring-[#F77F00] cursor-pointer"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </section>

                <ul className="flex-wrap justify-end hidden gap-2 sm:gap-4 mb-0 lg:flex">
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
                        <NavLink to="/quienes-somos" className={linkClass}>
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
                    <section className="relative lg:hidden">
                    <ul
                      className="
                        absolute right-0 mt-2
                        w-48 
                        bg-white 
                        rounded-lg shadow-lg border border-gray-200
                        text-right
                        overflow-hidden
                        animate-[fadeIn_0.2s_ease-out]
                      "
                    >
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
                    </section>
                )}
            </section>
        </nav>
    );
}