import Table from "react-bootstrap/Table";
import style from './dashboard.module.css'
import API from '../../util/API';
import DeleteIcon from '@material-ui/icons/Delete';
import DashDatePicker from '../DashboardDatePicker/DashboardDatePicker'
import { useState, useEffect } from 'react';

const BlockoutTable = () => {
    const [blockoutData, setBlockoutData] = useState([]);

    useEffect(() => {
      API.getBlockoutData().then(res => {
          setBlockoutData(res.data);
      })
    }, [])


    const blockoutDelete = (id) => {
        API.deleteBlockout(id).then(() => {
          API.getBlockoutData().then(res => setBlockoutData(res.data))
        })
        .catch(err => {
          console.log(err);
        })
    }

    const handleBlockoutAdd = () => {
      API.getBlockoutData().then(res => {
        setBlockoutData(res.data);
      })
    }

    return (
        <div className={style.dashboardContainer}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {blockoutData.map((item, i) => {
                return (
                    <tr>
                        <th>{i + 1}</th>
                        <th>{item.date.split(' ').join('/')}</th>
                        <th><DeleteIcon onClick={() => blockoutDelete(item._id)}/></th>
                    </tr>
                )
            })}
        </tbody>
      </Table>
      <DashDatePicker setParentState={() => handleBlockoutAdd()}/>
    </div>
    )
}

export default BlockoutTable;