import Link from "next/link";

export default function Button(props) {
    const { text, href, className } = props; // Extract className from props
    return (
        <Link href={href} passHref>
            <button className={`bg-transparent text-xl focus:outline-none item-dark-enabled p-6 rounded-lg hover:bg-teal-400 hover:text-slate-800 transition duration-300 ${className}`}>
                {text}
            </button>
        </Link>
    );
}

