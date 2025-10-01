import AboutPage from "./about/page";
import BannerPage from "./banner/page";
import Navbar from "./components/Navbar";
import ExpertiesPage from "./myExpertise/page";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerPage></BannerPage>
      <AboutPage></AboutPage>
      <ExpertiesPage></ExpertiesPage>
     
    </div>
  );
}
