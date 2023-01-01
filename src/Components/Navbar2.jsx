import Style from './Navbar2.module.css'
const Navbar2 = () => {
  return (
    <div>
         <nav className={Style.nav}>
        <input type="checkbox"  className={Style.check} />
        <label for="check" className={Style.checkbtn}>
            <li className="fas fa-bars"></li>
        </label>
        <label className={Style.logo} >logo</label>
        <ul>
            <li><a className={Style.active}  href="#">Home</a></li>
            <li><a  href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar2