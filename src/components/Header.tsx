/* eslint-disable import/no-extraneous-dependencies */
import { TbSquareRoundedLetterD } from 'react-icons/tb'
import { RiStackFill } from 'react-icons/ri'
import { useState } from 'react'

export default function Header() {
	const navMenu = ['About', 'Skills', 'Projects']
	const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

	function hamburgerButtonClick() {
		setIsHamburgerClicked(!isHamburgerClicked)
	}
	return (
		<header className="border-b flex justify-center fixed top-0 right-0 mb-[73px] bg-white left-0 z-40">
			<div className="w-desktopHeader my-5 h-full flex content-center items-center justify-between tablet:mx-9 mobile:mx-6 mobile:flex-col">
				<div className="w-full flex justify-between">
					<div>
						<TbSquareRoundedLetterD className="w-10 h-10 text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300 mobile:w-8 mobile:h-8 " />
					</div>
					<button
						type="button"
						className="hidden mobile:block"
						onClick={hamburgerButtonClick}
					>
						<RiStackFill className="w-7 h-7 text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300" />
					</button>
				</div>
				<nav className="flex justify-center mobile:hidden">
					<ul className="flex w-nav justify-between">
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
				<nav
					className={`${
						isHamburgerClicked ? 'h-40' : 'h-0'
					} hidden mobile:block transition-height duration-500 ease-in-out overflow-hidden`}
				>
					<ul className="w-full flex-col content-center">
						{navMenu.map((Menu, idx) => (
							<li
								key={`${idx.toString()}-${Menu}`}
								className="my-6 text-xl text-nav flex justify-center hover:cursor-pointer hover:text-inherit transition-colors duration-300"
							>
								<div>{Menu}</div>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
