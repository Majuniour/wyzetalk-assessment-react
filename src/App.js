import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import Artists from './pages/artists/artists.component';
import Artist from './pages/artist/artist.component';
import SearchBar from './components/search-bar/search-bar-component';



// import { setArtistsList } from './redux/artists/artists.actions';
// import { selectCurrectUser } from './redux/user/user.selectors';



class App extends React.Component {



  render() {
    return (
      <div style={{ backgroundColor: 'darkgray', width: '100%' }}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/artist' component={Artist}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // artistsList: setArtistsList
})

const mapDispatchToProps = dispatch => ({
  // setArtistsList: Artists => dispatch(setArtistsList(Artists))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
