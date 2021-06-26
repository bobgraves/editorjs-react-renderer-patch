import { MARGIN, fontFamily } from '../../../style/template';

const quoteStyle = {
	quoteStyle: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: MARGIN,
		textAlign: 'left',
		fontFamily
	},
	contentStyle: {
		minWidth: '240px',
		width: '80%',
		margin: '5px 0',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		border: '1px solid var(--primary-grey)',
		backgroundColor: 'var(--secondary-white)',
		borderRadius: 'var(--default-radius)',
		fontFamily
	},
	authorStyle: {
		fontWeight: 'bold',
		margin: '0 5px 5px 5px',
		fontFamily
	},
	messageStyle: {
		fontFamily
	}
};

export default quoteStyle;
