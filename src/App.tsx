import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {WeeklyReportsCard} from "./components/WeeklyReports.Card";
import StorageIcon from '@mui/icons-material/Storage';
import {Box} from "@mui/material";
import {WeeklyReportsLayout} from "./components/WeeklyReports.Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" sx={{backgroundColor: "hsl(250,10%,90%)"}}>
      <WeeklyReportsLayout/>
    </Box>
  )
}

export default App
