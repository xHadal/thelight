import store from '@/redux/store/configStore';

const switchLed = ( isOn ) => {
    console.log('switchLed ACTION', isOn);
   
    return store.dispatch({
        type: 'SWITCH_LIGHT',
        payload: {
            isOn
        }
        
    })
}

export default switchLed;