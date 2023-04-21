import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

interface ProjectButtonProps {
	buttonName: string
	address: string
}

export default function ProjectButton({
	buttonName,
	address,
}: ProjectButtonProps) {
	const buttonType: { [key in ProjectButtonProps['buttonName']]: string[] } = {
		github: [
			'bg-githubButton pl-[10px] pr-3 mobile:pr-1 hover:bg-hoveredGithubButton',
		],
		blog: [
			'bg-blogButton pl-[10px] pr-6 mobile:pr-3 hover:bg-hoveredBlogButton',
		],
		visit: [
			'bg-visitButton pl-[10px] pr-7 mobile:pr-4 hover:bg-hoveredVisitButton',
		],
	}
	return (
		<Link
			href={address}
			className={`flex justify-center ${buttonType[buttonName][0]} items-center mobile:text-xs mobile:w-20 mobile:h-10 w-28 h-12 rounded-lg text-white text-sm font-bold transition-colors duration-300`}
		>
			<div className="flex items-center w-full justify-between">
				{buttonName === 'github' && (
					<AiFillGithub className="mobile:w-4 w-8 h-8" />
				)}
				{buttonName === 'blog' && (
					<BiBookBookmark className="mobile:w-4 w-8 h-8" />
				)}
				{buttonName === 'visit' && (
					<TiLocation className="mobile:w-4 w-8 h-8" />
				)}
				<p>{buttonName.toUpperCase()}</p>
			</div>
		</Link>
	)
}
