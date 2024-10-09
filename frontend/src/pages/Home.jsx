import {
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Gallery,
  FindUs,
  Footer,
} from "../container";
import { Navbar } from "../components";

export const Home = () => {
  return(
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </>
  )
};
