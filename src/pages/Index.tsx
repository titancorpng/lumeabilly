import { Layout } from "@/components/Layout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ParallaxSection } from "@/components/ParallaxSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <FeaturedProducts />
      <ParallaxSection />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
