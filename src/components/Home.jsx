import React, { useReducer } from "react";
import { Card, Col, Container, Row, Alert } from "react-bootstrap";
import { initialText, textReducer } from "../reducers/textReducer";

const Home = () => {
  //   const [text, setText] = useState("Reducer, Hello");

  const [textState, dispatch] = useReducer(textReducer, initialText);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4} className="my-5">
          <Card className="shadow p-2">
            {textState.error && (
              <Alert variant="danger">This is an Error</Alert>
            )}
            <input
              value={textState.name}
              type="text"
              onChange={(e) =>
                dispatch({
                  type: "TEXT_LOAD",
                  payload: { name: e.target.value },
                })
              }
            />
            <br />
            <input
              type="text"
              onChange={(e) =>
                dispatch({
                  type: "TEXT_LOAD",
                  payload: { email: e.target.value },
                })
              }
            />
            <br />
            <input
              type="text"
              onChange={(e) =>
                dispatch({
                  type: "TEXT_LOAD",
                  payload: { skill: e.target.value },
                })
              }
            />
            <br />
            <select
              className="form-control"
              onChange={(e) =>
                dispatch({
                  type: "ERROR_LOAD",
                  payload: { error: e.target.value },
                })
              }
            >
              <option value="show">Show</option>
              <option selected value="hide">
                Hide
              </option>
            </select>

            <br />
            <hr />
            <h3>Name : {textState.name}</h3>
            <h3>Eamil : {textState.email}</h3>
            <h3>Skill : {textState.skill}</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
