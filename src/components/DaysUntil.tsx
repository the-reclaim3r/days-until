import { Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";

const DaysUntil = () => {
  const [eventName, setEventName] = useState<string>("")
  const [targetDate, setTargetDate] = useState<Dayjs>(dayjs())

  const dayDifference = targetDate.diff(dayjs(), 'days')

  useEffect(() => {
    // GET STUFF FROM LOCALSTORAGE HERE REID
  })

  return (
    <Typography>DO STUFF HERE REID</Typography>
  )
} 

export default DaysUntil