import React, { Component } from 'react';
import { DEVICES } from '../actions/DEVICES';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import DeviceForm from '../components/Forms/DeviceForm';

class Device extends Component {
  state = {
    device: {
      id: '',
      system_name: '',
      type: '',
      hdd_capacity: '',
    }
  };

  componentDidMount() {
    // Get the device depending on the route params id
    let device = this.props.list.find(device => device.id === this.props.match.params.id);

    if (device) {
      // If device exists set it in the component state
      this.onDeviceChange(device);
    }
    else {
      // If device does not exist navigate away to the devices view
      this.props.history.replace('/devices');
    }
  }

  // Set device in the component state
  onDeviceChange = (device) => {
    this.setState({
      device: device
    });
  }

  render() {
    return (
      <div className="add-device-view">
        <Link className="link-icon" to="/devices">
          <IoIosArrowBack className="icon" />
        </Link>

        <h1>Device</h1>

        <DeviceForm
          form={this.state.device}
          onFormChange={this.onDeviceChange}
          onSaveDevice={() => this.props.onUpdateDevice(this.state.device)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.devices.list
  };
}

const mapDispatchToProps = (dispatch) => {
  return DEVICES(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);
