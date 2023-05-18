/* eslint-disable react/function-component-definition */
import Header from '@/components/layout/Header'
import AboutMe from '@/components/sections/AboutMe/Index'
import ContactChannel from '@/components/sections/ContactChannel/Index'
import Skills from '@/components/sections/Skills/Index'
import Projects from '@/components/sections/Projects/Index'
import Footer from '@/components/layout/Footer'

export default function Home() {
	return (
		<>
			<Header />
			<AboutMe />
			<ContactChannel />
			<Skills />
			<Projects />
			<Footer />
		</>
	)
}
