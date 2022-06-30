import Footer from '@components/template/Footer';
import Header from '@/components/template/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
