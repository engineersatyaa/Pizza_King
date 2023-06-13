import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter().pathname.split("/")[1];

  let title,
    description,
    isLoginOrRegisterPage = false;

  switch (router) {
    case "":
      title = "Pizza King - Cheap and Best Online Pizza in India";
      description = "Pizza King is a fast pizza delivery app.";
      break;

    case "category":
      title = "Pizza Categories - Paneer Pizza, Tomato Pizza, Chicken Pizza";
      description = "Different types of categories of pizza.";
      break;

    case "pizza_details":
      title = "Pizza Details";
      description = "Details of pizza's price,sizes,toppings,veg or non-veg.";
      break;

    case "user_profile":
      title = "User Profile";
      description = "User's personal details.";
      break;

    case "cart":
      title = "Shopping Cart";
      description = "User's pizza shopping cart.";
      break;

    case "register":
      title = "Sign Up";
      description = "New user sign up page.";
      isLoginOrRegisterPage = true;
      break;

    case "login":
      title = "Login";
      description = "User login page.";
      isLoginOrRegisterPage = true;
      break;

    default:
      title = "404 Error - Page Not Found";
      description = "Page not found.";
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="SATYA PAL SINGH" />
        <meta name="description" content={`${description}`} />
        <meta name="keywords" content="Pizza, Order Pizza, Paneer Pizza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/pizza1.png" />
      </Head>

      <main className={roboto.className}>
        {!isLoginOrRegisterPage && <Header />}

        <Component {...pageProps} />

        {!isLoginOrRegisterPage && <Footer />}
      </main>
    </>
  );
}

export default App;
