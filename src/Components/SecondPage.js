import { Button, Col, Form, Row } from "react-bootstrap";
import Card from "./Card";
import classes from "./SecondPage.module.css";
import { useState } from "react";

const SecondPage = ({ onNext, onBack }) => {
  const [projectType, setprojectType] = useState("");
  const [hourlyRate, setHourlyRate] = useState('')

  const secondPageData = {
    projectType: projectType,
    hourlyRate: hourlyRate,
  }

  const nextPageHandler = () => {
    //It Stores the second page data in the local storage
    localStorage.setItem('Second Page Data', JSON.stringify(secondPageData))
    onNext()
  }
  return (
    <Card>
      <h3 style={{ textAlign: "center" }}>Project Type</h3>
      <p style={{ textAlign: "center" }}>
        Don't panic - You can also Customize this type in settings
      </p>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <Button
          variant="outline-primary"
          className={classes.btn}
          onClick={() => setprojectType("Time & Material")}
        >
          Time & Material
        </Button>
        <Button
          variant="outline-primary"
          className={classes.btn}
          onClick={() => setprojectType("Fixed Fee")}
        >
          Fixed Fee
        </Button>
        <Button
          variant="outline-primary"
          className={classes.btn}
          onClick={() => setprojectType("Non-Billable")}
        >
          Non-Billable
        </Button>
      </div>
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10px" }}>
        <Form.Group as={Row}>
          <Form.Label style={{ fontWeight: "bold" }}>Hourly</Form.Label>
          <p>We need hourly rates to track your Project's billable amount</p>
          <Col lg="6">
            <Form.Select>
              <option>Project Hourly Rate</option>
            </Form.Select>
          </Col>
          <Col lg="4">
            <Form.Control type="number" placeholder="In Rs." onChange={(e) => setHourlyRate(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label style={{ fontWeight: "bold" }}>Budget</Form.Label>
          <p>We need hourly rates to track your Project's billable amount</p>
          <Col lg="6">
            <Form.Select>
              <option>Hours per Person</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Check className="mt-4" label="Budget resets every month" />
        <Form.Check
          className="mt-4 mb-3"
          label="Send Email alerts if project exceeds 80% of budget"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outline-secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={nextPageHandler}>Next</Button>
      </div>
      </Form>

      
      <p style={{ textAlign: "center", fontSize: "small" }}>page 2</p>
    </Card>
  );
};

export default SecondPage;
