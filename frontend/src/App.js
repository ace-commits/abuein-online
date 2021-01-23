import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import useRTL, { RTLContext } from './hooks/useRTL';
import ToggleRTL from './components/ToggleRTL';

const App = () => {
  const [isRTL, setIsRTL] = useRTL();
  return (
    <>
    <RTLContext.Provider value={{ value: isRTL, setValue: setIsRTL }}>
                <div>
                    <ToggleRTL />
                </div>
    </RTLContext.Provider>
      <Router>
      <Header isRTLProp={isRTL}/>
      <main className = "py-3">
        <Container>
          <Route path = '/' render={() => (<HomeScreen isRTLProp={isRTL}/>)} exact/>
          <Route path = '/product/:id' component = {ProductScreen} />
        </Container>
      </main>
      <Footer isRTLProp={isRTL}/>
      </Router>
    </>
      );
}
export default App;
