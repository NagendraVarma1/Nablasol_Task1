import { Button, Col, Form, Row } from "react-bootstrap";
import Card from "./Card";
import classes from './SecondPage.module.css'

const SecondPage = ({ onNext, onBack }) => {
  return (
    <Card>
      <h3 style={{ textAlign: "center" }}>Project Type</h3>
      <p style={{ textAlign: "center" }}>
        Don't panic - You can also Customize this type in settings
      </p>
      <div style={{ width: "80%", marginLeft: "10%"}}>
        <Button variant="outline-primary" className={classes.btn}>Fixed Fee</Button>
        <Button variant="outline-primary" className={classes.btn}>Time & Material</Button>
        <Button variant="outline-primary" className={classes.btn}>Non-Billable</Button>
      </div>
      <Form style={{ width: "80%", marginLeft: "10%", marginTop:'10px'}}>
        <Form.Group as={Row}>
            <Form.Label style={{fontWeight: 'bold'}}>Hourly</Form.Label>
            <p>We need hourly rates to track your Project's billable amount</p>
            <Col lg='6'>
                <Form.Select>
                    <option>Project Hourly Rate</option>
                </Form.Select>
            </Col>
            <Col lg='4'>
                <Form.Control type="number" placeholder="In Rs."/>
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Form.Label style={{fontWeight: 'bold'}}>Budget</Form.Label>
            <p>We need hourly rates to track your Project's billable amount</p>
            <Col lg='6'>
                <Form.Select>
                    <option>Hours per Person</option>
                </Form.Select>
            </Col>
            <Col lg='4'>
                <Form.Control type="number" placeholder="In Rs."/>
            </Col>
        </Form.Group>
            <Form.Check className="mt-4" label="Budget resets every month"/>
            <Form.Check className="mt-4 mb-3" label="Send Email alerts if project exceeds 80% of budget"/>
      </Form>





      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outline-secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
      <p style={{ textAlign: "center", fontSize: "small" }}>page 2</p>
    </Card>
  );
};

export default SecondPage;
