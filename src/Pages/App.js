import React from 'react';
import Header from './Header';
import Jokes from './Jokes';
import About from './About';
import Home from './Home';
import Footer from './Footer';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/jokes') {
    Component = Jokes;
  } else if (pathname === '/about') {
    Component = About;
  } else {
    Component = Home;
  }
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
};

export default App;
