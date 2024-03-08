import { fireEvent, render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';
import BookingForm from './components/BookingForm';
import Alert from './components/Alert'
import { AlertProvider } from "./context/alertContext";
import useSubmit from "./hooks/useSubmit";
import Reservation from "./components/Reservation";

describe("Booking Form", () => {
  test("User is able to submit the form if everything is filled", () => {
    render(
      <AlertProvider>
        <App />
      </AlertProvider>
    );

    const submitButton = screen.getByText(/Reverse a Table/);
    fireEvent.click(submitButton);

    const optionInput = screen.getByLabelText(/Restaurant Venue/);
    userEvent.selectOptions(optionInput, 'Nigeria');

    const nameInput = screen.getByLabelText(/How can I call you\?/);
    fireEvent.change(nameInput, { target: { value: "Bob" } });

    const peopleInput = screen.getByLabelText(/People/);
    fireEvent.change(peopleInput, { target: { value: "4" } });

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "2022-12-31" } });

    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: "18:00" } });

    const formSubmitButton = screen.getByRole("button", { name: "Submit" }); // Find the submit button by its role

    act(() => {
      fireEvent.click(formSubmitButton);
    });

    expect(optionInput.value).toBe("Nigeria");
    expect(nameInput.value).toBe("Bob");
    expect(peopleInput.value).toBe("4");
    expect(dateInput.value).toBe("2022-12-31");
    expect(timeInput.value).toBe("18:00");
    screen.debug(undefined, 300000);
  });
});