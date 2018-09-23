import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Devices, AddDevice, Device } from './views';
import { DEVICES } from './actions/DEVICES';
import { Loading, NetworkActivity } from './components/Indicators';

class Routes extends Component {
  componentDidMount() {
    this.props.onFetchDevices();
  }
  render() {
    return this.props.indicators.loading ? <Loading /> : (
      <Router>
        <div>
          <Switch>
            <Route exact path="/add-device" component={AddDevice} />
            <Route exact path="/device/:id" component={Device} />
            <Route exact path="/devices" component={Devices} />
            <Redirect from='/' to='/devices' />
          </Switch>

          <NetworkActivity show={this.props.indicators.networkActivity}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return DEVICES(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);