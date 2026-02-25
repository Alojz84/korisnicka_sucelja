export type Review = {
  id: string;
  author: string;
  title: string;
  content: string;
  rating: number;
  createdAt: string;
};

// Global singleton (radi stabilno u dev + HMR)
const globalForReviews = globalThis as unknown as {
  __reviews?: Review[];
};

export const reviews: Review[] =
  globalForReviews.__reviews ?? (globalForReviews.__reviews = []);