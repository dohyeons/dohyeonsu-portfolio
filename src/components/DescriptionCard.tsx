import { ReactNode } from 'react'

interface DescriptionCardProps {
	children: ReactNode
	size: string
}
export default function DescriptionCard({
	children,
	size,
}: DescriptionCardProps) {
	const sizeVariants: { [key in DescriptionCardProps['size']]: string } = {
		contactChannel:
			'w-[385px] h-[234px] tablet:w-[45%] mobile:w-[231px] mobile:h-[161px] py-6 justify-between hoveredCard',
		skills:
			'dsektop:max-w-[234px] tablet:w-[42%] mobile:mb-5 py-[20px] px-[20px] mb-9 hoveredCard',
		projects: 'dsektop:max-w-[952px] space-y-[32px] p-12 mobile:p-5',
	}
	return (
		<article
			className={` ${sizeVariants[size]} bg-white rounded-[20px] drop-shadow-cardShadow flex flex-col items-center`}
		>
			{children}
		</article>
	)
}
