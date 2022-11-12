import './App.css';
import AddBookForm from './components/addbookform';
import BookList from './components/booklist';
import Navbar from './components/navbar';
import BookContextProvider from './contexts/bookcontext';

function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar />
      <BookList />
      <AddBookForm />
    </BookContextProvider>
    </div>
  );
}

export default App;
