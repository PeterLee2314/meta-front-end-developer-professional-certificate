import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Heading,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    NumberInput ,
    NumberInputField ,
    NumberInputStepper,
    NumberIncrementStepper ,
    NumberDecrementStepper ,
  } from '@chakra-ui/react'
  
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css'

const BookingForm = () => {
  const {isLoading, response, submit} = useSubmit();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const { onOpen } = useAlertContext();

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const formik = useFormik({
    initialValues: {
      venue:"",
      firstName:"",
      people:"",
      date: new Date(),
      time:"",
  },
    onSubmit:(values) => {
      console.log(values);
      //url set to "" because its just simulation
      submit("", values);
      //This submit will call the useSubmit.js and change value of isLoading and response here
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      date: Yup.date().required("Please enter valid date"),
      time:Yup.date().required("Required"),
      venue: Yup.string().required("Required"),
      people: Yup.number().min(1, '1 is minimum').max(10, '10 at most').required("Required"),
    }),
  });

  useEffect(() => {
    if(response){
      onOpen(response.type, response.message, response.details, response.date, response.time);
      console.log("the outside", response)
      console.log("response date" ,response.details.date.toISOString().slice(0, 10));
      console.log("time ", response.details.time.toLocaleTimeString());
      if (response.type === 'success'){
        formik.resetForm();
      }
    }
  }, [response]);

  return (

      <VStack>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} name="reserve-form" data-testid="reserve-form">
            <VStack spacing={1}>
            <FormLabel for="venue">Restaurant Venue</FormLabel>
            <FormControl isInvalid={formik.touched.venue && formik.errors.venue} marginLeft="100px" marginRight="auto" textAlign='center'>
            <Select id="venue" placeholder='Select country' width='185px' height='40px' {...formik.getFieldProps('venue')}>
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
            </Select>
            </FormControl>
            <FormLabel for="firstName">How can I call you?</FormLabel>
            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} marginLeft="auto" marginRight="auto" textAlign='center'>
            <Input 
                id="firstName" 
                name="firstName" 
                placeholder='Your name' 
                {...formik.getFieldProps('firstName')}
                width='185px' height='40px'/>
            <FormErrorMessage marginLeft="100px" marginRight="auto" textAlign='center'>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <div className="row">
            <FormLabel for="people">People</FormLabel>

            <FormControl isInvalid={formik.touched.people && formik.errors.people} marginLeft="auto" marginRight="auto" textAlign='center'>
            <NumberInput id="people" max={10} min={1} width='185px' height='40px' onChange={(value) => formik.setFieldValue('people', value)}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage marginLeft="auto" marginRight="auto" textAlign='center'>{formik.errors.people}</FormErrorMessage>
            </FormControl>

            <FormLabel for="date">Date</FormLabel>
            <FormControl isInvalid={formik.touched.date && formik.errors.date} marginLeft="auto" marginRight="auto" textAlign='center'>
            <div style={{ border: '1px solid #ccc', borderRadius: '4px', width: '185px', height: '28px'}}>
            
            <DatePicker
                id="date"
                name="date"
                selected={formik.values.date}
                 minDate={startDate} onChange={(date) => formik.setFieldValue('date',date)} />
            </div>
            <FormErrorMessage marginLeft="auto" marginRight="auto" textAlign='center'>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            
            <FormLabel for="time">Time</FormLabel>
            <FormControl isInvalid={formik.touched.time && formik.errors.time} marginLeft="auto" marginRight="auto" textAlign='center'>
            <div style={{ border: '1px solid #ccc', borderRadius: '4px', width: '185px', height: '28px'}}>
            <DatePicker
                id="time"
                selected={formik.values.time}
                onChange={(date) => formik.setFieldValue('time',date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
            </div>
            <FormErrorMessage marginLeft="auto" marginRight="auto" textAlign='center'>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            </div>
            <Button
            mt={4}
            type='submit'
            data-testid="submit-btn"
            id="submit-btn"
          >
            Submit
          </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
  );
};

export default BookingForm;
