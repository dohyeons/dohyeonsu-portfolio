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
			<div className=" w-[890px] h-[268px] border border-green-600 flex justify-between items-center">
				{contactChannelInformation.map((informaion, idx) => (
					<DescriptionCard
						size="contactChannel"
						key={`${informaion.heading}-${idx.toString()}`}
					>
						<h2 className="text-5xl font-black  mobile:text-3xl">
							{informaion.heading}
						</h2>
						<ul className="flex flex-col justify-between h-[90px] text-nav">
							<li>
								{`${Object.keys(informaion)[1]}: ${
									informaion[Object.keys(informaion)[1]]
								}`}
							</li>
							<li>
								{`${Object.keys(informaion)[2]}: ${
									informaion[Object.keys(informaion)[2]]
								}`}
							</li>
						</ul>
					</DescriptionCard>
				))}
			</div>
		</section>
	)
}
