const cardVariants = {
	hidden: {
		opacity: 0,
		y: '-100vw'
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: 'tween', delay: 0.5 }
	},
	exit: {
		y: '200vw'
	}
};

export default cardVariants;
