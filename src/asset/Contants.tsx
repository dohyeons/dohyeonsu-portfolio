import Image from 'next/image'
import DescriptionCard from '@/components/common/DescriptionCard'
import ProjectDescription from '@/components/sections/Projects/ProjectDescription'
import { ContactChannelInformationType } from '@/type/type.type'

export function AboutMeIntroduction() {
	const introduction = [
		'안녕하세요. ',
		<strong key="emphasis1">개발로 더 좋은 세상을 만들고 싶은 </strong>,
		'프론트엔드 개발자 도현수입니다.',
		<br key="blank1" />,
		'개발로 만든 편의를 누리며 살아왔고, 저 또한 그 생산자가 되어서 ',
		<strong key="emphasis2">
			많은 사람들에게 좋은 영향을 주고 싶어 개발을 배우기 시작했습니다.{' '}
		</strong>,
		'사용자에게 최대의 UX를 전달하는 개발자가 되는 것이 목표입니다.',
		<br key="blank2" />,
		<br key="blank3" />,
		'코드 스테이츠 프론트엔드 부트 캠프에서 React와 Redux를 사용한 웹 개발의 기초와 자료구조, CPU, 프로세스, 스레드 등의 CS에 대해서 학습했습니다. ',
		'현재는 개인 공부와 알고리즘, 독서 스터디를 통해 지식을 쌓고 실력을 기르며 개인적으로 만들고 싶었던 서비스들을 제작하고 있습니다.',
	]
	return <p className="mobile:text-xs font-medium">{introduction}</p>
}
export function ProjectsIntroduction() {
	const projects = [
		{
			projectTitle: 'Pillivery',
			subtitle:
				'2022.11.08 ~ 2022.12.07 코드스테이츠 파이널 프로젝트 (7인/4주)',
			projetcImage: 'Pillivery.png',
			description: [
				<strong key="projectEmphasis1">
					영양제를 정기구독 할 수 있는 쇼핑몰 사이트 입니다.
				</strong>,
				' 많은 도메인에서 구독 서비스를 제공하고 있고, 주기적으로 섭취해야하는 영양제에도 구독 서비스가 있으면 좋겠다는 아이디어에서 시작했습니다. ',
				<br key="projectBlank1" />,
				<br key="projectBlank2" />,
				'기획, 디자인, 개발의 모든 과정에 참여했으며, 다른 사람들과 함께 한 첫번째 프로젝트입니다. ',
				<strong key="projectEmphasis2">
					ESLint와 Prettier를 처음으로 사용
				</strong>,
				'해 ',
				<strong key="projectEmphasis3">
					오류를 발견하고 코드 포맷을 통일
				</strong>,
				'해 시간을 절감하고 협업을 좀 더 쉽게 만들었습니다.',
				<strong key="projectEmphasis4"> 또한 GIT을 사용해 협업</strong>,
				'을 했고, ',
				<strong key="projectEmphasis5">
					더 좋은 UX에 대해 처음으로 고민하며, 서비스의 품질을 높였습니다.
				</strong>,
				<br key="projectBlank3" />,
			],
			features: [
				'결제(일반/정기) 페이지 - 토스 페이먼츠, 카카오 모의 결제 api로 결제를 구현.',
				'마이페이지(회원 정보) - 회원 정보를 불러오고, React-hook-form으로 유저가 입력한 회원 정보가 유효성 검사를 통과하지 못할 경우 경고 메시지를 출력을 구현 ',
				'마이페이지(위시리스트) - 리액트 쿼리를 사용해 회원이 찜한 상품 조회/취소 구현',
				'마이페이지(정기구독관리) - 정기구매한 제품을 모아보고, 정기 배송일 조회 및 변경 구현',
			],
			skills: [
				'React',
				'styled-components',
				'Redux toolkit',
				'React query',
				'TypeScript',
			],
			links: {
				github: 'https://github.com/dohyeons/seb40_main_033',
				// blog: 'https://velog.io/@ddhhss0603/Project-%EC%98%81%EC%96%91%EC%A0%9C-%EC%87%BC%ED%95%91%EB%AA%B0Pillivery-%ED%8C%80-%EB%B9%8C%EB%94%A9-%EB%B0%8F-%EA%B8%B0%ED%9A%8D',
				visit: 'http://pillivery.s3-website.ap-northeast-2.amazonaws.com/',
			},
		},
		{
			projectTitle: '개인 포트폴리오',
			subtitle: '2023.03 ~ 2022.04 개인 포트폴리오 프로젝트 (1인)',
			projetcImage: 'portfolio.png',
			description: [
				<strong key="projectEmphasis6">개인 포트폴리오 사이트이며,</strong>,
				' 현재 보고 계신 사이트 입니다. ',
				<br key="projectBlank1" />,
				<br key="projectBlank2" />,
				'모든 과정을 혼자 진행했으며, ',
				<strong key="projectEmphasis2">
					Nextjs의 학습 및 연습을 위해서 Nextjs로 제작했습니다.
				</strong>,
				' 정적으로 보여주는 역할을 하는 포트폴리오의 특성을 고려해 ',
				<strong key="projectEmphasis3">SSG를 사용했습니다.</strong>,
			],
			features: ['깃허브, 블로그, 사이트 방문'],
			skills: ['Nextjs', 'tailwindcss'],
			links: {
				github: 'https://github.com/dohyeons/dohyeonsu-portfolio',
			},
		},
	]

	return (
		<div className="flex flex-col gap-12">
			{projects.map((project, idx) => (
				<DescriptionCard
					size="projects"
					key={project.projectTitle + idx.toString()}
				>
					<div className="flex flex-col gap-2 items-center justify-between">
						<h3 className="text-4xl font-black mobile:text-2xl">
							{project.projectTitle}
						</h3>
						<p className="text-[20px] font-normal mobile:text-sm text-center text-subtitle">
							{project.subtitle}
						</p>
					</div>
					<div className="flex tablet:flex-col tablet:space-x-0 tablet:space-y-[20px] mobile:flex-col mobile:space-x-0 mobile:space-y-[20px] max-w-[860px] w-full space-x-[20px]">
						<Image
							alt="프로젝트 이미지"
							src={`/${project.projetcImage}`}
							width={460}
							height={460}
							className="mobile:w-full tablet:w-full dsektop:h-[490px] h-full"
						/>
						<ProjectDescription
							projectInformation={{
								description: project.description,
								features: project.features,
								skills: project.skills,
								links: project.links,
							}}
						/>
					</div>
				</DescriptionCard>
			))}
		</div>
	)
}
export const skillLogo = [
	'JavaScript.svg',
	'TypeScript.svg',
	'React.svg',
	'Redux.svg',
	'styled-components.svg',
	'TailwindCSS.svg',
]

export const contactChannelInformation: ContactChannelInformationType[] = [
	{
		heading: 'CONTACT',
		Phone: '010-9936-9771',
		Email: 'dohyeonsu63@gmail.com',
	},
	{
		heading: 'CHANNEL',
		Github: 'https://github.com/dohyeons',
		Blog: 'https://velog.io/@ddhhss0603',
	},
]
