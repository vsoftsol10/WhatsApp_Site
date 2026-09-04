
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ.jsx";
function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default PricingPage;

