import Header from '@/components/Header';
import './globals.css';

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb close website',
  icons: {
    icon: ['favicon.ico?v=3'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
