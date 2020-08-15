import {
	baseColor,
	darkColor,
	lightColor,
	primaryColor,
	secondaryColor,
	addColor,
	removeColor,
	monospace,
} from './tokens';

export default {
	color: darkColor,
	fontFamily: monospace,
	textAlign: 'left',
	whiteSpace: 'pre',
	wordSpacing: 'normal',
	wordBreak: 'normal',
	wordWrap: 'normal',
	MozTabSize: '2',
	OTabSize: '2',
	tabSize: '2',
	WebkitHyphens: 'none',
	MozHyphens: 'none',
	msHyphens: 'none',
	hyphens: 'none',
	fontVariantLigatures: 'none',

	'& .comment': {
		color: lightColor,
	},
	'& .block-comment': {
		color: lightColor,
	},
	'& .prolog': {
		color: lightColor,
	},
	'& .doctype': {
		color: lightColor,
	},
	'& .cdata': {
		color: lightColor,
	},
	'& .punctuation': {
		color: lightColor,
	},
	'& .tag, & .tag .class-name': {
		color: secondaryColor,
	},
	'& .attr-name': {
		color: baseColor,
	},
	'& .namespace': {
		color: secondaryColor,
	},
	'& .function-name': {
		color: darkColor,
	},
	'& .boolean': {
		color: primaryColor,
	},
	'& .number': {
		color: lightColor,
	},
	'& .function': {
		color: secondaryColor,
	},
	'& .property': {
		color: secondaryColor,
	},
	'& .class-name': {
		color: primaryColor,
	},
	'& .constant': {
		color: primaryColor,
	},
	'& .symbol': {
		color: baseColor,
	},
	'& .selector': {
		color: primaryColor,
	},
	'& .important': {
		color: darkColor,
		fontWeight: 'bold',
	},
	'& .atrule': {
		color: darkColor,
	},
	'& .keyword': {
		color: baseColor,
	},
	'& .builtin': {
		color: baseColor,
	},
	'& .string': {
		color: primaryColor,
	},
	'& .char': {
		color: primaryColor,
	},
	'& .attr-value': {
		color: primaryColor,
	},
	'& .regex': {
		color: primaryColor,
	},
	'& .variable': {
		color: primaryColor,
	},
	'& .operator': {
		color: lightColor,
	},
	'& .entity': {
		color: baseColor,
	},
	'& .url': {
		color: lightColor,
		textDecoration: 'underline',
	},
	'& .bold': {
		fontWeight: 'bold',
	},
	'& .italic': {
		fontStyle: 'italic',
	},
	'& .inserted': {
		color: addColor,
	},
	'& .deleted': {
		color: removeColor,
	},
};
