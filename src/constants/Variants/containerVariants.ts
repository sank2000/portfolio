const containerVariants = {
	hiddenRight: {
		opacity: 0,
		x: '100vw'
	},
	hiddenLeft: {
		opacity: 0,
		x: '-100vw'
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: 'tween', delay: 0.5 }
	},
	exitLeft: {
		x: '-100vw'
	},
	exitRight: {
		x: '100vw'
	}
};

export default containerVariants;
