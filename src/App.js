import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { store } from './redux/store';

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  console.log(store);

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header car={store.car} />
          <AddedFeatures car={store.car} />
        </div>
        <div className="box">
          <AdditionalFeatures store={store.store} />
          <Total car={store.car} additionalPrice={store.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
