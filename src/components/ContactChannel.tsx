import Link from 'next/link'
import DescriptionCard from './DescriptionCard'

interface ContactChannelInformation {
	heading: string
	[key: string]: string
}
export default function ContactChannel() {
	const contactChannelInformation: ContactChannelInformation[] = [
		{
			heading: 'CONTACT',
			Phone: '010-9936-9771',
			Email: 'dohyeonsu63@gmail.com',
		},
		{
			heading: 'CHANNEL',
			Github: 'https://github.com/dohyeons',
			Blog: 'https://velog.io/@ddhhss0603',
		},
	]
	return (
		<section className="flex justify-center px-[22px] bg-evenBg">
			<div className=" w-[890px] flex justify-between items-center tablet:flex-col py-6 tablet:h-[560px]  mobile:flex-col mobile:h-[385px]">
				{contactChannelInformation.map((informaion, idx) => (
					<DescriptionCard
						size="contactChannel"
						key={`${informaion.heading}-${idx.toString()}`}
					>
						<h2 className="text-5xl font-black mobile:text-3xl">
							{informaion.heading}
						</h2>
						<ul className="flex flex-col justify-between h-24">
							{[1, 2].map(num =>
								informaion[Object.keys(informaion)[0]] === 'CHANNEL' ? (
									<Link
										key={num + 1}
										href={informaion[Object.keys(informaion)[num]]}
										className="text-nav mobile:text-xs mobile:h-14 hover:text-inherit transition-color duration-300"
									>
										<li>
											{`${Object.keys(informaion)[num]}: ${
												informaion[Object.keys(informaion)[num]]
											}`}
										</li>
									</Link>
								) : (
									<li
										key={num}
										className="text-nav mobile:text-xs mobile:h-14 hover:text-inherit transition-color duration-300"
									>
										{`${Object.keys(informaion)[num]}: ${
											informaion[Object.keys(informaion)[num]]
										}`}
									</li>
								),
							)}
						</ul>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
