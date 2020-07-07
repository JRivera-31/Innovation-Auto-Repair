import headerStyles from "./header.module.css"
function Header() {
  
    const sidebar = document.querySelector(".sidebar");
    const line1 = document.querySelector(".line-1"); 
    const line2 = document.querySelector(".line-2");
    const line3 = document.querySelector(".line-3"); 
  const click = () => {
    sidebar.classList.toggle('change');
    line1.classList.toggle('rotate1');
    line2.classList.toggle('rotate2');
    line3.classList.toggle('rotate3');
      }

    return (
      <div>
        <div className={headerStyles.header}>
        <div className={headerStyles.innerHeader}>
          <div className={headerStyles.logoContainer}>
            <h1>Innovation Auto Hail Repair</h1>
          </div>
          <div className={headerStyles.navHolder}>
                <div onClick={click} className={headerStyles.hamburgerMenu}>
                  <div className={`${headerStyles.line} ${headerStyles.line-1}`}></div>
                  <div className={`${headerStyles.line} ${headerStyles.line-2}`}></div>
                  <div className={`${headerStyles.line} ${headerStyles.line-3}`}></div>
                </div>
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
  