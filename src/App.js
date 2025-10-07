

import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact" ;
import Footer from "./components/footer" ;
import Profile from "./components/profile" ;
function App() {
  return (
    <div className="font-sans text-gray-900 bg-white scroll-smooth container mx-auto px-6">
      <Header/>
      <Hero/>
      <Profile/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
