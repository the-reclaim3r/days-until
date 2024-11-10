import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

const Date = () => {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				value={value}
				onChange={(newValue) => setValue(newValue)}
			/>
		</LocalizationProvider>
	);
};

export default Date;
