import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NotFound from './components/NotFound'; // Add a NotFound component
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Forget from './components/Forget';
import Booking from './components/Booking';

const ReactDatePicker = lazy(() => import('./components/ReactDatePicker'));
const WeddingMenu = lazy(() => import('./components/WeddingMenu'));
const LandingPage = lazy(() => import('./components/LandingPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/marriage-gardens' element={<WeddingMenu />} />
        <Route path='/date' element={<ReactDatePicker />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
        <Route path='/SignIn' element={<SignIn/>} /> 
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Forget' element={<Forget/>} />
        <Route path='/Booking' element={<Booking/>} />
      </Routes>
    </Suspense>
  );
}

export default App;
