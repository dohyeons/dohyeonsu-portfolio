import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title> FE 개발자 도현수 포트폴리오</title>
				<meta
					name="description"
					content="UX에 관심이 많은 프론트엔드 개발자 도현수 입니다."
				/>
				<meta
					property="og:title"
					content="FE 개발자 도현수 포트폴리오"
					key="title"
				/>
				<meta
					property="og:url"
					content="https://dohyeonsu-portfolio.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="UX에 관심이 많은 프론트엔드 개발자 도현수 입니다."
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
