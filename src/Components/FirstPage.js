import { Button, Col, Form, FormSelect, Row } from "react-bootstrap";
import Card from "./Card";
import { useState } from "react";

const FirstPage = ({onNext}) => {
    const [projectName, setProjectName] = useState('')
    const [client, setClient] = useState('')
    const [newClient, setNewClient] = useState('')
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('')
    const [text, setText] = useState('')

    const firstPageData = {
        name: projectName,
        client: client,
        newClient: newClient,
        startDate: startDate,
        endDate: endDate,
        text: text
    }

    const nextPageHandler = () => {
        //It Stores the first page data in the local storage
        localStorage.setItem('First Page Data', JSON.stringify(firstPageData))
        onNext()
    }


   return (
    <Card>
      <h3 style={{ textAlign: "center" }}>Create a Project</h3>
      <Form style={{ width: "80%", marginLeft: "10%", marginBottom: '15px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Project Name</Form.Label>
          <Form.Control type="text" name="projectName" onChange={(e) => setProjectName(e.target.value)} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label>Client</Form.Label>
          <Col lg="8" sm="12">
            <FormSelect onChange={(e) => setClient(e.target.value)}>
              <option>Select a Client</option>
              <option value="Client 1">Client 1</option>
              <option value="Client 2">Client 2</option>
              <option value="Client 3">Client 3</option>
            </FormSelect>
          </Col>
          <Col lg="4" sm="12">
            <Form.Control type="text" placeholder="Add New Client" onChange={(e) => setNewClient(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label>Dates</Form.Label>
          <Col lg="6">
            <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} />
          </Col>
          <Col lg="6">
            <Form.Control type="date" onChange={(e) => setEndDate(e.target.value)}/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" onChange={(e) => setText(e.target.value)}/>
        </Form.Group>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="outline-secondary">Back</Button>
            <Button onClick={nextPageHandler}>Next</Button>
        </div>
      </Form>
      <p style={{textAlign: 'center', fontSize: 'small'}}>page 1</p>
    </Card>
  );
};

export default FirstPage;
