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
			'w-[385px] h-[234px] mobile:w-[231px] mobile:h-[161px] py-6',
	}
	return (
		<article
			className={`${sizeVariants[size]} bg-white rounded-[20px] drop-shadow-cardShadow flex flex-col justify-between items-center`}
		>
			{children}
		</article>
	)
}
