import styles from "./login.module.css";
import Router from "next/router";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../../lib/hooks"

export default function Form() {
  const [user, { mutate }] = useCurrentUser();
  const [errMsg, setErrMsg] = useState("")
  
  useEffect(() => {
    if (user) Router.push("/dashboard")
  }, [user])

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }
    
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    // Extract JWT
    const { jwt_token } = await response.json()

    if (res.status === 200) {
      const userObj = await res.json()
      mutate(userObj)
    } else {
      setErrMsg("Incorrect username or password")
    }
    
  };

  // const handleNameChange = (e) => {
  //   setState({ username: e.target.value });
  // };

  // const handlePassChange = (e) => {
  //   setState({ password: e.target.value });
  // };
  
  return (
    <div className={styles.formDiv}>
      <div className={styles.heading}>
        <h1>Employee Login</h1>
        <hr className={styles.formHr} />
        {errMsg ? <p className="error">{errMsg}</p> : null}
      </div>
      <form
        className={styles.loginForm}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <label className={styles.formLabel}>Username:</label>
        <input
          className={styles.formInput}
          // onChange={(e) => handleNameChange(e)}
          name="username"
          placeholder="Username"
        />
        <label className={styles.formLabel}>Password:</label>
        <input
          className={styles.formInput}
          // onChange={(e) => handlePassChange(e)}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className={styles.formSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
