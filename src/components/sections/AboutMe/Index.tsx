import Image from 'next/image'
import Profile from 'public/Do-hyeonsu_profile.jpeg'
import { AboutMeIntroduction } from '@/asset/Contants'
import SectionHeading from '@/components/common/SectionHeading'

export default function AboutMe() {
	return (
		<section className="flex justify-center bg-oddBg mt-[73px]" id="About">
			<div className="flex flex-col space-y-[70px] w-desktopHeader items-center p-16">
				<SectionHeading heading="ABOUT ME" />
				<article className=" flex items-center gap-7 tablet:gap-10 tablet:flex-col mobile:flex-col">
					<Image
						src={Profile}
						alt="Profile Image"
						width={260}
						height={260}
						className="rounded-md"
					/>
					<div className="flex-col inline-flex tablet:items-center mobile:items-center">
						<AboutMeIntroduction />
					</div>
				</article>
			</div>
		</section>
	)
}
