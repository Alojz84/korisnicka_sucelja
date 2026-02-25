export type ContactMessage = {
  id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
};

// global singleton (da ne puca u dev/HMR)
const globalForContact = globalThis as unknown as {
  __contactMessages?: ContactMessage[];
};

export const contactMessages: ContactMessage[] =
  globalForContact.__contactMessages ?? (globalForContact.__contactMessages = []);