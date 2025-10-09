

import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact" ;
import Footer from "./components/footer" ;
import Profile from "./components/profile" ;
function App() {
  return (
   <div className="font-sans text-gray-900 bg-white scroll-smooth w-full">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Profile />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
