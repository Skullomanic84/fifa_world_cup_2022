import { DateTime } from 'luxon';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='container max-w-6xl mx-auto flex flex-col min-h-screen'>
      <nav className='py-3 border-b-2'>
        <div className='flex justify-between'>
            <h1 className='text-3xl font-black text-rose-900'>Fifa WC 2022</h1>
        </div>
      </nav>
      <main className='my-4 grow'>{children}</main>
      <footer className='border-t-2 py-4 my-4'>
          <p className='flex justify-center space-x-4'>
            <span>&copy; {DateTime.now().year}</span>
            <span>Only for Educational purpose</span>
          </p>
        </footer>
      </body>
    </html>
  )
}
