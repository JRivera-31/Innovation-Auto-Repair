import Table from "react-bootstrap/Table";
import style from './dashboard.module.css'
import API from '../../util/API';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const BlockoutTable = () => {
    const [blockoutData, setBlockoutData] = useState([]);

    API.getBlockoutData().then(res => {
        setBlockoutData(res.data);
    })

    const blockoutDelete = (id) => {
        console.log(id);
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
    </div>
    )
}

export default BlockoutTable;