import Image from 'next/image'
import Profile from 'public/Do-hyeonsu_profile.jpeg'

export default function AboutMe() {
	return (
		<div className="flex justify-center">
			<section className="flex-col flex w-desktopHeader justify-center content-center p-16">
				<h2 className="text-center text-5xl font-black">ABOUT ME</h2>
				<article className="flex justify-between">
					<Image
						src={Profile}
						alt="Profile Image"
						width={260}
						height={260}
						className=" rounded-md"
					/>
					<div className="flex-col inline-flex justify-center">
						<p>
							자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개
						</p>
						<p>
							자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개
						</p>
						<p>
							자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개
						</p>
						<p>
							자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개
						</p>
					</div>
				</article>
			</section>
		</div>
	)
}
