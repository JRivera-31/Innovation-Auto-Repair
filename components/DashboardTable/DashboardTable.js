import Table from "react-bootstrap/Table";
import style from './dashboard.module.css'
import API from '../../util/API';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const DashboardTable = () => {
    const [appointmentData, setAppData] = useState([]);

    API.getAppointmentData().then(res => {
        setAppData(res.data);
    })

    const appointmentDelete = (id) => {
        API.deleteAppointment(id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className={style.dashboardContainer}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {appointmentData.map((item, i) => {
                return (
                    <tr>
                        <th>{i + 1}</th>
                        <th>{item.date.split(' ').join('/')}  {item.time.split(' ').join(':')}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>{item.phonenumber}</th>
                        <th>{item.description}</th>
                        <th><DeleteIcon onClick={() => appointmentDelete(item._id)}/></th>
                    </tr>
                )
            })}
        </tbody>
      </Table>
    </div>
    )
}

export default DashboardTable;