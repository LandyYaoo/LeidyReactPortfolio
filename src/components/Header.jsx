import styleHeader from '../css/Header.module.css'
import { FaBars } from "react-icons/fa";
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className={styleHeader.header} >
      <nav className={styleHeader.nav} >
        <input type="checkbox" name="check" className={styleHeader.check} id="check" />
        <label htmlFor="check" className={styleHeader.checkbtn}><FaBars /></label>
        <ul>
          <li>
            <a className={styleHeader.active} href='#hero'>Home</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>  
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
          <li>
              <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;