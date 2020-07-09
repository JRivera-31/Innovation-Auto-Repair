import Paper from "@material-ui/core/Paper"
import utilStyles from "../styles/utils.module.css"

export default function Employee() {
    return (
    <div className={utilStyles.background}>
        <div className="container w-50">
        <Paper>
          <form className={utilStyles.form}>
            <h1>Employee Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </Paper> 
        </div> 
    </div>
    )
}