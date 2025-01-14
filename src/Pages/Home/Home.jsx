import Banner from "../../Components/Banner/Banner";
import Books from "../../Components/Books/Books";

const Home = () => {
    return (
        <div className="mx-3 md:mx-16 md:mt-12">
            <Banner />
            <Books></Books>
        </div>
    );
};

export default Home;