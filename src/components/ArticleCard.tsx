interface ArticleCardProps {
	content: string;
	date: Date | string;
}

export function ArticleCard({ content, date }: ArticleCardProps) {
	const dateString =
		typeof date === "string" ? date : date.toLocaleDateString();
	return (
		<>
			<div className="flex flex-col content-center bg-white p-5 rounded-lg shadow-lg mt-2.5">
				<p>{content}</p>
				<div className="flex flex-row mt-2.5">
					<span className="text-gray-500 text-sm">{dateString}</span>
				</div>
			</div>
		</>
	);
}
