// app/layout.tsx
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "EasyCut",
  description: "Hair salon booking app (Assignment 3)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl p-6">{children}</main>
      </body>
    </html>
  );
}
