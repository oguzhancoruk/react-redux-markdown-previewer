
import './App.css';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Input from './components/Input/Input';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Footer from './components/Footer/Footer';

function App() {

 

  return (
    <div className="App">
    <Provider store={store}>
    <Help/>
    <Header/>
    <Input/>
    <Footer/>
    </Provider>
    </div>
  );
}

export default App;
