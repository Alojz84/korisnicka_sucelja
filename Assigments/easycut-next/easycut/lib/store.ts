export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export type Booking = {
  id: string;
  userId: string;
  barber: string;
  service: string;
  datetime: string; // ISO string
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
};

export type Store = {
  users: User[];
  bookings: Booking[];
  contacts: ContactMessage[];
};

declare global {
  // eslint-disable-next-line no-var
  var __easycut_store: Store | undefined;
}

export const store: Store =
  globalThis.__easycut_store ??
  (globalThis.__easycut_store = {
    users: [],
    bookings: [],
    contacts: [],
  });

export {};
