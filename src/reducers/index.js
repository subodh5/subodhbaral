export function activeTabReducer(state={active:"Home.html"},action){
    if (action.type==="SELECT"){
        return {...state, active:action.payload}
    }
    else{
        return state
    }
}

export function tablistReducer(state=["Home.html","About.css","Connect.js"],action){
    if(action.type==="ADD"){
        return state.includes(action.payload)? state : [...state,action.payload]
    }
    else if (action.type==="REMOVE"){
        const newState= state.filter((item)=>action.payload!==item)
        return newState
    }
    return state
}