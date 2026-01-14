// app/layout.tsx
import "@/styles/globals.css";
import "../styles/landing.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "EasyCut",
  description: "Hair salon booking app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>
        <Navbar />
        {/* full width – bez starog mx-auto/max-w/p-6 kostura */}
        <main>{children}</main>
      </body>
    </html>
  );
}
