import { Button, Form } from "react-bootstrap";
import classes from './PageThree.module.css'
import Card from "./Card";
import { useState } from "react";

const PageThree = ({ onNext, onBack }) => {
    const[values, setValues] = useState([]);

    const changeHandler = (event) => {
        const {value, checked} = event.target;

        if(checked){
            setValues((prevState) => {
                return [...prevState, value]
            })
        }
        else{
            setValues((prevState) => {
                return [...prevState.filter((val) => val !== value)]
            })
        }
    }

    const nextPageHandler = () => {
        //It stores the third page data in the local storage
        localStorage.setItem('Third Page Data', JSON.stringify(values));
        onNext();
    }

  return (
    <Card>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <h3 style={{textAlign: "center"}}>Add a Task</h3>
        <Form>
            <Form.Check className={classes.formcontrol} label='Marketing Website Design' value='Marketing Website Design' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Branding Design' value='Branding Design' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='UI/UX Fundamentals' value='UI/UX Fundamental' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Wireframe and Prototyping' value='Wireframe and Prototyping' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Style Guide' value='Style Guide' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='UX Research and Flows' value='UX Research and Flows' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Layout Design' value='Layout Design' onChange={changeHandler}/>
        </Form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          marginLeft: "10%",
          marginTop: '20px'
        }}
      >
        <Button variant="outline-secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={nextPageHandler}>Next</Button>
      </div>
    </Card>
  );
};

export default PageThree;
