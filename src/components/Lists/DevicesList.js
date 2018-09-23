import React, { Component } from 'react'
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default class DevicesList extends Component {
  render() {
    return !this.props.list.length ? (
      <div className="empty-list">
        No Devices Available
      </div>
    ) : (
      <div className="devices-list-container">
        {
          this.props.list.map(device => (
            <div className="device" key={device.id}>
              <div>
                <div>{device.system_name}</div>
                <div>{device.type}</div>
                <div><span>{device.hdd_capacity + ' GB'}</span></div>
              </div>
              
              <div className="device-actions">
                <Link to={"/device/" + device.id}>
                  <MdEdit className="icon" />
                </Link>
                
                <MdDelete className="icon" onClick={() => this.props.onRemoveDevice(device)}/>
              </div>
              
            </div>
          ))
        }
      </div>
    )
  }
}
