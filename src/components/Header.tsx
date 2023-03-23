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
		<header className="border-b flex justify-center ">
			<div
				className={`w-desktopHeader my-5 headerContainer-reponsive mobile:flex-col mobile: h-full flex content-center items-center justify-between `}
			>
				<div className="flex justify-between w-full ">
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
				<nav className="mobile:hidden flex justify-center">
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
					className={`hidden ${
						isHamburgerClicked ? 'mobile:flex' : ''
					} justify-center w-full`}
				>
					<ul className="flex-col w-full content-center">
						{navMenu.map((Menu, idx) => (
							<li
								key={`${idx.toString()}-${Menu}`}
								className="flex my-6 justify-center text-xl text-nav hover:cursor-pointer hover:text-inherit transition-colors duration-300"
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
