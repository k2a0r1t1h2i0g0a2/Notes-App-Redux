import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./Notes.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../Features/Actions";
const EditNote = () => {
const navigate = useNavigate();
 const { noteId } = useParams(); 
 const dispatch = useDispatch();
 const notes = useSelector((state) => state.notes.notes);
 const note = notes.find((n) => n.id === noteId);
 const [editedNote, setEditedNote] = useState(
   note || { title: "", content: "", datetime: "" }
 );
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedNote({
        ...editedNote,
        [name]: value,
      });
    };

      const handleSaveChanges = () => {
        dispatch(updateNote(editedNote)); 
          navigate("/"); 
          console.log(editedNote);
      };

    return (
      <div>
        <Container>
          {" "}
          <Row>
            <Col className="addbar">
              <div className="noteflex">
                <Card className="text-center">
                  <Card.Header> Edit Note</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <input
                        name="title"
                        type="text"
                        value={editedNote.title}
                        onChange={handleInputChange}
                        required
                        placeholder="Title"
                      />
                    </Card.Title>
                    <Card.Text>
                      <textarea
                        name="content"
                        value={editedNote.content}
                        onChange={handleInputChange}
                        required
                        placeholder="Take a Note...."
                      />
                    </Card.Text>
                    <Card.Footer className="text-muted">
                      <input
                        name="datetime"
                        type="datetime-local"
                        value={editedNote.datetime}
                        onChange={handleInputChange}
                        required
                      />
                    </Card.Footer>
                    <button
                      className="savebtn"
                      onClick={handleSaveChanges}
                      type="submit"
                    >
                      Save Changes
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

export default EditNote;