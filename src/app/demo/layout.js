import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImageKitProvider } from "@imagekit/next";

const Layout = ({ children }) => {
  return (
    <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}>
      <div className="bg-white">
        <Header />
        {children}
        <Footer />
      </div>
    </ImageKitProvider>
  );
};

export default Layout;
