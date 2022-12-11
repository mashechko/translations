const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
	plugins: ['prefer-arrow'],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		project: './tsconfig.eslint.json',
		warnOnUnsupportedTypeScriptVersion: false
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.js']
			},
			typescript: {}
		}
	},
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				'import/no-nodejs-modules': 'error'
			}
		}
	],
	rules: {
		'react-hooks/exhaustive-deps': ['warn'],
		'no-mixed-spaces-and-tabs': 'off',
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
		'no-implicit-globals': 'error',
		'no-restricted-globals': ['error'].concat(restrictedGlobals),
		'import/no-absolute-path': 'error',
		'import/no-unused-modules': 'error',
		'@typescript-eslint/array-type': ['error', { default: 'generic' }],
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/no-use-before-define': [
			'warn',
			{
				functions: false,
				classes: false,
				variables: false
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				ignoreRestArgs: true
			}
		],
		'@typescript-eslint/no-useless-constructor': 'warn',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				args: 'none',
				ignoreRestSiblings: true
			}
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'import/no-extraneous-dependencies': 'error',
		'import/no-useless-path-segments': 'error',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				alphabetize: {
					order: 'asc'
				}
			}
		],
		'sort-imports': [
			'warn',
			{
				ignoreDeclarationSort: true
			}
		],
		'no-console': 'warn',
		'dot-location': ['warn', 'property'],
		eqeqeq: ['warn', 'smart'],
		'new-parens': 'warn',
		'no-array-constructor': 'warn',
		'no-caller': 'warn',
		'no-cond-assign': ['warn', 'except-parens'],
		'no-control-regex': 'warn',
		'no-delete-var': 'warn',
		'no-duplicate-case': 'warn',
		'no-empty-character-class': 'warn',
		'no-empty-pattern': 'warn',
		'no-eval': 'warn',
		'no-ex-assign': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-extra-label': 'warn',
		'no-fallthrough': 'warn',
		'no-implied-eval': 'warn',
		'no-invalid-regexp': 'warn',
		'no-iterator': 'warn',
		'no-label-var': 'warn',
		'no-labels': [
			'warn',
			{
				allowLoop: true,
				allowSwitch: false
			}
		],
		'no-lone-blocks': 'warn',
		'no-loop-func': 'warn',
		'no-mixed-operators': [
			'warn',
			{
				groups: [
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof']
				],
				allowSamePrecedence: false
			}
		],
		'no-multi-str': 'warn',
		'no-native-reassign': 'warn',
		'no-negated-in-lhs': 'warn',
		'no-new-func': 'warn',
		'no-new-object': 'warn',
		'no-new-wrappers': 'warn',
		'no-octal': 'warn',
		'no-octal-escape': 'warn',
		'no-regex-spaces': 'warn',
		'no-restricted-syntax': ['warn', 'WithStatement'],
		'no-script-url': 'warn',
		'no-self-assign': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-shadow-restricted-names': 'warn',
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'warn',
		'no-unexpected-multiline': 'warn',
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true
			}
		],
		'no-unused-labels': 'warn',
		'no-useless-computed-key': 'warn',
		'no-useless-concat': 'warn',
		'no-useless-escape': 'warn',
		'no-useless-rename': [
			'warn',
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false
			}
		],
		'no-with': 'warn',
		'no-whitespace-before-property': 'warn',
		'prefer-arrow/prefer-arrow-functions': 'warn',
		'require-yield': 'warn',
		'rest-spread-spacing': ['warn', 'never'],
		strict: ['warn', 'never'],
		'unicode-bom': ['warn', 'never'],
		'use-isnan': 'warn',
		'react/forbid-foreign-prop-types': [
			'warn',
			{
				allowInPropTypes: true
			}
		],
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-duplicate-props': 'warn',
		'react/jsx-no-target-blank': 'warn',
		'react/jsx-no-undef': 'error',
		'react/jsx-pascal-case': [
			'warn',
			{
				allowAllCaps: true,
				ignore: []
			}
		],
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/no-danger-with-children': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-direct-mutation-state': 'warn',
		'react/no-is-mounted': 'warn',
		'react/no-typos': 'error',
		'react/react-in-jsx-scope': 'error',
		'react/require-render-return': 'error',
		'react/style-prop-object': 'warn',
		'react/jsx-key': [
			'error',
			{
				checkKeyMustBeforeSpread: true,
				checkFragmentShorthand: true
			}
		]
	}
};
