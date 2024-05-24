import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the perfect property',
  description: 'PropertyPulse is the best place to find the perfect property',
  keywords: 'PropertyPulse, Property, Property Search, Property Search Engine',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
