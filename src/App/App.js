
import './App.css';
import Header from '../Header/Header';
import AddressList from '../AddressList/AddressList';
import CommentList from '../CommentList/CommentList';
import Footer from '../Footer/Footer';
import '@fontsource/roboto';
import {HashRouter as Router, Route} from 'react-router-dom';
import LocationTesting from '../LocationTesting/LocationTesting';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact>
          <AddressList />
          <CommentList />
        </Route>
        <Route path='/location'>
          <LocationTesting />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
