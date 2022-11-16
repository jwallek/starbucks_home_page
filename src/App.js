import Drinks from "./components/drinks/Drinks";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Protein from "./components/protein/Protein";
import Rewards from "./components/rewards/Rewards";
import Vacation from "./components/vacation/Vacation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Rewards/>
      <Drinks />
      <Protein />
      <Vacation />
      <p className='smallprint'>
        *Starbucks Rewards is available at participating stores. Some restrictions apply.
        For full program details, visit {' '}
        <a href="https://www.starbucks.com/rewards">starbucks.com/rewards</a>
      </p>
      <p className='smallprint'>
        **Impossible is a registered trademark of Impossible Foods Inc. Used under license.
      </p>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
