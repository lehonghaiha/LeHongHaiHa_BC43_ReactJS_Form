import React from 'react';
import ReactDOM from 'react-dom/client';
//React router dom
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// Config redux
import {Provider} from 'react-redux';
import {store} from './redux/configStore'
import ReactForm from './ReactForm/ReactForm';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ReactForm/>}></Route>
      </Routes>
    </BrowserRouter> 
  </Provider>
);


