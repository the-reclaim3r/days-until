import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { DatePicker, DateValidationError, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function InputFields() {
	const [name, setName] = React.useState('');
	const [date, setDate] = React.useState<Dayjs | null>(null);
	const [error, setError] = React.useState<DateValidationError | null>(null);

	const errorMessage = React.useMemo(() => {
		switch (error) {
			case 'invalidDate': {
				return 'Please enter a valid date';
			}

			default: {
				return '';
			}
		}
	}, [error]);

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			gap={4}
		>
			<AvTimerIcon sx={{ fontSize: 75 }} />
			<Typography variant='h4'>
				What are you looking forward to next?
			</Typography>
			<TextField
				placeholder='Name'
				value={name}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setName(event.target.value);
				}}
			/>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					value={date}
					onChange={(newValue) => {
						setDate(newValue);
					}}
					disablePast
					onError={(newError) => setError(newError)}
					slotProps={{
						textField: {
							helperText: errorMessage,
						},
					}}
				/>
			</LocalizationProvider>
			<Button variant='outlined' disabled={error !== null || date === null}>
				Save
			</Button>
		</Box>
	);
}

export default InputFields;
