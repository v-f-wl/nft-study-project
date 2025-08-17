import type { ReactNode } from 'react';
import './MainLayout.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

type MainLayout = {
  children: ReactNode
}

const MainLayout = ({children}: MainLayout) => {
  return ( 
    <div className="">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}
 
export default MainLayout;