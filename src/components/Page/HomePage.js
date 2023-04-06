import Feartures from "../Layout/Features/Feartures";
import Gallery from "../Layout/Gallery/Gallery";
import Home from "../Layout/Homes/Homes";
import Layout from "../Layout/Layout";
import Story from "../Layout/Story/Story";

const HomePage = (props) => {
  return (
    <Layout>
      <Feartures />
      <Story />
      <Home />
      <Gallery />
    </Layout>
  );
};
export default HomePage;
