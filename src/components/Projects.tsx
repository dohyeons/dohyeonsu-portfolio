import DescriptionCard from './DescriptionCard'

export default function Projects() {
	return (
		<section className="flex flex-col items-center bg-evenBg px-9 space-y-[70px] py-[70px]">
			<h2 className="text-5xl font-black text-white drop-shadow-headingShadow mobile:text-3xl">
				Projects
			</h2>
			<div>
				<DescriptionCard size="projects">
					<div className="flex flex-col h-[76px] items-center justify-between">
						<h3 className="text-4xl font-black mobile:text-2xl">Pillivery</h3>
						<p className="text-[20px] font-normal text-subtitle">
							2022.11.08 ~ 2022.12.07 코드스테이츠 파이널 프로젝트 (7인/4주)
						</p>
					</div>
				</DescriptionCard>
			</div>
		</section>
	)
}
