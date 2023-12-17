export default function Button({ href, text, className }) {
    return (
        <a href={href} className={`bg-transparent flex justify-center items-center text-xl focus:outline-none item-dark-enabled p-6 rounded-lg hover:bg-teal-400 hover:text-slate-800 transition duration-300 ${className}`}>
            {text}
        </a>
    );
}

