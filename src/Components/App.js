import { BrowserRouter, Route, Link } from "react-router-dom";

import '../Styles/css/App.css';
import Header from './Header';
import TopMain from './TopMain';
import Main from './Main';
import BottomMain from './BottomMain';
import Footer from './Footer';
// import Partners from './Partners';
// import Services from './Services';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <TopMain />
        <Main />
        <BottomMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
