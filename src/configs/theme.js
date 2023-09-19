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
            
        }
    },
    typography: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
        fontFamily: [
            'Source Code Pro', 'monospace'
        ].join(','),
    },


})

export default theme;