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
    let device = this.props.list.find(device => device.id === this.props.match.params.id);

    if (device) {
      this.onDeviceChange(device);
    }
    else {
      this.props.history.replace('/devices');
    }
  }

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
