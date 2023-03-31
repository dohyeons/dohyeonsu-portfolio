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
			Github: '010-9936-9771',
			Blog: 'dohyeonsu63@gmail.com',
		},
	]

	return (
		<section className="flex justify-center px-[22px] bg-evenBg">
			<div className=" w-[890px] h-[268px] border border-green-600 flex justify-between items-center">
				<article className="bg-white w-[385px] h-[234px] rounded-[20px] placeholder drop-shadow-cardShadow py-6 flex flex-col justify-between items-center">
					<h2 className="text-5xl font-black  mobile:text-3xl">CONTACT</h2>
					<ul className="flex flex-col justify-between h-[90px] text-nav">
						<li>Phone: 010-9936-9771</li>
						<li>E-mail: dohyeonsu63@gmail.com</li>
					</ul>
				</article>
			</div>
		</section>
	)
}
