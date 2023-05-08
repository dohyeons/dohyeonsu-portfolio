export default function SectionHeading({ heading }: { heading: string }) {
	return (
		<h2 className="text-5xl font-black text-center mobile:text-3xl drop-shadow-headingShadow">
			{heading}
		</h2>
	)
}
