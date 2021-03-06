import React from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header/Header";
import "./Summary.css";

import totalItems from "../../data/totalItems";

const Summary = (props) => {
  console.log(props);
  
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
            <th>Material Id</th>
            <th>Material Name</th>
            <th>Quantity in Stock (KG) </th>
            <th>Unit Price</th>
            <th>Inventory Value</th>
            <th>Added on</th>
          </tr>
        </thead>
        <tbody>
          {totalItems.length > 0 &&
            totalItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td>{item.materialId}</td>
                <td>{item.materialName}</td>
                <td>{item.quantityLeft}</td>
                <td>{item.unitPrice}</td>
                <td>{(item.quantityLeft * item.unitPrice).toFixed(2)}</td>
                
                <td>{item.createdAt}</td>
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
