import { ProjectsIntroduction } from '@/asset/Contants'
import SectionHeading from '@/components/common/SectionHeading'

export default function Projects() {
	return (
		<section
			id="Projects"
			className="flex flex-col items-center bg-evenBg px-9 mobile:px-8 space-y-[70px] py-[70px]"
		>
			<SectionHeading heading="PROJECTS" />
			<ProjectsIntroduction />
		</section>
	)
}
