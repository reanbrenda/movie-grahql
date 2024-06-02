import React, { ReactNode } from 'react';
import Navbar from './NavBar'; // Assuming you have a Navbar component
// import '../app/styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
