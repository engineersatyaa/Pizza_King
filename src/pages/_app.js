import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// To use google font in all pages.
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  /* There is no need for fallback font, next.js has already included somewhat similar fallback font. You can check font-family in dev tool by clicking on any text. So you can remove (fallback: ["arial"]) it.*/
  fallback: ["arial"],
});

function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default App;
