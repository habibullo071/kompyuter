import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AIM from './pages/AIM/AIM';
import Bloclash from './pages/Bloclash/Bloclash';
import Chrome from './pages/Chrome/Chrome';
import Excel from './pages/Excel/Excel';
import File from './pages/File/File';
import Kompyuter from './pages/Kompyuter/Kompyuter';
import Korzina from './pages/Korzina/Korzina';
import Telegram from './pages/Telegram/Telegram';
import Vscode from './pages/Vscode/Vscode';
import Vscodefull from './pages/Vscodefull/Vscodefull';
import Word from './pages/Word/Word';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Bloclash/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/etotkompyuter' element={<Kompyuter/>}/>
        <Route path='/file' element={<File/>}/>
        <Route path='/excel' element={<Excel/>}/>
        <Route path='/vscode' element={<Vscode/>}/>
        <Route path='/korzina' element={<Korzina/>}/>
        <Route path='/word' element={<Word/>}/>
        <Route path='/chrome' element={<Chrome/>}/>
        <Route path='/telegram' element={<Telegram/>}/>
        <Route path='/aim' element={<AIM/>}/>
        <Route path='/vscodefull' element={<Vscodefull/>}/>
      </Routes>
    </div>
  );
}

export default App;
