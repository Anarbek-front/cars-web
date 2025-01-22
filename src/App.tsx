import { Auction } from "./components/Auction/Auction";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Review } from "./components/Review/Review";
import { Search } from "./components/Search/Search";
import { Seller } from "./components/Sellers/Seller";
import { Trending } from "./components/Trending/Trending";
import  "./App.scss";

export const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Search />
            <Trending />
            <Seller />
            <Auction />
            <Review />
            <Footer />
        </div>
    );
};
