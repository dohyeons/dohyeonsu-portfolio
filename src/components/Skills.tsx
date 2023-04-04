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
		<section className="flex flex-col justify-center items-center py-[70px] space-y-[70px]  border border-black">
			<h2 className="text-5xl font-black">SKILLS</h2>
			<div className="w-[831px] flex flex-wrap justify-around border border-green-600">
				{skillLogo.map((logo, idx) => (
					<DescriptionCard size="skills" key={logo + idx.toString()}>
						<div className="w-32 h-32 flex items-center">
							<Image src={logo} alt="스킬 로고" width={128} height={128} />
						</div>
						<h4 className="py-3 text-[18px]">{logo.slice(0, -4)}</h4>
						<div className="overflow-auto">
							<p className="text-nav font-medium">
								타입과 인터페이스를 상황에 맞게 사용할 수 있습니다.
								tailwindcss를 사용해서 스타일링을 할 수 있습니다. 아시겠죠?
							</p>
						</div>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
