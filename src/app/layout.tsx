// Styles
import '../styles/global/global.scss';

// Fonts
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata = {
  title: 'Landing Page',
  description:
    'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
