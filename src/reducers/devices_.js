// Set the fetched devices in the redux store
const onFetchDevices = (state, { list }) => ({
  ...state,
  list
});

// Set the devices filtering option in the redux store
const onFilterDevices = (state, { filterBy }) => ({
  ...state,
  filterBy
});

// Set the devices sorting option in the redux store
const onSortDevices = (state, { sortBy }) => ({
  ...state,
  sortBy
});

// Remove device from the redux store 
const onRemoveDevice = (state, { device }) => ({
  ...state,
  list: state.list.filter(node => node.id !== device.id)
});

// Save device form changes to the redux store
const onFormChange = (state, { form }) => ({
  ...state,
  form
});

// Add device to the redux store and clear the form
const onAddDevice = (state, { device }) => ({
  ...state,
  list: state.list.concat([device]),
  form: {
    system_name: '',
    type: '',
    hdd_capacity: ''
  },
});


// Update a device in the redux store
const onUpdateDevice = (state, { device }) => {
  let list = JSON.parse(JSON.stringify(state.list));

  for (var i = 0; i < list.length; i++) {
    if (list[i].id === device.id) {
      list[i] = device;

      return {
        ...state,
        list: list
      } 
    }
  }
}

const initialState = () => ({
  filterBy: 0,
  sortBy: 0,
  list: [],
  form: {
    system_name: '',
    type: '',
    hdd_capacity: ''
  },
  selected: null
})

const devices = (
  state = initialState(), 
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
