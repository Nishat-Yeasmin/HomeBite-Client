import CategorySection from "./components/CategorySection";
import FeaturedFoods from "./components/FeaturedFoods";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8F3] dark:bg-gray-950">
      <Hero/>
      <FeaturedFoods/>
      <CategorySection/>
      
    </main>
  );
}