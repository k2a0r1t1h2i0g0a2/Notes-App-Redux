import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './Notes.css'
import { useDispatch } from "react-redux";
import { addNote } from "../Features/Actions";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const AddNote = () => {
     const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: '',
    content: '',
    datetime: '',
  });
 const navigate = useNavigate();
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNote({
        ...note,
        [name]: value,
      });
    };
  const handleSaveNote = () => {
      
     const newNote = {
       id: uuidv4(),
       ...note,
     };
    
     dispatch(addNote(newNote));

     
     setNote({
       title: "",
       content: "",
       datetime: "",
     });
       navigate("/");
  };
    return (
      <div>
        <Container>
          {" "}
          <Row>
            <Col className="addbar">
              <div className="noteflex">
                <Card className="text-center">
                  <Card.Header> Add Note</Card.Header>
                  
                    <Card.Body>
                      <Card.Title>
                        {" "}
                                        <input
                                            name="title"
                          type="text"
                          onChange={handleInputChange}
                          required
                          placeholder="Title"
                        />
                      </Card.Title>
                      <Card.Text>
                                        <textarea
                                            name="content"
                          onChange={handleInputChange}
                          required
                          placeholder="Take a Note...."
                        />
                      </Card.Text>
                      <Card.Footer className="text-muted">
                                        <input
                                            name="datetime"
                          type="datetime-local"
                          onChange={handleInputChange}
                          required
                        />
                      </Card.Footer>
                      <button
                        className="savebtn"
                        type="submit"
                        onClick={handleSaveNote}
                      >
                        Save Note
                      </button>
                    </Card.Body>{" "}
                  
                </Card>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AddNote;