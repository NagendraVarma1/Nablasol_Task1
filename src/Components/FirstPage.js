import { Button, Col, Form, FormSelect, Row } from "react-bootstrap";
import Card from "./Card";

const FirstPage = ({onNext}) => {
  return (
    <Card>
      <h3 style={{ textAlign: "center" }}>Create a Project</h3>
      <Form style={{ width: "80%", marginLeft: "10%", marginBottom: '15px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Project Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label>Client</Form.Label>
          <Col lg="8" sm="12">
            <FormSelect>
              <option>Select a Client</option>
              <option value="Client 1">Client 1</option>
              <option value="Client 2">Client 2</option>
              <option value="Client 3">Client 3</option>
            </FormSelect>
          </Col>
          <Col lg="4" sm="12">
            <Form.Control type="text" placeholder="Add New Client" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label>Dates</Form.Label>
          <Col lg="6">
            <Form.Control type="date" />
          </Col>
          <Col lg="6">
            <Form.Control type="date" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea"/>
        </Form.Group>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="outline-secondary">Back</Button>
            <Button onClick={onNext}>Next</Button>
        </div>
      </Form>
      <p style={{textAlign: 'center', fontSize: 'small'}}>page 1</p>
    </Card>
  );
};

export default FirstPage;
