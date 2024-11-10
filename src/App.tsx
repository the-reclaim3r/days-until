import React, { useEffect, useState } from 'react';
import InputFields from './components/InputFields';
import { Box } from '@mui/material';
import './App.css';

function App() {
  const [dateExists, setDateExists] = useState<boolean>(false)

  useEffect(() => {
    const targetDate = window.localStorage.getItem('day-until')
    if (targetDate !== null) {
      setDateExists(true)
    }
  }, [])

	return (
		<Box
			height='100vh'
			width='100vw'
			display='flex'
			justifyContent='center'
			alignItems='center'
			className='background'
		>
      {/* DO SOMETHING HERE REID */}
			<InputFields />
		</Box>
	);
}

export default App;
