import './global.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Recipe Finder',
  description: 'Find delicious recipes with ease!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="pt-16">{children}</main>{' '}
      </body>
    </html>
  );
}
