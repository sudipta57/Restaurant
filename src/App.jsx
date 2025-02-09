import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartPage from "./pages/Cart";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import ItemDetails from "./pages/ItemDetails";
import Signup from "./pages/Signup";
import Signin from "./pages/SignIn";
import ProfilePage from "./pages/MyProfile";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should not be shown
  const hideHeaderFooterRoutes = ["/sign-up", "/sign-in"];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      {!shouldHideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/my-cart" element={<CartPage />} />
        <Route path="/our-blog" element={<Blog />} />
        <Route path="/our-shop" element={<Shop />} />
        <Route path="/item-details" element={<ItemDetails />} />
        <Route path="/my-profile" element={<ProfilePage />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
