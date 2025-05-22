import React from 'react';
import { BookingEntry } from 'lib/state/booking-flow/types';

interface AppointmentEditorProps {
  entry: BookingEntry;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

const AppointmentEditor: React.FC<AppointmentEditorProps> = ({ entry, onDelete, onDuplicate }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h4>Booking ID: {entry.id}</h4>
      <p>Client: {entry.client?.firstName} {entry.client?.lastName}</p>
      <p>Services: {entry.services.map(s => s.name).join(', ')}</p>
      <p>Clinician: {entry.clinician?.name}</p>
      <p>Location: {entry.location?.name}</p>
      <p>Date/Time: {entry.dateTime?.toLocaleString()}</p>
      <button onClick={() => onDelete(entry.id)}>Delete</button>
      <button onClick={() => onDuplicate(entry.id)}>Duplicate</button>
    </div>
  );
};

export default AppointmentEditor; 