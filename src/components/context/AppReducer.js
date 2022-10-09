export default (state, action) =>{
    switch(action.type){
        case 'SEARCH_VIDEO':
            return {
                ...state,
                videos: [...state.videos, action.payload]
            }
        default:
            return state
    }
}