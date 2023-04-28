import Image from 'next/image'
import Profile from 'public/Do-hyeonsu_profile.jpeg'

export default function AboutMe() {
	const introduction = [
		'안녕하세요. ',
		<strong key="emphasis1">개발로 더 좋은 세상을 만들고 싶은 </strong>,
		'프론트엔드 개발자 도현수입니다.',
		<br key="blank1" />,
		'개발로 만든 편의를 누리며 살아왔고, 저 또한 그 생산자가 되어서 ',
		<strong key="emphasis2">
			많은 사람들에게 좋은 영향을 주고 싶어 개발을 배우기 시작했습니다.{' '}
		</strong>,
		'사용자에게 최대의 UX를 전달해 최대의 만족을 느끼게 하는 개발자가 되는 것이 목표입니다.',
		<br key="blank2" />,
		<br key="blank3" />,
		'코드 스테이츠 프론트엔드 부트 캠프에서 React와 Redux를 사용한 웹 개발의 기초와 자료구조, CPU, 프로세스, 스레드 등의 CS에 대해서 학습했습니다. ',
		'현재는 개인 공부와 알고리즘, 독서 스터디를 통해 지식을 쌓고 실력을 기르며 개인적으로 만들고 싶었던 서비스들을 제작하고 있습니다.',
	]
	return (
		<section className="flex justify-center bg-oddBg mt-[73px]" id="About">
			<div className="flex flex-col space-y-[70px] w-desktopHeader items-center p-16">
				<h2 className="text-5xl font-black text-center mobile:text-3xl drop-shadow-headingShadow">
					ABOUT ME
				</h2>
				<article className=" flex items-center gap-7 tablet:gap-10 tablet:flex-col mobile:flex-col">
					<Image
						src={Profile}
						alt="Profile Image"
						width={260}
						height={260}
						className="rounded-md"
					/>
					<div className="flex-col inline-flex tablet:items-center mobile:items-center">
						<p className="mobile:text-xs font-medium">{introduction}</p>
					</div>
				</article>
			</div>
		</section>
	)
}
