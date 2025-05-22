import { CartBookableItem } from "@boulevard/blvd-book-sdk/lib/cart";
import { Location } from "@boulevard/blvd-book-sdk/lib/locations";
import { Staff } from "lib/state/staff/types";

// Define our own ClientData interface
export interface ClientData {
    id?: string;         // For existing client's Boulevard ID
    externalId?: string; // Optional external system ID
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export enum Step {
    LoadingStep,
    SearchClient,
    ChooseLocation,
    SelectService,
    SelectOptions,
    SelectedServices,
    ChooseDate,
    PersonalInfo,
    ConfirmBooking,
    BookingSuccess,
}

export interface BookingEntry {
    id: string; // Unique ID for the booking entry
    client: ClientData | null; // Use our custom ClientData interface
    services: CartBookableItem[];
    clinician: Staff | null;
    location: Location | null;
    dateTime: Date | null;
    // Add any other relevant fields for a single booking
}

export interface Types {
    step: Step;
    bookingEntries: BookingEntry[]; // Array of booking entries
}

export const initialStep: Step = Step.LoadingStep;
export const initialBookingEntries: BookingEntry[] = []; // Initial state for booking entries
