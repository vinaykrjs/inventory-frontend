import React from "react";
import Header from "../../Components/Header/Header";
import { Container, Row, Button, Table, Form } from "react-bootstrap";

const CreateMaterial = (props) => {
  
    const addItemHandler = (i) => {
        console.log('in addItemHandler');
    }
    return (
    <>
      <Header />
      <h3>I am in CreateMaterial</h3>
      <Container>
        <Row xs="auto">
          <Form>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Material Name </th>
                  <th>Quantity(KG) </th>
                  <th>Unit Price</th>
                  <th colSpan="2">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" />
                    </Form.Group>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => addItemHandler()}
                    >
                      Add Item
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default CreateMaterial;
