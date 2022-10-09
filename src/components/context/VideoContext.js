import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState = {videos:[]};

export const VideoContext = createContext(initialState);

export const VideoProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    

    return (
        <VideoContext.Provider value={{
            videos: state.videos
        }}>
            {props.children}
        </VideoContext.Provider>
    )
}

