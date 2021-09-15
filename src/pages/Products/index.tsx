import { HeroSection } from "../../components/HeroSection";
import { homeObjFour} from "../../common";
interface Props {}

const Products = (props: Props) => {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Products;
