import Awards from "../compoenents/Awards";
import Banner from "../compoenents/Banner";
import Contact from "../compoenents/Contact";
import Testimonial from "../compoenents/Testimonial";
import TopWriters from "../compoenents/TopWriters";


const Home = () => {
    return (
        <div>
            <Banner />
            <Awards />
            <Testimonial/>
            <TopWriters />
            <Contact/>
        </div>
    );
};

export default Home;