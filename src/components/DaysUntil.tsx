import { Box, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const DaysUntil = () => {
	const [eventName, setEventName] = useState<string | null>('');
	const [targetDate, setTargetDate] = useState<string | null>();

  let hours = dayjs(targetDate).diff(dayjs(), 'hours');
  const days = Math.floor(hours / 24);
  hours = hours - (days * 24); // TODO maybe: allow user to choose time for events

	useEffect(() => {
		setEventName(window.localStorage.getItem('event-name'));
		setTargetDate(window.localStorage.getItem('target-date'));
	}, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
    >
      <Typography variant='h1' fontWeight={400}>
        {days} days until {eventName}
      </Typography>
      <Button variant="outlined" onClick={() => window.localStorage.clear()}>Clear</Button>
    </Box>
  );
};

export default DaysUntil;
