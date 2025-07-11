

interface TitleProps {
    title: string;
    subtitle: string;
}

export default function Title(props: TitleProps) {
    const { title, subtitle } = props;
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-400 font-bold">{title}</h3>
            <h2 className="text-3xl">{subtitle}</h2>
        </div>
    )
}
