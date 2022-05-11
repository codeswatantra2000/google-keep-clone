import React , {useState} from 'react'
import './Index.css'
import Container from "@mui/material/Container";

const Index = (props) => {

  const[note,setNote] = useState({
    title: "",
    content: "",
  });


  const inputEvent = (event) => {

    // const value = event.target.value;
    // const name = event.target.name;

    const {name,value} = event.target;

    setNote((prevData) => {
      return {...prevData,[name]:value};
    });
    console.log(note);
  };

  const addEvent = () => {
      props.passNote(note);
      setNote({
        title:"",
        content:""
      });
  };
  
  return (
    <div className="body-main">
      <Container maxWidth="sm" className="container">
        <form>
          <div className="input-mui">
            <input required
              placeholder="Title..."
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              autoComplete="off"
            />
          </div>
          <hr />
          <div className="textfield-mui">
            <textarea
            required
              placeholder="Enter text here.."
              rows={4}
              value={note.content}
              name="content"
              onChange={inputEvent}
            />
          </div>
          <div />
          <div className="addicon-btn">
            <button type='button' onClick={addEvent}>+</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Index