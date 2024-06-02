import './globals.css';


export const metadata = {
  title: 'Movie List App',
  description: 'A simple app to manage movie lists',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

