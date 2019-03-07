import React from 'react';
// import GoogleMapReact from 'google-map-react';
import Home from './Home'
import Posts from './Posts'
import NewPost from './NewPost'
import Flat from './Flat';
// import Marker from './Marker';
// import './marker.css';
// import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/new_post" component={NewPost} />
          <Route exact path="/flat" component={Flat} />
        </Switch>
      </div>
    )
  }
}
export default App

