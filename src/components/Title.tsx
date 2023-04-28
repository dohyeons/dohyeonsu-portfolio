import Head from 'next/head'

export default function Title() {
	return (
		<Head>
			<title> FE 개발자 도현수 포트폴리오</title>
			<meta
				property="og:title"
				content="FE 개발자 도현수 포트폴리오"
				key="title"
			/>
			<meta
				name="Description"
				content="UX에 관심이 많은 프론트엔드 개발자 도현수 입니다."
			/>
		</Head>
	)
}
