import { createContext } from 'react'

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = () => {
    

    return (
        <AuthContext.Provider></AuthContext.Provider>
    )
}
eleventyConfig.setBrowserSyncConfig({
    files: './src/style.css'
});