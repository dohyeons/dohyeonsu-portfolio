import Image from 'next/image'
import Profile from 'public/Do-hyeonsu_profile.jpeg'

export default function AboutMe() {
	const introduction = [
		'안녕하세요. ',
		<strong key="emphasis">개발로 세상을 더욱 좋게 만들고 싶은</strong>,
		' 프론트엔드 개발자 도현수입니다.',
		<br key="blank1" />,
		'개발로 만들어진 결과물들을 누리며 살아왔고, 저 또한 그 생산자가 되어서 많은 사람들에게 효용을 주고 싶어 개발에 뛰어들었습니다.',
		' 사용자에게 최대의 UX를 전달하는 개발자가 되는 것이 목표입니다.',
		<br key="blank2" />,
		<br key="blank3" />,
		'코드 스테이츠 프론트엔드 부트 캠프를 통해 React를 이용한 웹 개발의 기초를 다졌고,',
		'현재는 개인 공부와 스터디를 참가하며 지식을 쌓고 실력을 기르고, 개인적으로 만들고 싶었던 서비스들을 제작하고 있습니다.',
	]
	return (
		<section className="flex justify-center bg-oddBg mt-[73px]" id="About">
			<div className="flex flex-col space-y-[70px] w-desktopHeader items-center p-16">
				<h2 className="text-5xl font-black text-center mobile:text-3xl drop-shadow-headingShadow">
					ABOUT ME
				</h2>
				<article className="flex items-center gap-4 tablet:flex-col tablet:space-y-14 tablet:space-x-0 mobile:flex-col mobile:space-y-14 mobile:space-x-0">
					<Image
						src={Profile}
						alt="Profile Image"
						width={260}
						height={260}
						className="rounded-md"
					/>
					<div className="flex-col inline-flex tablet:items-center mobile:items-center">
						{/* {introduction.map((el, idx) => (
							<p
								key={`${idx.toString()}-${el}`}
								className="mobile:text-xs text-nav"
							>
								{el}
							</p>
						))} */}
						<p className="mobile:text-xs font-medium text-center">
							{introduction}
						</p>
					</div>
				</article>
			</div>
		</section>
	)
}
