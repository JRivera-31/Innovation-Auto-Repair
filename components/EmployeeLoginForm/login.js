import styles from "./login.module.css"

export default function Form() {
  return (
    <div className={styles.formDiv}>
      <div className={styles.heading}>
        <h1>Employee Login</h1>
        <hr className={styles.formHr}/>
      </div>
      <form className={styles.loginForm}>
        <label className={styles.formLabel}>Username:</label>
        <input className={styles.formInput} type="username" placeholder='Username'/>
        <label className={styles.formLabel}>Password:</label>
        <input className={styles.formInput} type="password" placeholder='Password'/>
        <button className={styles.formSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
};