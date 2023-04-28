/* eslint-disable react/function-component-definition */
import Header from '@/components/Header'
import AboutMe from '@/components/AboutMe'
import ContactChannel from '@/components/ContactChannel'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Title from '@/components/Title'

export default function Home() {
	return (
		<>
			<Title />
			<Header />
			<AboutMe />
			<ContactChannel />
			<Skills />
			<Projects />
			<Footer />
		</>
	)
}
