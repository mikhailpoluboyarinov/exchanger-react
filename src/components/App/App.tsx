import React from 'react';
import './App.css';
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {Footer} from "../Footer/Footer";

export const App = () => {
  return (
      <div className="container">
          <Header/>
          <Main />
          <Footer />
      </div>
  );
}
