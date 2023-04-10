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
			'w-[385px] h-[234px] mobile:w-[231px] mobile:h-[161px] py-6 justify-between',
		skills: 'max-w-[234px] py-[24px] px-[20px] mb-9',
	}
	return (
		<article
			className={` ${sizeVariants[size]} bg-white rounded-[20px] drop-shadow-cardShadow flex flex-col items-center`}
		>
			{children}
		</article>
	)
}
