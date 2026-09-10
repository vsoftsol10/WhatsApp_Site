


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import WhoItsFor from "./components/WhoItsFor";
// import CoreBenefits from "./components/CoreBenefits";
// import HowItWorks from "./components/HowItWorks";
// import Testimonials from "./components/Testimonials";
// import CTASection from "./components/CTASection";
// import Footer from "./components/Footer";

// import DemoPage from "./pages/DemoPage";
// import PricingPage from "./pages/PricingPage";

// import HeroCarousel from "./components/HeroCarousel.jsx";

// // Privacy Policy
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsAndConditions from "./components/TermsAndConditions";

// function HomePage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <HeroCarousel />
//         <WhoItsFor />
//         <CoreBenefits />
//         <HowItWorks />
//         <Testimonials />
//         <CTASection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Landing Page */}
//         <Route path="/" element={<HomePage />} />

//         {/* Pricing Page */}
//         <Route path="/pricing" element={<PricingPage />} />

//         {/* Demo Page */}
//         <Route path="/demo" element={<DemoPage />} />

//         {/* Privacy Policy Page */}
//         <Route
//           path="/privacy-policy"
//           element={
//             <>
//               <Navbar />
//               <PrivacyPolicy />
//               <Footer />
//             </>
//           }
//         />

//       </Routes>
      
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import WhoItsFor from "./components/WhoItsFor";
import CoreBenefits from "./components/CoreBenefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import DemoPage from "./pages/DemoPage";
import PricingPage from "./pages/PricingPage";

import HeroCarousel from "./components/HeroCarousel.jsx";

// Legal Pages
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";


function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroCarousel />
        <WhoItsFor />
        <CoreBenefits />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}


// Fades each page in on route change so navigating between
// pages (Home → Pricing → Demo) feels like one smooth transition
// instead of a hard cut.
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>

        {/* Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Pricing Page */}
        <Route path="/pricing" element={<PricingPage />} />

        {/* Demo Page */}
        <Route path="/demo" element={<DemoPage />} />

        {/* Privacy Policy */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms-and-conditions"
          element={
            <>
              <Navbar />
              <TermsAndConditions />
              <Footer />
            </>
          }
        />

      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

