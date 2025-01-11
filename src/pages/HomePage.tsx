import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Featured from "../components/Featured";
import Teams from "../components/Teams";
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Featured />
      <Teams />
    </div>
  );
};

export default HomePage;
