import { Box, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';

const DaysUntil = () => {
	const [eventName, setEventName] = useState<string | null>('');
	const [targetDate, setTargetDate] = useState<string | null>();

	const [timeLeft, setTimeLeft] = useState('');

	useEffect(() => {
		setEventName(window.localStorage.getItem('event-name'));
		setTargetDate(window.localStorage.getItem('target-date'));
	}, []);

	const calculateTimeLeft = useCallback(() => {
		let hours = dayjs(targetDate).diff(dayjs(), 'hours');
		const days = Math.floor(hours / 24);
		hours = hours - days * 24;
		let minutes = dayjs(targetDate).diff(dayjs(), 'minutes');
		minutes = Math.floor(minutes - hours * 60); // TODO refresh output string every minute

		// Event is in the past
		if (dayjs(targetDate).diff(dayjs()) < 0) {
			return 'This event has passed';
		}

		let timeString = 'in ';
		if (days > 0) {
			timeString += `${days} day${days === 1 ? '' : 's'} and `;
		}

		if (hours > 0) {
			timeString += `${hours} hour${hours === 1 ? '' : 's'}`;
			if (days === 0 && minutes > 0) {
				timeString += ' and ';
			}
		}

		if (days === 0 && minutes > 0) {
			timeString += `${minutes} minute${minutes === 1 ? '' : 's'}`;
		}

		return timeString;
	}, [targetDate]);

	useEffect(() => {
		setTimeLeft(calculateTimeLeft());
		const interval = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 10000);

		return () => clearTimeout(interval);
	}, [calculateTimeLeft]);

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
				{timeLeft}
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
