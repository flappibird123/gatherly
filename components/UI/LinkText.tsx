interface LinkTextProps {
    text: string;
}

export default function LinkText({ text }: LinkTextProps) {
    return(
        <span className="underline text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer">{text}</span>
    );
}