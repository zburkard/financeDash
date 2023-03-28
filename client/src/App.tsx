import { Box } from "@mui/material"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { BrowserRouter } from "react-router-dom"
import { themeSettings } from "./theme"


function App() {
  const theme = useMemo(()=> createTheme(themeSettings), [])
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          
        </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
