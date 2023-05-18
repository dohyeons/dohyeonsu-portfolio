import { ContactChannelInformationType } from '@/type/type.type'
import DescriptionCard from '@/components/common/DescriptionCard'
import SectionHeading from '@/components/common/SectionHeading'
import ContactChannelList from './ContactChannelList'

export default function ContactChannelCard({
	contactChannelInformation,
}: {
	contactChannelInformation: ContactChannelInformationType[]
}) {
	return (
		<div className=" w-[890px] flex justify-between items-center tablet:flex-col py-6 tablet:h-[560px]  mobile:flex-col mobile:h-[385px]">
			{contactChannelInformation.map((informaion, idx) => (
				<DescriptionCard
					size="contactChannel"
					key={`${informaion.heading}-${idx.toString()}`}
				>
					<SectionHeading heading={informaion.heading} />
					<ContactChannelList information={informaion} />
				</DescriptionCard>
			))}
		</div>
	)
}
