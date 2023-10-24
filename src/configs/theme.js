import { createTheme } from "@mui/material";    

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFE9D6',
        },
        secondary: {
            main: '#A7D0CD'
        },
        danger: {
            main: '#FF6E6E'
        },
        success: {
            main: '#A8D1A2'
        },
        dark: {
            main: "#000000"
        }
    },
    typography: {
        fontSize: 13,
        fontFamily: [
            'Source Code Pro', 'monospace'
        ].join(','),
    },
})

export default theme;