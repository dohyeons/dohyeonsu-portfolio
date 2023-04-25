import Image from 'next/image'
import pilliveryImage from 'public/Pillivery.png'
import DescriptionCard from './DescriptionCard'
import ProjectButton from './ProjectButton'

export default function Projects() {
	const projects = [
		{
			projectTitle: 'Pillivery',
			subtitle:
				'2022.11.08 ~ 2022.12.07 코드스테이츠 파이널 프로젝트 (7인/4주)',
			projectImage: pilliveryImage,
			description:
				'프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다.프로젝트 설명입니다. 프로젝트 설명입니다.',
			links: {
				github: 'https://github.com/dohyeons/seb40_main_033',
				blog: 'https://velog.io/@ddhhss0603/Project-%EC%98%81%EC%96%91%EC%A0%9C-%EC%87%BC%ED%95%91%EB%AA%B0Pillivery-%ED%8C%80-%EB%B9%8C%EB%94%A9-%EB%B0%8F-%EA%B8%B0%ED%9A%8D',
				visit: 'http://pillivery.s3-website.ap-northeast-2.amazonaws.com/',
			},
		},
	]

	return (
		<section
			id="Projects"
			className="flex flex-col items-center bg-evenBg px-9 mobile:px-8 space-y-[70px] py-[70px] scroll-smooth"
		>
			<h2 className="text-5xl font-black font-black drop-shadow-headingShadow mobile:text-3xl">
				Projects
			</h2>
			<div>
				{projects.map((project, idx) => (
					<DescriptionCard
						size="projects"
						key={project.projectTitle + idx.toString()}
					>
						<div className="flex flex-col gap-2 items-center justify-between">
							<h3 className="text-4xl font-black mobile:text-2xl">Pillivery</h3>
							<p className="text-[20px] font-normal mobile:text-sm text-center  text-subtitle">
								{project.subtitle}
							</p>
						</div>
						<div className="flex tablet:flex-col tablet:space-x-0 tablet:space-y-[20px] mobile:flex-col mobile:space-x-0 mobile:space-y-[20px] max-w-[860px] w-full space-x-[20px]">
							<Image
								alt="프로젝트 이미지"
								src={project.projectImage}
								width={460}
								height={460}
								className="mobile:w-full tablet:w-full"
							/>
							<div className="flex flex-col space-y-8 items-center max-w-[405px] tablet:max-w-none mobile:max-w-none w-full">
								<p className="font-semibold mobile:text-sm">
									{project.description}
								</p>
								<div className="flex max-w-full w-full gap-3 mobile:flex-col justify-center ">
									{Object.entries(project.links).map(([link, address], id) => (
										<ProjectButton
											buttonName={link}
											address={address}
											key={project.projectTitle + id.toString()}
										/>
									))}
								</div>
							</div>
						</div>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
