import Header from './Header';
import Footer from "./Footer";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from 'geist/font/sans';

export default function Layout({ children }) {

  const geistMono = GeistMono.className


  return (
    <div className={`${geistMono} flex flex-col h-screen justify-between bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200`}>
      <Header />
      <main className='mb-auto bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200'>
        {children}
      </main>
      <Footer />
    </div >

  );
}