/* eslint-disable import/no-extraneous-dependencies */
import { TbSquareRoundedLetterD } from 'react-icons/tb'
import { RiStackFill } from 'react-icons/ri'

export default function Header() {
	const navMenu = ['About', 'Skills', 'Projects']

	return (
		<header className="border-b h-16 flex justify-center">
			<div className="w-desktopHeader headerContainer-reponsive h-full flex items-center justify-between">
				<div>
					<TbSquareRoundedLetterD className="w-10 h-10 text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300 mobile:w-8 mobile:h-8 " />
				</div>
				<nav>
					<button type="button" className="hidden mobile:block">
						<RiStackFill className="w-7 h-7 text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300" />
					</button>
					<ul className="flex w-nav justify-between mobile:hidden">
						{navMenu.map((Menu, idx) => (
							<li
								key={`${idx.toString()}-${Menu}`}
								className="inline-block text-xl text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300"
							>
								<span>{Menu}</span>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
