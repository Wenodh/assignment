import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddItem from './pages/addItem/AddItem';
import Home from './pages/Home';
import Resource from './pages/resourcePage/Resource';
import TopBar from './pages/topBar/TopBar';

function App() {
    return (
        <BrowserRouter>
            <TopBar />
            <Routes style={{ backgroundColor: '#F5F5F5' }}>
                <Route path="/" element={<Home />} />
                <Route path="/:tag/:id" element={<Resource />} />
                <Route path="/addItem/:tag/:id" element={<AddItem />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
