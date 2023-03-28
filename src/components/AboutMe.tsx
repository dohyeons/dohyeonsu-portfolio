import Image from 'next/image'
import Profile from 'public/Do-hyeonsu_profile.jpeg'

export default function AboutMe() {
	const introduction = [
		'안녕하세요 UI/UX에 관심이 많은 프론트엔드 개발자 도현수입니다',
		'자기소개 자기소개 자기소개 자기소개 자기소개자기소개 자기소개 자기소개 자기소개 자기소개',
		'자기소개 자기소개 자기소개 자기소개 자기소개자기소개 자기소개 자기소개 자기소개 자기소개',
		'자기소개 자기소개 자기소개 자기소개 자기소개자기소개 자기소개 자기소개 자기소개 자기소개',
		'자기소개 자기소개 자기소개 자기소개 자기소개자기소개 자기소개 자기소개 자기소개 자기소개',
	]
	return (
		<section className="flex justify-center bg-oddBg">
			<div className="flex flex-col space-y-7 w-desktopHeader items-center p-16">
				<h2 className="text-5xl font-black  mobile:text-3xl">ABOUT ME</h2>
				<article className="flex items-center space-x-16 tablet:flex-col tablet:space-y-14 tablet:space-x-0 mobile:flex-col mobile:space-y-14 mobile:space-x-0">
					<Image
						src={Profile}
						alt="Profile Image"
						width={260}
						height={260}
						className="rounded-md"
					/>
					<div className="flex-col h-fit inline-flex tablet:items-center mobile:items-center">
						{introduction.map((el, idx) => (
							<p
								key={`${idx.toString()}-${el}`}
								className="mobile:text-xs text-nav"
							>
								{el}
							</p>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}
