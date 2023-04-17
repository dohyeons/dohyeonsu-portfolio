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
		github: ['bg-githubButton pl-[10px] pr-3 hover:bg-hoveredGithubButton'],
		blog: ['bg-blogButton pl-[10px] pr-6 hover:bg-hoveredBlogButton'],
		visit: ['bg-visitButton pl-[10px] pr-7 hover:bg-hoveredVisitButton'],
	}
	return (
		<Link
			href={address}
			className={`flex justify-center ${buttonType[buttonName][0]} items-center w-28 h-12 rounded-lg text-white text-sm font-bold transition-colors duration-300`}
		>
			<div className="flex items-center w-full justify-between">
				{buttonName === 'github' && <AiFillGithub className=" w-8 h-8" />}
				{buttonName === 'blog' && <BiBookBookmark className=" w-8 h-8" />}
				{buttonName === 'visit' && <TiLocation className=" w-8 h-8" />}
				<p>{buttonName.toUpperCase()}</p>
			</div>
		</Link>
	)
}
