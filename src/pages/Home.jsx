import Banner from "../components/Banner";
import Header from "../components/Header";
import Specialities from "../components/Specialities";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return <div>
    <Header />
    <Specialities />
    <TopDoctors />
    <Banner/>
  </div>;
};

export default Home;
