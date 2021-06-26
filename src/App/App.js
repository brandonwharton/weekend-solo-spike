
import './App.css';
import Header from '../Header/Header';
import AddressList from '../AddressList/AddressList';
import CommentList from '../CommentList/CommentList';
import Footer from '../Footer/Footer';
import '@fontsource/roboto';

function App() {
  return (
    <div className="App">
      <Header />
      <AddressList />
      <CommentList />
      <Footer />
    </div>
  );
}

export default App;
