export default function Employee() {
    return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Innovation Auto Hail Repair works to restore your vehicle to its pre-storm condition. We work to bring back the value to your car. With experienced technicians working on your vehicle we can guarantee your vehicle is in good hands. Don’t have insurance? No problem! We give special discounts for those paying out of pocket. Have a non-hail related dent? We fix those too! Contact us for any questions or concerns! Keywords: car, repair, hail, damage, crash, accident, collision, free, discount" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <title>Innovation Auto</title>
        
      </head>
      <body>
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
      </body>
    </html>
    )
}