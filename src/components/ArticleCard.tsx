import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
	content: string;
	date: Date | string;
	id: string;
}

export function ArticleCard({ content, date, id }: ArticleCardProps) {
	const navigate = useNavigate();
	const dateString =
		typeof date === "string" ? date : date.toLocaleDateString();

	const handleClick = () => {
		navigate(`/article/${id}`);
	};

	return (
		<>
			<div
				className="flex flex-col content-center bg-white p-5 rounded-lg shadow-lg mt-2.5 cursor-pointer"
				onClick={handleClick}
			>
				<p>{content}</p>
				<div className="flex flex-row mt-2.5">
					<span className="text-gray-500 text-sm">{dateString}</span>
				</div>
			</div>
		</>
	);
}
