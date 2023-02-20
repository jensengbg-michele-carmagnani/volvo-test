import '../styles/scss/main.scss';
import '../styles/globals.css';

import VccProvider from './components/VccProvider/VccProvider';

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
