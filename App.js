const redux = require('redux');
console.log('Welcome');

//Define action - action is a function which returns an obj
function byeMobile() {
    console.log('buyMobile called')
    return{
        type: 'BUY_MOBILE',
    };
}

//Initial state 
let initialState = {
    quantity: 100
}

//define reducer
const reducer = (state = initialState, action) => {
    console.log('reducer');
    if(state.quantity>0){
    switch(action.type){
        case 'BUY_MOBILE':
            return{
                ...this.state,
                quantity:state.quantity-1
            }
        default:
            return state;
    }
    } else {
        return state;
    }
} 
//Define redux store
const createStore = redux.createStore
const store = createStore(reducer);
store.subscribe(()=>{
    console.log(`Updated quantity : ${JSON.stringify(store.getState())}`)
})

//then app will trigger the action that will dispatch the state change
store.dispatch(byeMobile());
store.dispatch(byeMobile());