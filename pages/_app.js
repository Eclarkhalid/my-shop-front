import '@/styles/globals.css'
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const inter = Poppins({
  subsets: ['latin'],
  weight: '500'
});

export default function App({ Component, pageProps }) {
  return <>
    <main className={`${inter.className} min-h-screen max-w-screen-2xl mx-auto`}>
      <Header />
      <Component {...pageProps} />
    </main>
  </>
}
