import './globals.css';

export const metadata = {
  title: 'Wedding Invitation',
  description: 'Save the Date',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}