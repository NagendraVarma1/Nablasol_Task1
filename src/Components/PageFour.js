import { Button, Form } from "react-bootstrap";
import classes from './PageThree.module.css'
import Card from "./Card"
import { useState } from "react";

const PageFour = ({onNext, onBack}) => {
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
        //It stores the fourth page data in the local storage
        localStorage.setItem('Fourth Page Data', JSON.stringify(values));
        onNext();
    }

    return(
        <Card>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <h3 style={{textAlign: "center"}}>Team</h3>
        <Form>
            <Form.Check className={classes.formcontrol} label='Emma Castro' value='Emma Castro' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Rodney Meyer' value='Rodney Meyer' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Virgle Kim' value='Virgle Kim' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Fanny Russell' value='Fanny Russell' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Ellen Simmons' value='Ellen Simmons' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Steve Mathew' value='Steve Mathew' onChange={changeHandler}/>
            <Form.Check className={classes.formcontrol} label='Robert Pattinson' value='Robert Pattinson' onChange={changeHandler}/>
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
        <Button onClick={nextPageHandler}>Create Project</Button>
      </div>
    </Card>
    )
}

export default PageFour;