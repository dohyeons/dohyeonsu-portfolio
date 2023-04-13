import Image from 'next/image'
import projectsImage from 'public/Pillivery.png'
import DescriptionCard from './DescriptionCard'

export default function Projects() {
	return (
		<section className="flex flex-col items-center bg-evenBg px-9 space-y-[70px] py-[70px]">
			<h2 className="text-5xl font-black text-white drop-shadow-headingShadow mobile:text-3xl">
				Projects
			</h2>
			<div>
				<DescriptionCard size="projects">
					<div className="flex flex-col h-[76px] items-center justify-between border border-black">
						<h3 className="text-4xl font-black mobile:text-2xl">Pillivery</h3>
						<p className="text-[20px] font-normal text-subtitle">
							2022.11.08 ~ 2022.12.07 코드스테이츠 파이널 프로젝트 (7인/4주)
						</p>
					</div>
					<div className="flex max-w-[860px] w-full space-x-[20px] border border-red-400">
						<Image
							alt="프로젝트 이미지"
							src={projectsImage}
							width={460}
							height={460}
						/>
						<div className="max-w-[405px] w-full border border-lime-300">
							<p className="font-semibold">
								프로젝트 설명입니다.프로젝트 설명입니다.프로젝트
							</p>
						</div>
					</div>
				</DescriptionCard>
			</div>
		</section>
	)
}
