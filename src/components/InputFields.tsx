import React from 'react';
import Date from './Date';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

function InputFields() {
	const [name, setName] = React.useState('');
	const [date, setDate] = React.useState<Dayjs | null>(dayjs());

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			gap={4}
		>
			<Typography variant='h4'>What are you looking forward to next?</Typography>
			<TextField
				placeholder='Name'
				value={name}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setName(event.target.value);
				}}
			/>
			<Date
				setDate={(date) => {
					setDate(date);
				}}
			/>
			<Button variant='outlined'>Save</Button>
		</Box>
	);
}

export default InputFields;
