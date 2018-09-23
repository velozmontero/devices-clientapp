import React from 'react';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DevicesList = (props) => !props.list.length ? (
  <div className="empty-list">
    No Devices Available
  </div>
) : (
  <div className="devices-list-container">
    {
      props.list.map(device => (
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
            
            <MdDelete className="icon" onClick={() => props.onRemoveDevice(device)}/>
          </div>
          
        </div>
      ))
    }
  </div>
)


export default DevicesList;