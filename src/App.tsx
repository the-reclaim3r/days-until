import React, { useCallback, useEffect, useState } from 'react';
import InputFields from './components/InputFields';
import { Box } from '@mui/material';
import './App.css';
import DaysUntil from './components/DaysUntil';

function App() {
	const [dateExists, setDateExists] = useState<boolean>(
		window.localStorage.getItem('target-date') !== null
	);

	const handleLocalStorageCheck = useCallback(() => {
		const targetDate = window.localStorage.getItem('target-date');

		if (targetDate !== null) {
			setDateExists(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('days-until', handleLocalStorageCheck);

		return () => {
			window.removeEventListener('days-until', handleLocalStorageCheck);
		};
	}, [handleLocalStorageCheck]);

	return (
		<Box
			height='100vh'
			width='100vw'
			display='flex'
			justifyContent='center'
			alignItems='center'
			className='background'
		>
			{dateExists ? <DaysUntil /> : <InputFields />}
		</Box>
	);
}

export default App;
