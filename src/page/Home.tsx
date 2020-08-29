import React, { useState, useEffect } from "react";
import {
  determineDayTypeByDate,
  determineScheduleType,
} from "../common/CommonUtils";
import {IType} from '../data/daySchedule';
import {
  Card,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Grid,
  TextField,
} from "@material-ui/core";
const Home = () => {
  // const date = new Date();

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toLocaleDateString()
  );

  const [todaySchedule, setTodaySchedule] = useState<IType[]>();

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("event", event.target.value);
    setSelectedDate(event?.target?.value);
  };

  useEffect(() => {
    console.log('todaySchedule')
    determineScheduleType(selectedDate).then(items=>{
      console.log('schedule', items);
      setTodaySchedule(items)});
  }, [selectedDate]);

  return (
    <Paper>
      <Grid container justify="space-around">
        <Grid item xs={4}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={selectedDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <p>Date: {selectedDate}</p>
        </Grid>
        <Grid item xs={4}>
          <p>Its a {determineDayTypeByDate(selectedDate)} Day</p>
        </Grid>
        <Grid item xs={12}>
          <p>Today's Schedule</p>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Period</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todaySchedule?.map((row) => (
                <TableRow >
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.period}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Paper>
  );
};

export default Home;
