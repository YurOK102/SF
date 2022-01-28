import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Filter from './components/Filter/Filter';
import Content from './components/Content/Content';

import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="app__content">
        <Header />
        <Filter />
        <Content />
      </div>
    </div>
  );
}

export default App;
