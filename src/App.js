import "./styles/App.css"
import Menubar from "./components/Menubar";
import Sidebar from "./components/Sidebar";
import FileExplorer from "./components/FileExplorer";
import Tabbar from "./components/Tabbar";
import Textarea from "./components/Textarea"
import Footer from "./components/Footer"
import ThemeProvider from "./ThemeProvider";
import { useState } from "react";


function App() {

  const [themeColor, setThemeColor]= useState("blue")
  
  return (
    <div className="App">
      <ThemeProvider theme={themeColor}>
        <Menubar changeTheme={setThemeColor}/>
        <Sidebar/>
        <FileExplorer/>
        <Tabbar/>
        <Textarea/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
