import Image from 'next/image'
import DescriptionCard from './DescriptionCard'

export default function Skills() {
	const skillLogo = [
		'JavaScript.svg',
		'TypeScript.svg',
		'React.svg',
		'Redux.svg',
		'styled-components.svg',
		'TailwindCSS.svg',
		'vercel.svg',
	]
	return (
		<section className="flex flex-col items-center bg-oddBg px-9 tablet:px-[158px] mobile:px-0 py-[70px] mobile:py-[35px] space-y-[70px] mobile:space-y-[35px]">
			<h2 className="text-5xl font-black mobile:text-3xl">SKILLS</h2>
			<div className="w-[831px] tablet:w-full mobile:w-full tablet:min-w-[520px] mobile:max-w-[230px] flex flex-wrap justify-around">
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
						<h4 className="py-3 text-[18px] mobile:hidden">
							{logo.slice(0, -4)}
						</h4>
						<div className="w-full h-[120px] overflow-auto mobile:hidden">
							<p className="text-nav font-medium">
								타입과 인터페이스를 상황에 맞게 사용할 수 있습니다.
								tailwindcss를 사용해서 스타일링을 할 수 있습니다.
							</p>
						</div>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
