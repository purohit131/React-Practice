import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
        <Route path="/" exact>
            <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome">
            <Welcome/>
        </Route>
        <Route path="/products" exact>
            <Products/>
        </Route>
        <Route path="/products/:productId">
            <ProductDetails/>
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
