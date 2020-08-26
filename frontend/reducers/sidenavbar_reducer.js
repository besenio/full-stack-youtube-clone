import { ISOPEN, ISCLOSED } from '../actions/sidenavbar_actions'

const sidenavbarReducer = (oldState = { is_open: false }, action) => {
    Object.freeze(oldState);
  
    switch(action.type) {
      case ISOPEN:
        return { is_open: action.is_open }
    case ISCLOSED:
        return { is_close: action.is_close }
      default:
        return oldState;
    }
};
  
export default sidenavbarReducer;
