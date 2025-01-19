import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Featured from "../components/Featured";
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Featured />
    </div>
  );
};

export default HomePage;
