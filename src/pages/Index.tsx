import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import CompanyPartners from "@/components/CompanyPartners";
import HeroSection from "@/components/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Madras Engineering College - Premier Engineering Institution in Chennai</title>
        <meta 
          name="description" 
          content="Madras Engineering College (MEC) - One of India's oldest and most prestigious engineering colleges. World-class education, industry partnerships with Meta, Google, Microsoft, Amazon, and Siemens. TNEA Code: 1203" 
        />
        <meta name="keywords" content="Madras Engineering College, MEC Chennai, engineering college, TNEA 1203, Anna University, Chennai engineering" />
        <link rel="canonical" href="https://madrasengineeringcollege.edu.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />
        <HeroSection />
        <CompanyPartners />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
