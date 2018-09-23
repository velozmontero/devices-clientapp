import { server } from '../api';
import { fetcher } from '../methods';
import { isValidDevice } from '../methods/validate';

export const DEVICES = (dispatch) => ({
  onFetchDevices: async () => {
    let list = await fetcher(server + '/devices');

    if (list) {
      setTimeout(() => {
        dispatch({
          type: 'ON_LOADING_CHANGE',
          loading: false
        });
      }, 3000);
      
      dispatch({
        type: 'ON_FETCH_DEVICES',
        list: list
      });
    }
  },

  onRemoveDevice: async (device) => {
    dispatch({
      type: 'ON_NETWORK_ACTIVITY_CHANGE',
      networkActivity: true
    });

    let response = await fetcher(server + '/devices/' + device.id, 'DELETE');

    if (response === 1) {
      setTimeout(() => {
        dispatch({
          type: 'ON_NETWORK_ACTIVITY_CHANGE',
          networkActivity: false
        });
      }, 3000);

      dispatch({
        type: 'ON_REMOVE_DEVICE',
        device: device
      });
    }
  },

  onAddDevice: async (device) => {
    if (isValidDevice(device)){
      dispatch({
        type: 'ON_NETWORK_ACTIVITY_CHANGE',
        networkActivity: true
      });

      let response = await fetcher(server + '/devices', 'POST', device);

      if (response) {
        setTimeout(() => {
          dispatch({
            type: 'ON_NETWORK_ACTIVITY_CHANGE',
            networkActivity: false
          });
        }, 3000);

        dispatch({
          type: 'ON_ADD_DEVICE',
          device: response
        });
      }
    }
  },

  onUpdateDevice: async (device) => {
    dispatch({
      type: 'ON_NETWORK_ACTIVITY_CHANGE',
      networkActivity: true
    });

    let response = await fetcher(server + '/devices/' + device.id, 'PUT', device);

    if (response === 1) {
      setTimeout(() => {
        dispatch({
          type: 'ON_NETWORK_ACTIVITY_CHANGE',
          networkActivity: false
        });
      }, 3000);
      
      dispatch({
        type: 'ON_UPDATE_DEVICE',
        device: device
      });
    }
  },

  onFilterDevices: (o, i) => {
    dispatch({
      type: 'ON_FILTER_DEVICES',
      filterBy: i
    });
  },

  onSortDevices: (o, i) => {
    dispatch({
      type: 'ON_SORT_DEVICES',
      sortBy: i
    });
  },

  onFormChange: (form) => {
    dispatch({
      type: 'ON_FORM_CHANGE',
      form: form
    });
  },
});
