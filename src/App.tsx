import React, { useCallback, useEffect, useState } from 'react';
import InputFields from './components/InputFields';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import DaysUntil from './components/DaysUntil';
import ModeToggle from './components/ModeToggle';

function App() {
	const [dateExists, setDateExists] = useState<boolean>(
		window.localStorage.getItem('target-date') !== null
	);
	const [colourScheme, setColourScheme] = useState<'light' | 'dark'>('light');

	const darkTheme = createTheme({
		colorSchemes: {
			dark: true,
		},
	});

	const handleLocalStorageCheck = useCallback(() => {
		const targetDate = window.localStorage.getItem('target-date');

		if (targetDate !== null) {
			setDateExists(true);
		} else {
			setDateExists(false);
		}
	}, []);

	const handleColourSchemeChange = useCallback(() => {
		const mode = window.localStorage.getItem('mui-mode');

		if (mode === 'light') {
			setColourScheme('light');
		} else {
			setColourScheme('dark');
		}
	}, []);

	useEffect(() => {
		handleColourSchemeChange();

		window.addEventListener('days-until', () => {
			handleLocalStorageCheck();
			handleColourSchemeChange();
		});

		return () => {
			window.removeEventListener('days-until', () => {
				handleLocalStorageCheck();
				handleColourSchemeChange();
			});
		};
	}, [handleColourSchemeChange, handleLocalStorageCheck]);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box
				height='100vh'
				width='100vw'
				display='flex'
				justifyContent='center'
				alignItems='center'
				className={
					colourScheme === 'light' ? 'background_light' : 'background_dark'
				}
			>
				<ModeToggle />
				{dateExists ? <DaysUntil /> : <InputFields />}
			</Box>
		</ThemeProvider>
	);
}

export default App;
