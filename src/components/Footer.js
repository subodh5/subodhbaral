import '../styles/footer.css'
import { useTheme } from "../ThemeProvider";
export default function Footer(){
    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--footer-bg","#007ACC");
        themeStyle.setProperty("--footer-color","#BDF7FC");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--footer-bg","#00212B");
        themeStyle.setProperty("--footer-color","#8A999A");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--footer-bg","#007ACC");
        themeStyle.setProperty("--footer-color","#BDF7FC");
    }
    return(
        <footer className="footer">
            &copy; 2022 Subodh Baral
        </footer>
    )
}