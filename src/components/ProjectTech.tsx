export default function ProjectTech({
	projectTech,
	propType,
}: {
	projectTech: string[]
	propType: string
}) {
	return (
		<div className="text-lg text-[#6fa2cb]">
			✔️ {propType}
			<ul className="list-disc">
				{projectTech.map((el, id) => (
					<li
						className="font-normal text-[#1d1d1f] text-base mobile:text-sm break-keep"
						key={el + id.toString()}
					>
						{el}
					</li>
				))}
			</ul>
		</div>
	)
}
