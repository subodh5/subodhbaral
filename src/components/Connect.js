import "../styles/Connect.css"
import { AiFillTwitterCircle,AiFillGithub } from "react-icons/ai";
import { FaChessPawn } from "react-icons/fa";
import { useTheme } from "../ThemeProvider"
export default function Connect() {

  const currentTheme= useTheme()
  const themeStyle = document.documentElement.style
  if(currentTheme==="white"){
      themeStyle.setProperty("--connect-color","#786190");
  }
  else if (currentTheme==="blue"){
      themeStyle.setProperty("--connect-color","#93A1A1");
  }
  else if (currentTheme==="dark"){
      themeStyle.setProperty("--connect-color","#499CCA");
  }

  return (
    <div className='connectpage'>
        <a href="http://twitter.com/subodh_baral" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle/>Twitter</a>
        <a href="http://github.com/subodh5" target="_blank" rel="noreferrer noopener"><AiFillGithub/> Github</a>
        <a href="http://chess.com/member/subodhbaral" target="_blank" rel="noreferrer noopener"><FaChessPawn/> Chess</a>
    </div>
  )
}