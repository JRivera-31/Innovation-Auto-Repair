import Paper from "@material-ui/core/Paper"
import utilStyles from "../styles/utils.module.css"
import Form from "../components/EmployeeLoginForm/login"

export default function Employee() {
    return (
    <div className={utilStyles.background}>
        <div className="container w-50">
        <Paper>
          <Form />
        </Paper> 
        </div> 
    </div>
    )
}