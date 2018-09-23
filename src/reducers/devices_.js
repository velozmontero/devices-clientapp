const onFetchDevices = (state, action) => {
  return {
    ...state,
    list: action.list
  };
};

const onFilterDevices = (state, action) => {
  return {
    ...state,
    filterBy: action.filterBy
  };
};

const onSortDevices = (state, action) => {
  return {
    ...state,
    sortBy: action.sortBy
  };
};

const onRemoveDevice = (state, action) => {
  console.log('filtering');
  return {
    ...state,
    list: state.list.filter(device => device.id !== action.device.id)
  };
};

const onFormChange = (state, action) => {
  return {
    ...state,
    form: action.form
  };
}

const onAddDevice = (state, action) => {
  return {
    ...state,
    list: state.list.concat([action.device]),
    form: {
      system_name: '',
      type: '',
      hdd_capacity: ''
    },
  };
}

const onUpdateDevice = (state, action) => {
  let list = JSON.parse(JSON.stringify(state.list));

  for (var i = 0; i < list.length; i++) {
    if (list[i].id === action.device.id) {
      list[i] = action.device;

      return {
        ...state,
        list: list
      } 
    }
  }
}

const devices = (
  state = {
    filterBy: 0,
    sortBy: 0,
    list: [],
    form: {
      system_name: '',
      type: '',
      hdd_capacity: ''
    },
    selected: null
  }, 
  action) => {
  switch (action.type) {
    case 'ON_FETCH_DEVICES':
      return onFetchDevices(state, action);
    case 'ON_FILTER_DEVICES':
      return onFilterDevices(state, action);
    case 'ON_SORT_DEVICES':
      return onSortDevices(state, action);
    case 'ON_REMOVE_DEVICE':
      return onRemoveDevice(state, action);
    case 'ON_FORM_CHANGE':
      return onFormChange(state, action);
    case 'ON_ADD_DEVICE':
      return onAddDevice(state, action);
    case 'ON_UPDATE_DEVICE':
      return onUpdateDevice(state, action);
    default:
      return state;
  }
};

export default devices;
