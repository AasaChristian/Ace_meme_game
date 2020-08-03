import {UPDATE_THREAD} from '../actions'

const initialState={
    messageCount: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_THREAD:
            return {...state,
                messageCount: (state.messageCount +=1)
            }
        default:
            return state;
    };
}
export default rootReducer;