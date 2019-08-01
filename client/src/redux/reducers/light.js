const lightDefaultState = {
    isOn: false
}


const switchLightReducer = (state = lightDefaultState, action) => {
    console.log('switchLed REDUCER', action.payload);
    switch (action.type) {

        case 'SWITCH_LIGHT':
            return {
                ...state,
                isOn: !action.payload.isOn
            }

        default:
            return { ...state }
    }
}

export default switchLightReducer;