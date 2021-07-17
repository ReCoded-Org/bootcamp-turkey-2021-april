import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Completed() {
  const [boardItems, setBoardItems] = useState([]);

  useEffect(() => {
    db.collection("order_type").onSnapshot(querySnaphot => {
      querySnaphot.forEach(doc => {
        const path = `/order_type/${doc.id}/orders`;
        db.collection(path).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            // console.log(change)
            if (change.type === "added") {
              if (change.doc.data().isCompleted)
                setBoardItems(prev => [...prev, { ...change.doc.data(), id: change.doc.id }]);
            } else if (change.type === "removed") {
              setBoardItems(prev => {
                let newBoradItem = prev.filter(item => item.id !== change.doc.id);
                return newBoradItem;
              });
            } else if (change.type === "modified") {
              if (change.doc.data().isCompleted) {
                let found = false;
                setBoardItems(prev => {
                  let newBoradItem = prev.map(item => {
                    if (item.id !== change.doc.id) {
                      return item;
                    } else {
                      found = true;
                      return { ...change.doc.data(), id: change.doc.id };
                    }
                  });
                  return newBoradItem;
                });

                if (!found) setBoardItems(prev => [...prev, { ...change.doc.data(), id: change.doc.id }]);
              } else {
                setBoardItems(prev => {
                  let newBoradItem = prev.filter(item => item.id !== change.doc.id);
                  return newBoradItem;
                });
              }
            }
          });
        });
      });
    });
  }, []);

  return (
    <Container>
      <h1 className=" mt-4">Completed Orders</h1>
      <Row md={3}>
        {boardItems.map(item => (
          <div className="mt-3 ">
            <Card className="mr-2 ml-2 mt-3 shadowItem" style={{ height: "100%" }} key={item.id}>
              <Card.Body>
                <Card.Title>{item.dishName}</Card.Title>
                <Card.Text>
                  {item.description}
                  <br />
                  <b>Chef Name: </b>
                  {item.chefName}
                  <br />
                  <b>Is Completed:</b> {item.isCompleted ? "Yes" : "No"}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Due Date {item.dueTime}</small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Completed;
