import SectionHeading from '@/components/common/SectionHeading'
import SkillCardGroup from './SkillCardGroup'

export default function Skills() {
	return (
		<section
			id="Skills"
			className="flex flex-col items-center bg-oddBg px-9 tablet:px-[158px] mobile:px-0 py-[70px] mobile:py-[35px] space-y-[70px] mobile:space-y-[35px]"
		>
			<SectionHeading heading="SKILLS" />
			<SkillCardGroup />
		</section>
	)
}
