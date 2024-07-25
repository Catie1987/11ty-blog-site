import { createContext } from 'react'

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    

    return (
        <AuthContext.Provider value="hello">
            { children }
        </AuthContext.Provider>
    )
}
eleventyConfig.setBrowserSyncConfig({
    files: './src/style.css'
});