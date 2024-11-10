import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

interface DateProps {
	setDate: (date: Dayjs | null) => void;
}

const Date = ({ setDate }: DateProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				onChange={(newValue) => {
					setDate(newValue);
				}}
			/>
		</LocalizationProvider>
	);
};

export default Date;
