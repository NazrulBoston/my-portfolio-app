import BannerPage from "./banner/page";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerPage></BannerPage>
      <h1>This is our home page</h1>
    </div>
  );
}
