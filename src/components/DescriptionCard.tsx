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
			'flex flex-col gap-4 max-w-[234px] mobile:mb-5 mobile:p-3 py-4 px-5 mb-9 hoveredCard',
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
