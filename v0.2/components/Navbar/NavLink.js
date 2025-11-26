import Link from 'next/link'

export default function NavLink({ href, children }) {
    return(
        <Link
            href={href}
            className="hover:text-gray-500 transition-colors duration-300 ease-in-out"
        >
            {children}
        </Link>
    );
}