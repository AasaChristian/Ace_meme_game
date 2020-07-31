export const UPDATE_THREAD = 'UPDATE_THREAD'


export const updateThread = payload => {
    return{
        type: 'UPDATE_THREAD',
        payload: payload
    };

};