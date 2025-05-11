const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	},
	exit: {
		opacity: 0,
		y: -50,
		transition: {
			duration: 0.3,
			ease: 'easeIn'
		}
	}
};

export default cardVariants;
