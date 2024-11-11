import { Box, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const DaysUntil = () => {
	const [eventName, setEventName] = useState<string | null>('');
	const [targetDate, setTargetDate] = useState<string | null>();

	let hours = dayjs(targetDate).diff(dayjs(), 'hours');
	const days = Math.floor(hours / 24);
	hours = hours - days * 24;
	let minutes = dayjs(targetDate).diff(dayjs(), 'minutes');
	minutes = Math.floor(minutes - hours * 60); // TODO refresh display of minutes every minute

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
			<Typography variant='h1' fontWeight={400}>
				{eventName}
			</Typography>
			<Typography variant='h2' fontWeight={400}>
				in {days ? days + ' days, ' : ''} {hours} hours and {' '}
				{days ? '' : minutes + ' minutes'}
			</Typography>
			<Button
				variant='outlined'
				onClick={() => {
					window.localStorage.removeItem('event-name');
          window.localStorage.removeItem('target-date');
					window.dispatchEvent(new Event('days-until'));
				}}
        sx={{ marginTop: 4 }}
			>
				Clear
			</Button>
		</Box>
	);
};

export default DaysUntil;
