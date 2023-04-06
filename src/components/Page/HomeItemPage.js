import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import HomeDetails from "../Layout/Homes/HomeDetails";

const HomeItemPage = (prosp) => {
  const homeCtx = useContext(AuthContext);
  const params = useParams();
  const home = homeCtx.HOME_DATA.find((el) => el.name === `${params.id}`);

  return (
    <Layout>
      <HomeDetails item={home} />
    </Layout>
  );
};
export default HomeItemPage;
