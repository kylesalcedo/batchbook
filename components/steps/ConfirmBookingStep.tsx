import React from 'react';
import { useRecoilValue } from 'recoil';
import flowStepState, { useFlowStep } from 'lib/state/booking-flow';
import AppointmentEditor from '../batch/AppointmentEditor'; // Adjusted path
import { BookingEntry } from 'lib/state/booking-flow/types';

const ConfirmBookingStep = () => {
  const { bookingEntries } = useRecoilValue(flowStepState);
  const { setStep } = useFlowStep(); // Or use setRecoilStep if direct state update is needed

  const handleConfirmAll = () => {
    // TODO: Validate all entries
    // TODO: Create appointments via API
    console.log('Confirming all bookings:', bookingEntries);
    // Navigate to success screen (assuming Step.BookingSuccess exists)
    // setStep(Step.BookingSuccess); // This needs Step enum to be imported
    alert('Bookings Confirmed (Placeholder)!');
  };

  const handleDeleteEntry = (id: string) => {
    console.log('Deleting entry:', id);
    // TODO: Implement logic to remove entry from bookingEntries array in Recoil state
  };

  const handleDuplicateEntry = (id: string) => {
    console.log('Duplicating entry:', id);
    // TODO: Implement logic to duplicate entry in bookingEntries array in Recoil state
  };

  // Create a sample booking entry for now
  const sampleEntry: BookingEntry = {
    id: 'sample-1',
    client: { id: 'client-123', email: 'test@example.com', firstName: 'John', lastName: 'Doe', phoneNumber: '1234567890' }, // Simplified client
    services: [{ id: 'service-1', name: 'Haircut' } as any], // Simplified service, cast as any to avoid full CartBookableItem mock
    clinician: { id: 'staff-1', name: 'Jane Smith' } as any, // Simplified staff
    location: { id: 'loc-1', name: 'Downtown Salon' } as any, // Simplified location
    dateTime: new Date(),
  };

  // For now, we'll add this sample entry directly to the list for rendering
  // In a real scenario, this would come from earlier steps in the flow
  const displayEntries = bookingEntries.length > 0 ? bookingEntries : [sampleEntry];

  return (
    <div>
      <h1>Confirm Booking</h1>
      {displayEntries.map(entry => (
        <AppointmentEditor
          key={entry.id}
          entry={entry}
          onDelete={handleDeleteEntry}
          onDuplicate={handleDuplicateEntry}
        />
      ))}
      {displayEntries.length === 0 && <p>No bookings to confirm. Please add a booking.</p>}
      <button onClick={handleConfirmAll} disabled={displayEntries.length === 0}>
        Confirm All Bookings
      </button>
    </div>
  );
};

export default ConfirmBookingStep; 