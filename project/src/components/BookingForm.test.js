import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { AlertProvider, useAlertContext } from "../context/alertContext";

jest.mock("../context/alertContext");

describe("Booking Form", () => {
  test("User is able to submit the form if everything is filled", () => {
    const option = "Nigeria";
    const name = "Bob";
    const people = 4;
    const date = new Date();
    const time = new Date();
    const handleSubmit = jest.fn();
    const onOpen = jest.fn();

    useAlertContext.mockReturnValue({ onOpen });

    render(
      <AlertProvider>
        <BookingForm onSubmit={handleSubmit} />
      </AlertProvider>
    );

    const optionInput = screen.getByLabelText("Restaurant Venue");
    fireEvent.change(optionInput, { target: { value: option } });

    const nameInput = screen.getByLabelText("How can I call you?");
    fireEvent.change(nameInput, { target: { value: name } });

    const peopleInput = screen.getByLabelText("People");
    fireEvent.change(peopleInput, { target: { value: people } });

    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByLabelText("Time");
    fireEvent.change(timeInput, { target: { value: time } });

    const submitButton = screen.getByTestId("submit-btn");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      option,
      name,
      people,
      date,
      time,
    });

    expect(onOpen).toHaveBeenCalled();
  });
});