import { server } from '../api';
import { fetcher } from '../methods';
import { isValidDevice } from '../methods/validate';

export const DEVICES = (dispatch) => ({
  // Send a GET request to fetch all devices from the api
  onFetchDevices: async () => {
    let list = await fetcher(server + '/devices');

    if (list) {
      // Wait 3 seconds to dispatch an action to stop the loading screen and show the devices view
      setTimeout(() => {
        dispatch({
          type: 'ON_LOADING_CHANGE',
          loading: false
        });
      }, 3000);
      
      // Dispatch an action to update the redux store with the list of devices
      dispatch({
        type: 'ON_FETCH_DEVICES',
        list: list
      });
    }
  },

  // Send a DELETE request to remove a device from the database
  onRemoveDevice: async (device) => {
    // Dispatch an action to start the activity indicator
    dispatch({
      type: 'ON_NETWORK_ACTIVITY_CHANGE',
      networkActivity: true
    });

    let response = await fetcher(server + '/devices/' + device.id, 'DELETE');

    if (response === 1) {
      // Wait 2 seconds to dispatch an action to stop the activity indicator
      setTimeout(() => {
        dispatch({
          type: 'ON_NETWORK_ACTIVITY_CHANGE',
          networkActivity: false
        });
      }, 2000);

      // Dispatch an action to remove the device from the redux store and synchronize it with the database
      dispatch({
        type: 'ON_REMOVE_DEVICE',
        device: device
      });
    }
  },

  // Send a POST request to remove a device from the database
  onAddDevice: async (device) => {
    if (isValidDevice(device)){
      // Dispatch an action to show the user the request is been processed
      dispatch({
        type: 'ON_NETWORK_ACTIVITY_CHANGE',
        networkActivity: true
      });

      let response = await fetcher(server + '/devices', 'POST', device);

      if (response) {
        // Wait 2 seconds to dispatch an action to stop the activity indicator
        setTimeout(() => {
          dispatch({
            type: 'ON_NETWORK_ACTIVITY_CHANGE',
            networkActivity: false
          });
        }, 2000);

        // Dispatch an action to add the device to the redux store and synchronize it with the database
        dispatch({
          type: 'ON_ADD_DEVICE',
          device: response
        });
      }
    }
  },

  onUpdateDevice: async (device) => {
    // Dispatch an action to show the user the request is been processed
    dispatch({
      type: 'ON_NETWORK_ACTIVITY_CHANGE',
      networkActivity: true
    });

    let response = await fetcher(server + '/devices/' + device.id, 'PUT', device);

    if (response === 1) {
      // Wait 2 seconds to dispatch an action to stop the activity indicator
      setTimeout(() => {
        dispatch({
          type: 'ON_NETWORK_ACTIVITY_CHANGE',
          networkActivity: false
        });
      }, 2000);
      
      // Dispatch an action to update the device in the redux store and synchronize it with the database
      dispatch({
        type: 'ON_UPDATE_DEVICE',
        device: device
      });
    }
  },

  // Dispatch an action to set the devices filter option in the redux store
  onFilterDevices: (o, i) => {
    dispatch({
      type: 'ON_FILTER_DEVICES',
      filterBy: i
    });
  },

  // Dispatch an action to set the devices sorting option in the redux store
  onSortDevices: (o, i) => {
    dispatch({
      type: 'ON_SORT_DEVICES',
      sortBy: i
    });
  },

  // Dispatch an action to change the add device form data in the redux store
  onFormChange: (form) => {
    dispatch({
      type: 'ON_FORM_CHANGE',
      form: form
    });
  },
});
