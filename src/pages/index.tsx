import Header from '@/components/Header'
import AboutMe from '@/components/AboutMe'
import ContactChannel from '@/components/ContactChannel'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title> FE 개발자 도현수 포트폴리오</title>
			</Head>
			<Header />
			<AboutMe />
			<ContactChannel />
			<Skills />
			<Projects />
			<Footer />
		</>
	)
}
