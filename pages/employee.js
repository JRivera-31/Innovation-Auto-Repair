export default function Employee() {
    return (
    <div>
      <div className="container w-50">
          <form className="p-5">
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
        </div>
    </div>
    )
}