import Table from 'react-bootstrap/Table';
import style from './dashboard.module.css'
import API from '../../util/API';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react';

const DashboardTable = () => {
    const [appointmentData, setAppData] = useState([]);

    useEffect(() => {
      API.getAppointmentData().then(res => {
          setAppData(res.data);
      })
    }, [])

    const appointmentDelete = (id) => {
        API.deleteAppointment(id)
        .then(() => {
          API.getAppointmentData().then(res => {
            setAppData(res.data);
          })
        })
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
              let nonMilTime;
              if(parseInt(item.time.split(' ')[0]) > 12) {
                nonMilTime = `${parseInt(item.time.split(' ')[0]) - 12}:${item.time.split(' ')[1]} PM`
              } else {
                nonMilTime = `${item.time.split(' ').join(':')} AM`
              }
              return (
                <tr>
                  <th>{i + 1}</th>
                  <th>{item.date.split(' ').join('/')}  {nonMilTime}</th>
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