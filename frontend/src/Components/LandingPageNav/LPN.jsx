import React from 'react'
import styles from "./LandingPageNav.module.css"
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Action'
const LandingPageNav = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <div className={styles.nav_div}>
       <div className={styles.menu_div}>
          <div className={styles.menu_div1}>
            <Link className={styles.logo } to='/'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAADwklEQVR42u2bS28TZxSGx7E96jYSYtWum4IEfwBlA4sSVkjsCn8CVSI3kqK2KKWXtOEiUYGQAoRFITTloqqoarlI0KwwSqANUgOtKkSDDY49Y2fs+V7O+SwgagkwZ8a3T3OkRxnN5XzveWyPsxhbVlxxBS4MWzb2W104YG0ktuKgta0p8Nqc4ZD1Lmeq/+CHrE5acJQoEGgxCjobZazP8AesbuJBJGGProaaWAt1ekMN2uZ9EYngjN1RD99DeNJQ6sgqOBd24O9rh3HrxiXMz88jl8uhWCzCdV39N5vN4v6daX0On8vXhJDAWXuiGX7MWkPNHNHgx97Gw1/24vfbMyiXy+B69HgRRbe2Xb2V0XDxPj7GpZRCySlg4cqI7iGU4HD2cMPDStDN7rokgHN+O+Zmb8L3fVSJStXXw40cnsTR737W2+7ufg0X7+NjXHwuX6MllRfhXtwhk8DZaYYwr/4WaoKgPP5pJ/L5PJ7VianLGBu/oLfv/fMvxs/++j8BvI+PcfG5J3+4guW1dG0Qkiw8g1zAfmsy6IJLZzahUKi9lS9Pz2Ihl4dXqSJz5x7+W8sFLC8+l6/ha7lHrRT8qfclEs6EEZAPuuDD2UvPB5mZu4/pzF2sVCsJeFa/3ZzDzN2/Xux4lJEIyIf5/Adb7Ng78DwPb1qvE/DSojUC55LcB+g/q46gC6mJdfqmV1cBp9YHF0CzNEQAvu2E8qv1E6B8vUbrCuB3wZ/n6idg/rzsm0AqQI0lEJjxLsArRi+Aeqrj70GSqbECmO/p66riRCeAeqmpzZDmabwA5iTdrBYyrxawZ0jzyqIeamI9wmRpjgBNB9SPH6woQuWymhUHp2t1j5A5mihgGce7oK5+CPxxCsjeppd/AfArNXib99ExPkefG+HarSGgicQCxAK+oQYGEAuIBcQChAK+pgYGIBbgjyZgArEAsYCvOmACYgFVutgE5AK+pAYGIBfwBTUwgFiAVEDl8w6YgFzAPmpgACEEJGECYgHeZ0mYgFzACDUwgFiAVMDS3iRMQC7g0xRMQCyg/EkKJiATACtR/pgaGID4OaHSnlSeQJsje0KEqzycmix9lEY7wzPIBQwlt5SGqVEbwzPIH5KyrIQ7lL7u7k6jLaHsPEOohyWX+uw17mDaIdBmOJw9ksdlncFkjzOQ9gi0CR5njvSB6dJAqtsZsB84/TZaGsrIWevyyPyTXquzuCs96vTahWKvjVZCZ6JsnLEhvxhZ7LO7iv1vbXR77a2FPntbM+C1OQNnacgvRuIysJ4CdtAjHhlPxXYAAAAASUVORK5CYII=' alt=''/></Link>
            <Link className={styles.link} to='/'>Home</Link>
            <Link className={styles.link} to='/'>Goals</Link>
            <Link className={styles.link} to='/'>Community</Link>
            <Link className={styles.link} to='/'>Insights</Link>
            <Link className={styles.link} to='/'>Forums</Link>
            <Link className={styles.link} to='/'>App & Devices</Link>
            <Link className={styles.link} to='/'>Messages</Link>
            <Link className={styles.link} to='/'><i class="fa-solid fa-gear"></i></Link>
          </div>
          <div className={styles.menu_div2}>
            <Link className={styles.link} to='/'>UserName</Link>
            <Link className={styles.link} to='/'>Upgrade</Link>
            <button className={styles.link} onClick={()=>{dispatch(logout()); navigate("/");}}>Sign out</button>
            <Link className={styles.link} to='/'><i class="fa-solid fa-circle-user"></i></Link>
          </div>
       </div>
    </div>
  )
}

export default LandingPageNav