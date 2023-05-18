import ProjectButton from './ProjectButton'

interface ProjectLinks {
	github: string
	visit?: string
}

export default function ProjectButtonGroup({ links }: { links: ProjectLinks }) {
	return (
		<div className="flex max-w-full w-full gap-3 mobile:flex-col justify-center self-center">
			{Object.entries(links).map(([link, address], id) => (
				<ProjectButton
					buttonName={link}
					address={address}
					key={link + id.toString()}
				/>
			))}
		</div>
	)
}
