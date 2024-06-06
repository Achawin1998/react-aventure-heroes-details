import React from 'react';
import { Route, Switch } from 'wouter';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Heroes } from './pages/Heroes';
import { HeoresDetail } from './pages/HeroesDetail';
import './App.css'

function App() {
  return (
    <section>
      <Navbar />
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/heroes' component={Heroes} />
        <Route path='/heroes/:heroesName' component={HeoresDetail} />
      </Switch>
    </section>
  );
}

export default App;
