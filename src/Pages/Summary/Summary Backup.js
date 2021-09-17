import React from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header/Header";
import "./Summary.css";

import totalItems from "../../data/totalItems";

const Summary = (props) => {
  console.log(props);
  const updateHandler = (item) => {
    props.history.push(`/item/${item.substanceId}`);
    console.log("i m in updateHandler:: ", item.substanceId);
  };

  const addMaterialHandler = () => {
    props.history.push(`/create-item`);
    console.log("i m in addMaterialHandler:: ");
  }
  return (
    <>
      <Header />
      <div className="Header">I m in Summary page</div>
      <Button variant="success" onClick={() => addMaterialHandler()}>
        Add material
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Substance Id</th>
            <th>Substance Name</th>
            <th>Hazardous Properties</th>
            <th>Quantity left(Approximate) </th>
            <th>UsedFor/By </th>
            <th>Where Stored </th>
            <th>Update </th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody>
          {totalItems.length > 0 &&
            totalItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td>{item.substanceId}</td>
                <td>{item.substanceName}</td>
                <td>{item.hazardousProperties}</td>
                <td>{item.quantityLeft}</td>
                <td>{item.usedFor}</td>
                <td>{item.whereStored}</td>
                <td>
                  <Button variant="warning" onClick={() => updateHandler(item)}>
                    Update
                  </Button>
                </td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          {/* <tr>
            <td>2</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>dfasd</td>
            <td>dfasd</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button variant="warning">Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button variant="warning">Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button variant="warning">Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button variant="warning">Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button variant="warning">Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button variant="warning">Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr> */}
        </tbody>
      </Table>
    </>
  );
};

export default Summary;
