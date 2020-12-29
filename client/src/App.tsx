import 'react-toastify/dist/ReactToastify.min.css';

import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { onSocketDestroy, onSocketInit } from './actions/common';
import { GlobalStyle, Wrapper } from './App.style';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Home from './screens/Home';
import IconsManager from './screens/IconsManager';
import Settings from './screens/Settings';
import { AppState } from './store';

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.common);

  useEffect(() => {
    dispatch(onSocketInit());

    return () => {
      dispatch(onSocketDestroy());
    };
  }, []);

  return (
    <Router hashType="noslash">
      <GlobalStyle />
      <Wrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/settings" component={Settings} />
          <Route path="/icons-manager" component={IconsManager} />
        </Switch>
        <Footer />
      </Wrapper>
      <Spinner show={loading} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
};

export default React.memo(App);
