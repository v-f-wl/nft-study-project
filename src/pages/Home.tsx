import AuctionSections from "../layouts/home/AuctionSections";
import CategoriesSection from "../layouts/home/CategoriesSection";
import DiscoverMoreSection from "../layouts/home/DiscoverMoreSection";
import HowItWorksSection from "../layouts/home/HowItWorksSection";
import JoinSection from "../layouts/home/JoinSection";
import TopCreatersSection from "../layouts/home/TopCreatersSection";
import TrendingSection from "../layouts/home/TrendingSection";
import WelcomeSection from "../layouts/home/WelcomeSection";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return ( 
    <div className="">
      <MainLayout>
        <WelcomeSection/>
        <TrendingSection/>
        <TopCreatersSection/>
        <CategoriesSection/>
        <DiscoverMoreSection/>
        <AuctionSections/>
        <HowItWorksSection/>
        <JoinSection/>
      </MainLayout>
    </div>
   );
}
 
export default Home;