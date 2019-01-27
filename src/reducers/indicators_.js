// Show or hide the loading screen
const onLoadingChange = (state, { loading }) => ({
  ...state,
  loading
})

// Show or hide the activity indicator
const onNetworkActivity = (state, { networkActivity }) => ({
  ...state,
  networkActivity
})

const initialState = () => ({
  loading: true,
  networkActivity: false
})

const indicators = (
  state = initialState(),
  action) => {
  switch (action.type) {
    case 'ON_LOADING_CHANGE':
      return onLoadingChange(state, action);
    case 'ON_NETWORK_ACTIVITY_CHANGE':
      return onNetworkActivity(state, action);
    default:
      return state;
  }
};

export default indicators;