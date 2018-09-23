import React from 'react';
import { DEVICES } from '../actions/DEVICES';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import DeviceForm from '../components/Forms/DeviceForm';

const AddDevice = (props) => (
  <div className="add-device-view">
    <Link className="link-icon" to="/devices">
      <IoIosArrowBack className="icon" />
    </Link>  

    <h1>Add New Device</h1>

    <DeviceForm 
      form={props.form}
      onFormChange={props.onFormChange}
      onSaveDevice={() => props.onAddDevice(props.form)}
    />
  </div>
)


const mapStateToProps = (state, ownProps) => {
  return {
    form: state.devices.form
  };
}

const mapDispatchToProps = (dispatch) => {
  return DEVICES(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDevice);
