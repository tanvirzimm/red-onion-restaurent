import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Food from './component/Food/Food';
import { AuthContextProvider } from './component/Login/useAuth';



function App() {
  
  return (
    <div>
      <AuthContextProvider>
      <Header></Header>
      <Banner></Banner>
      <Food></Food>
      </AuthContextProvider>
    </div>
  );
}

export default App;
