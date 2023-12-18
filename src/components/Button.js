import Link from "next/link";


export default function Button(props) {
    const { text, href } = props;
    return <Link href={href}>
    <button className={`bg-transparent text-xl focus:outline-none item-dark-enabled p-6 rounded-lg hover:bg-teal-400 hover:text-slate-800 transition duration-300 ${props.className}`}>
        {text}
    </button>
    </Link>
}
