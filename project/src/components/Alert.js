import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, details, date, time, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <AlertDialog 
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'} top='200'>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'Booking Confirmed!' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody>Booked Information:</AlertDialogBody>
          <AlertDialogBody>Chosen Venue:{details.venue}</AlertDialogBody>
          <AlertDialogBody>Reservationist :{details.firstName}</AlertDialogBody>
          <AlertDialogBody>Total People:{details.people}</AlertDialogBody>
          <AlertDialogBody>Date:{date}</AlertDialogBody>
          <AlertDialogBody>Time:{time}</AlertDialogBody>

          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
