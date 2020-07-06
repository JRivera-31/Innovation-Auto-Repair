import headerStyles from "./header.module.css"
function Header() {
    return (
      <div>
        
        <div className={headerStyles.header}>
        <div className={headerStyles.innerHeader}>
          <div className={headerStyles.logoContainer}>
            <h1>Innovation Auto Hail Repair</h1>
          </div>
          <ul className={headerStyles.navigation}>
            <a><li>About</li></a>
            <a><li>Contact</li></a>
            <a><li>Book With Us</li></a>
          </ul>
        </div>
      </div>


      <nav className={headerStyles.sidebar}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink}
              >About</a
            >
          </li>
          <li className={headerStyles.navItem}>
            <a
              className={headerStyles.navLink}
              >Contact</a
            >
          </li>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink}
              >Book With Us</a
            >
          </li>
        </ul>
      </nav>
      </div>
    );
  }
  
  export default Header;
  