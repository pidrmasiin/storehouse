import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/Navigation';
import Home from './components/Home';
import Storage from './components/Storage';
import { getItems } from './reducers/itemsReducer';


class App extends Component {
  componentWillMount = async () => {
    this.props.getItems()
  }

  render() {
    console.log('props', this.props)
    return (
      <Router>
        <Grid
          container
          style={{
            background: '#1a001a', minHeight: '97vh', height: '100%', fontFamily: 'Courier New',
          }}
        >
          <Grid item xs={12} style={{ height: '10%', padding: '2em' }}>
            <NavBar />
          </Grid>
          <Grid container item xs={12} style={{ height: '50%', paddingLeft: '5%' }}>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/varastosi" render={() => <Storage />} />
          </Grid>
          <Grid item xs={12} style={{ height: '20%' }} />
        </Grid>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  {
    getItems,
  },
)(App);
