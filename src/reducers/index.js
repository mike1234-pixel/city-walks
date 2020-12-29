// set initialState of redux store here
const initialState = {
    navbarIsCollapsed: false,
    search: ''
  };
  
  // reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_NAVBAR':
        return {
          navbarIsCollapsed: !state.navbarIsCollapsed,
        };
      default:
        return state;
    }
  }