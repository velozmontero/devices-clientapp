import React, { Component } from 'react'
import { DEVICES } from '../actions/DEVICES';
import { connect } from 'react-redux';
import { filter, sort } from '../methods';
import { Selector } from '../components/Inputs';
import { Link } from 'react-router-dom';
import { MdAddToQueue } from 'react-icons/md';
import { device_filter_options, device_sort_options } from '../config';
import DevicesList from '../components/Lists/DevicesList';

class Devices extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.onSortFilter();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filterBy !== prevProps.filterBy || 
      this.props.sortBy !== prevProps.sortBy || 
      this.props.list !== prevProps.list) {
      this.onSortFilter();
    }
  }

  onSortFilter = () => {
    const { list, filterBy, sortBy } = this.props;
    const filtered = device_filter_options[filterBy].value === 'ALL' ? list : filter(list, 'type', device_filter_options[filterBy].value);
    const sorted = sort(filtered, device_sort_options[sortBy].value);

    console.log('filtering and sorting');

    this.setState({
      list: sorted
    })
  }

  render() {
    const { filterBy, sortBy } = this.props;
    return (
      <div className="devices-view"> 
        <div className="header">
          <a>
            Devices
          </a>
          <Link className="link-icon" to="/add-device">
            <MdAddToQueue className="icon" />
          </Link>
        </div>
        <div className="sort-filter-container"> 
          <Selector
            containerStyle={{
              margin: '0px 20px',
            }}
            autoComplete="new-password"
            label='Filter by'
            labelBlurMarginTop={36}
            isSelected={e => e.value === device_filter_options[filterBy].value}
            value={device_filter_options[filterBy].label}
            options={device_filter_options}
            onChange={this.props.onFilterDevices}
          />

          <Selector
            containerStyle={{
              margin: '20px',
            }}
            autoComplete="new-password"
            label='Sort by'
            labelBlurMarginTop={36}
            isSelected={e => e.value === device_sort_options[sortBy].value}
            value={device_sort_options[sortBy].label}
            options={device_sort_options}
            onChange={this.props.onSortDevices}
          />
        </div>
        
        <DevicesList 
          list={this.state.list}
          onRemoveDevice={this.props.onRemoveDevice}
          onSelectDevice={this.props.onSelectDevice}
        />
      </div>
      
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.devices.list,
    filterBy: state.devices.filterBy,
    sortBy: state.devices.sortBy,
  };
}

const mapDispatchToProps = (dispatch) => {
  return DEVICES(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);