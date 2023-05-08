import Image from 'next/image'
import { skillLogo } from '@/asset/Contants'
import SectionHeading from '@/components/common/SectionHeading'
import DescriptionCard from '../../common/DescriptionCard'

export default function Skills() {
	return (
		<section
			id="Skills"
			className="flex flex-col items-center bg-oddBg px-9 tablet:px-[158px] mobile:px-0 py-[70px] mobile:py-[35px] space-y-[70px] mobile:space-y-[35px]"
		>
			<SectionHeading heading="SKILLS" />
			<div className="w-[831px] mobile:w-full tablet:w-[520px] gap-4 mobile:max-w-[230px] flex flex-wrap justify-evenly">
				{skillLogo.map((logo, idx) => (
					<DescriptionCard size="skills" key={logo + idx.toString()}>
						<div className="w-32 h-32 mobile:w-[44px] mobile:h-[44px] flex items-center">
							<Image
								src={logo}
								alt="스킬 로고"
								width={128}
								height={128}
								className="mobile:w-[44px] mobile:h-[44px]"
							/>
						</div>
						<div className=" text-sm mobile:hidden">{logo.slice(0, -4)}</div>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
