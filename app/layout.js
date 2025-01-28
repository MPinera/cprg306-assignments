import "./globals.css";

export const metadata = {
  title: "CPRG306 Assignments",
  description: "Web Development 2 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}