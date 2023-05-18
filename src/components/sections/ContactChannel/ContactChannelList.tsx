import { ContactChannelInformationType } from '@/type/type.type'
import Link from 'next/link'

export default function ContactChannelList({
	information,
}: {
	information: ContactChannelInformationType
}) {
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
		<ul className="flex flex-col justify-around gap-3 h-full">
			{[1, 2].map((num, id) =>
				information[Object.keys(information)[0]] === 'CONTACT' ? (
					<div
						onKeyUp={() => {}}
						key={num}
						onClick={handleContactClick}
						role="button"
						tabIndex={id}
					>
						<li className="text-nav mobile:text-xs hover:cursor-pointer hover:text-inherit transition-colors duration-300">
							{`${Object.keys(information)[num]}: ${
								information[Object.keys(information)[num]]
							}`}
						</li>
					</div>
				) : (
					<Link
						key={num + 1}
						href={information[Object.keys(information)[num]]}
						className="text-nav mobile:text-xs hover:text-inherit transition-colors duration-300"
					>
						<li>
							{`${Object.keys(information)[num]}: ${
								information[Object.keys(information)[num]]
							}`}
						</li>
					</Link>
				),
			)}
		</ul>
	)
}
