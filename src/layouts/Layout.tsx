import Footer from "../components/common/footer/Footer";
import Header from "../components/common/Header";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
