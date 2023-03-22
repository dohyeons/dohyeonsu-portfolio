/* eslint-disable import/no-extraneous-dependencies */
import { TbSquareRoundedLetterD } from 'react-icons/tb'
import { RiStackFill } from 'react-icons/ri'

export default function Header() {
	const navMenu = ['About', 'Skills', 'Projects']

	return (
		<header className="border-b h-16 flex justify-center">
			<div className="w-desktopHeader headerContainer-reponsive h-full flex items-center justify-between">
				<button type="button">
					<TbSquareRoundedLetterD className="w-10 h-10 text-nav hover:cursor-pointer mobile:w-8 mobile:h-8 hover:text-inherit transition-colors duration-300" />
				</button>
				<nav>
					<ul className="flex w-nav justify-between ">
						{navMenu.map((Menu, idx) => (
							<li
								key={`${idx.toString()}-${Menu}`}
								className="inline-block text-xl text-nav"
							>
								<span>{Menu}</span>
							</li>
						))}
					</ul>
					<button type="button">
						<RiStackFill className="w-7 h-7 text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300" />
					</button>
				</nav>
			</div>
		</header>
	)
}
