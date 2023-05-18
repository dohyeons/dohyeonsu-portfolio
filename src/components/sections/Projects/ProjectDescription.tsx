import { ProjectInformation } from '@/type/type.type'
import ProjectTech from './ProjectTech'
import ProjectButtonGroup from './ProjectButtonGroup'

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
			<ProjectButtonGroup links={projectInformation.links} />
		</div>
	)
}
