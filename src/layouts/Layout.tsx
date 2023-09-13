import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <main className="mt">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
