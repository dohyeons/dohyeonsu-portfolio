/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
	const handleContactClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const textToCopy = event.currentTarget.innerText
		const textWithoutPrefix = textToCopy
			.substring(textToCopy.indexOf(':') + 1)
			.trim()
		navigator.clipboard.writeText(textWithoutPrefix)
	}
	return (
		<section className="flex justify-center px-[22px] bg-evenBg">
			<div className=" w-[890px] flex justify-between items-center tablet:flex-col py-6 tablet:h-[560px]  mobile:flex-col mobile:h-[385px]">
				{contactChannelInformation.map((informaion, idx) => (
					<DescriptionCard
						size="contactChannel"
						key={`${informaion.heading}-${idx.toString()}`}
					>
						<h2 className="text-5xl font-black mobile:text-3xl drop-shadow-headingShadow">
							{informaion.heading}
						</h2>
						<ul className="flex flex-col justify-around gap-3 h-full">
							{[1, 2].map(num =>
								informaion[Object.keys(informaion)[0]] === 'CONTACT' ? (
									<div key={num} onClick={handleContactClick}>
										<li className="text-nav mobile:text-xs hover:cursor-pointer hover:text-inherit transition-colors duration-300">
											{`${Object.keys(informaion)[num]}: ${
												informaion[Object.keys(informaion)[num]]
											}`}
										</li>
									</div>
								) : (
									<Link
										key={num + 1}
										href={informaion[Object.keys(informaion)[num]]}
										className="text-nav mobile:text-xs hover:text-inherit transition-colors duration-300"
									>
										<li>
											{`${Object.keys(informaion)[num]}: ${
												informaion[Object.keys(informaion)[num]]
											}`}
										</li>
									</Link>
								),
							)}
						</ul>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
