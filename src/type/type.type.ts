export interface ContactChannelInformationType {
	heading: string
	[key: string]: string
}

export interface ProjectInformation {
	description: (string | JSX.Element)[]
	features: string[]
	skills: string[]
	links: {
		github: string
		visit?: string
	}
}
