import styles from "./login.module.css"
import API from "../../util/API"

export default class Form extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    API.login(this.state.username, this.state.password)
      .then(() => window.location.replace("/dashboard"))
      .catch((err) => {
        window.location.reload()
      })
  }

  handleNameChange = (e) => {
    this.setState({ username: e.target.value });
  }
  
  handlePassChange = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className={styles.formDiv}>
        <div className={styles.heading}>
          <h1>Employee Login</h1>
          <hr className={styles.formHr}/>
        </div>
        <form className={styles.loginForm} onSubmit={(e) => this.handleFormSubmit(e)}>
          <label className={styles.formLabel}>Username:</label>
          <input className={styles.formInput} onChange={(e) => this.handleNameChange(e)} type="username" placeholder='Username'/>
          <label className={styles.formLabel}>Password:</label>
          <input className={styles.formInput} onChange={(e) => this.handlePassChange(e)} type="password" placeholder='Password'/>
          <button className={styles.formSubmit} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
