import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  // console.log(children)
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
