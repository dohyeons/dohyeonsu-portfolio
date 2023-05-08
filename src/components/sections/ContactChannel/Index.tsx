import { contactChannelInformation } from '@/asset/Contants'
import ContactChannelCard from './ContactChannelCard'

export default function ContactChannel() {
	return (
		<section className="flex justify-center px-[22px] bg-evenBg">
			<ContactChannelCard
				contactChannelInformation={contactChannelInformation}
			/>
		</section>
	)
}
