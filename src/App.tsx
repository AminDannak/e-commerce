import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import Header from "components/header/header.component";
import SignInSignUp from "pages/sign-in-and-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
          <Route component={() => <h1>Not Found</h1>} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
