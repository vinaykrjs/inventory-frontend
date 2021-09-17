import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Container, Row, Button, Table, Form  } from "react-bootstrap";
import singleItem from "../../data/singleItem";
const ItemDetailed = (props) => {
  let [tamplateItem, setTamplateItem] = useState(singleItem);
  console.log(props);
  const updateHandler = () => {};
//   setTamplateItem = () => {};
  return (
    <>
      <Container>
        <Header />
        <h3>I am in deteails page {props.match.params.id} </h3>

        <Row xs="auto">
          <Form>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Batch No</th>
                  <th>Store Id</th>
                  <th>Store Name</th>
                  <th>Store location </th>
                  <th>
                    Quantity in Stock ({tamplateItem.batches[0].quantityType}){" "}
                  </th>
                  <th>Unit Price</th>
                  <th>Inventory Value</th>
                  <th>Buy date</th>
                  <th>Expiry Date</th>
                  <th>Supplied Company</th>
                  <th colSpan="2">Operations</th>
                </tr>
              </thead>
              <tbody>
                {tamplateItem.batches &&
                  tamplateItem.batches.length > 0 &&
                  tamplateItem.batches.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            defaultValue={item.batchNo}
                            disabled
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" defaultValue={item.storeId} />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" defaultValue={item.storeName} />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            defaultValue={item.storelocation}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" defaultValue={item.quantity} />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" defaultValue={item.unitPrice} />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            defaultValue={item.unitPrice * item.quantity}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" defaultValue={item.buydate} />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" defaultValue={item.expiryDate} />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            defaultValue={item.suppliedCompany}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => updateHandler(item)}
                        >
                          Update
                        </Button>
                      </td>
                      <td>
                        <Button variant="danger">Delete</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Form>
          {/* <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Substance Name</Form.Label>
                <Form.Control
                  type="text"
                  value={templateData.substanceName}
                  placeholder="Substance Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Hazardous Properties</Form.Label>
                <Form.Control
                  type="text"
                  value={templateData.hazardousProperties}
                  placeholder="Hazardous Properties"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Quantity left(Approximate)</Form.Label>
                <Form.Control
                  type="text"
                  value={templateData.quantityLeft}
                  placeholder="Quantity left(Approximate"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>UsedFor/By</Form.Label>
                <Form.Control
                  type="text"
                  value={templateData.usedFor}
                  placeholder="UsedFor/By"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Where Stored </Form.Label>
                <Form.Control
                  type="text"
                  value={templateData.whereStored}
                  placeholder="Where Stored "
                />
              </Form.Group>
            </Form> */}
        </Row>
      </Container>
    </>
  );
};

export default ItemDetailed;
