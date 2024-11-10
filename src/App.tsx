import React from 'react';
import Date from './components/Date';
import { Box } from '@mui/material';

function App() {
	return (
		<Box
			height='100vh'
			width='100vw'
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<Date />
		</Box>
	);
}

export default App;
