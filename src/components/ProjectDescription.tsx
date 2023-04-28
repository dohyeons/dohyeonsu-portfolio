import ProjectButton from './ProjectButton'
import ProjectTech from './ProjectTech'

interface ProjectInformation {
	description: (string | JSX.Element)[]
	features: string[]
	skills: string[]
	links: {
		github: string
		// blog: string
		visit?: string
	}
}

export default function ProjectDescription({
	projectInformation,
}: {
	projectInformation: ProjectInformation
}) {
	return (
		<div className="flex flex-col space-y-8 max-w-[405px] tablet:max-w-none mobile:max-w-none w-full">
			<p className="font-normal mobile:text-sm">
				{projectInformation.description}
			</p>
			<ProjectTech
				projectTech={projectInformation.features}
				propType="구현 주요 기능"
			/>
			<ProjectTech
				projectTech={projectInformation.skills}
				propType="사용 기술"
			/>
			<div className="flex max-w-full w-full gap-3 mobile:flex-col justify-center self-center">
				{Object.entries(projectInformation.links).map(([link, address], id) => (
					<ProjectButton
						buttonName={link}
						address={address}
						key={link + id.toString()}
					/>
				))}
			</div>
		</div>
	)
}
