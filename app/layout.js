import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Web Development 2 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100">{children}</body>
    </html>
  );
}
