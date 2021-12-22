import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spacer from "./Components/Spacer";
import "./App.css";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTop";
import LinearLoading from "./Components/LinearLoading";
import PrivateRoute from "./Pages/PrivateRoute";

const Search = React.lazy(() => import("./Pages/Search"));
const Home = React.lazy(() => import("./Pages/Home"));
const ProductDetail = React.lazy(() => import("./Pages/ProductDetail"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const Login = React.lazy(() => import("./Pages/Login"));
const UserProfile = React.lazy(() => import("./Pages/UserProfile"));
const Register = React.lazy(() => import("./Pages/Register"));
const Checkout = React.lazy(() => import("./Pages/Checkout"));
const Store = React.lazy(() => import("./Pages/Store"));
const About = React.lazy(() => import("./Pages/About"));
const AddProductForm = React.lazy(() =>
  import("./Components/UserProfile/CRUD/AddProductForm")
);
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Spacer>
        <Container>
          <Suspense fallback={<LinearLoading />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/product-detail/:productId"
                component={ProductDetail}
              />
              <PrivateRoute path="/cart" component={Cart} />
              <PrivateRoute exact path="/checkout" component={Checkout} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/profile" component={UserProfile} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/about" component={About} />
              <PrivateRoute
                exact
                path="/add-product"
                component={AddProductForm}
              />
            </Switch>
          </Suspense>
        </Container>
      </Spacer>
      <Footer />
    </div>
  );
}

export default App;
