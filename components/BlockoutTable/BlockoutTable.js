import Table from "react-bootstrap/Table";
import style from "./dashboard.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import DashDatePicker from "../DashboardDatePicker/DashboardDatePicker";
import { useState, useEffect } from "react";

const BlockoutTable = (props) => {
  const [blockoutData, setBlockoutData] = useState([]);

  useEffect(() => {
    setBlockoutData(props.blockouts.data);
  }, []);

  const blockoutDelete = async (id) => {
    try {
      const res = await fetch(`/api/blockouts/${id}`, {
        method: "DELETE"
      })
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  };

  const handleBlockoutAdd = () => {
    setBlockoutData(props.blockouts.data);
  };

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
                <th>{item.date.split(" ").join("/")}</th>
                <th>
                  <DeleteIcon onClick={() => blockoutDelete(item._id)} />
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DashDatePicker setParentState={() => handleBlockoutAdd()} />
    </div>
  );
};

export default BlockoutTable;
