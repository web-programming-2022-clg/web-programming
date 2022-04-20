import {createContext, useReducer} from "react";
import gitReducer from "./GitReducer";

const GitContext = createContext()

export const GitProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(gitReducer,initialState)


    // Get search results
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // set loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})


    return <GitContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers
    }}>
        {children}
    </GitContext.Provider>
}


export default GitContext
