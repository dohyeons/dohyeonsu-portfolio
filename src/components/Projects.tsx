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
		<section className="flex flex-col items-center bg-evenBg px-9 space-y-[70px] py-[70px]">
			<h2 className="text-5xl font-black text-white drop-shadow-headingShadow mobile:text-3xl">
				Projects
			</h2>
			<div>
				{projects.map((project, idx) => (
					<DescriptionCard
						size="projects"
						key={project.projectTitle + idx.toString()}
					>
						<div className="flex flex-col h-[76px] items-center justify-between border border-black">
							<h3 className="text-4xl font-black mobile:text-2xl">Pillivery</h3>
							<p className="text-[20px] font-normal text-subtitle">
								{project.subtitle}
							</p>
						</div>
						<div className="flex max-w-[860px] w-full space-x-[20px] border border-red-400">
							<Image
								alt="프로젝트 이미지"
								src={project.projectImage}
								width={460}
								height={460}
							/>
							<div className="flex flex-col space-y-2 max-w-[405px] w-full border border-lime-300">
								<p className="font-semibold">{project.description}</p>
								<div className="flex justify-between border border-blue-500">
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
