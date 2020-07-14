import Table from "react-bootstrap/Table";
import API from '../../util/API';
import { useEffect, useState } from 'react';

const DashboardTable = () => {
    const [appointmentData, setAppData] = useState([]);

    API.getAppointmentData().then(res => {
        setAppData(res.data);
    })

    return (
        <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {appointmentData.map((item, i) => {
                return (
                    <tr>
                        <th>{i}</th>
                        <th>{item.date.split(' ').join('/')}  {item.time.split(' ').join(':')}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>{item.phonenumber}</th>
                        <th>{item.description}</th>
                    </tr>
                )
            })}
        </tbody>
      </Table>
    </div>
    )
}

export default DashboardTable;