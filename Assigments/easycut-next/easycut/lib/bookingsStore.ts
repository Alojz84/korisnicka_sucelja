export type Booking = {
  id: string;
  fullName: string;
  phone: string;
  service: string;
  barber: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  note?: string;
  createdAt: string;
};

export const bookings: Booking[] = [];