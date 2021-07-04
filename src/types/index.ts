interface page {
	no: number;
	forward: boolean;
}

interface defaultProps {
	setPage: React.Dispatch<React.SetStateAction<page>>;
	page: page;
}

interface withAdditionalProps extends defaultProps {
	exitLeft: {
		status: boolean;
	};
	setExitLeft: React.Dispatch<
		React.SetStateAction<{
			status: boolean;
		}>
	>;
}

interface stackProps {
	name: string;
	color?: string;
	backgroundColor?: string;
}

interface projectProps {
	name: string;
	image: string;
	description: String;
	stack: Array<stackProps>;
	link?: string;
	github?: string;
}

interface experienceProps {
	designation: string;
	from: string;
	to: string;
	description: string;
	company: string;
	link: string;
	stack: Array<string>;
	forward?: boolean;
}

export type { projectProps, page, defaultProps, stackProps, experienceProps, withAdditionalProps };
