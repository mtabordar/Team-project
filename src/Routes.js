import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductContainer from './Components/Products/ProductContainer'
import Home from './Components/Home/Home'
import ClientContainer from './Components/Clients/ClientContainer'
import ContactContainer from './Components/Contacts/ContactContainer'
import NotFound from './Components/NotFound/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductContainer} />
        <Route path="/clients" component={ClientContainer} />
        <Route path="/contacts" component={ContactContainer} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
