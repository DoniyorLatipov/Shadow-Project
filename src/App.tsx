import Contacts from './components/Contacts/Contacts';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Services from './components/Services/Services';
import Header from './layout/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Contacts />
    </>
  );
}

export default App;
