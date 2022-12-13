import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Page } from './components/page';
import { translationProvider } from './utils';

const App = () => {
	return (
		<I18nextProvider i18n={translationProvider}>
			<Page />
		</I18nextProvider>
	);
};

export default App;
