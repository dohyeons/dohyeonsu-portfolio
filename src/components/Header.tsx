/* eslint-disable import/no-extraneous-dependencies */
import { TbSquareRoundedLetterD } from 'react-icons/tb'

export default function Header() {
	const navMenu = ['About', 'Skills', 'Projects']

	return (
		<header className="border-b h-16 flex justify-center">
			<div className="w-desktopHeader tablet:mx-9 mobile:mx-6 h-full flex items-center justify-between">
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
				</nav>
			</div>
		</header>
	)
}
