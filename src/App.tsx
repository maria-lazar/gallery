import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArtList } from './art/components/ArtList';
import { ArtProvider } from './art/context/ArtContext';
import { Artwork } from './art/components/Artwork';

function App() {
  return (
    <ArtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtList />} />
          <Route path="/art/list" element={<ArtList />} />
          <Route path="/art/:id" element={<Artwork />} />
        </Routes>
      </BrowserRouter>
    </ArtProvider>
  )
}

export default App
