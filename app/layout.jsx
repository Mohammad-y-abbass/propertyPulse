import '@/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the perfect property',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
