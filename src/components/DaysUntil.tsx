import { Box, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const DaysUntil = () => {
	const [eventName, setEventName] = useState<string | null>('');
	const [targetDate, setTargetDate] = useState<string | null>();

	const dayDifference = dayjs(targetDate).diff(dayjs(), 'day');

	useEffect(() => {
		setEventName(window.localStorage.getItem('event-name'));
		setTargetDate(window.localStorage.getItem('target-date'));
	}, []);

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			gap={2}
		>
			<Typography variant='h3'>
				{dayDifference} Days until {eventName}
			</Typography>
			<Button variant='outlined' onClick={() => window.localStorage.clear()}>
				Clear
			</Button>
		</Box>
	);
};

export default DaysUntil;
