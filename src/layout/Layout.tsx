import React, { ReactElement, ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

type LayoutProps = {
    children: ReactNode;
  };

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
    <Nav/>
    <main className='container'>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout