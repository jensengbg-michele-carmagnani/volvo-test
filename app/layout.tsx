import '../styles/globals.css';

import VccProvider from './components/vcc-provider/VccProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <VccProvider>{children}</VccProvider>
      </body>
    </html>
  );
}
