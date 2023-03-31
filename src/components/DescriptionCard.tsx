import { ReactNode } from 'react'

export default function DescriptionCard({ children }: { children: ReactNode }) {
	return (
		<section>
			<h2>CONTACT</h2>
			<article>
				<p>Phone: 010-9936-9661</p>
				<p>E-mail: dohyeonsu63@gmail.com</p>
			</article>
		</section>
	)
}
