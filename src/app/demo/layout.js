import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
