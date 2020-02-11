import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";

export default function AlertDismissible() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="mt-5">
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going Art?!</Alert.Heading>
          <p>
            Perfect exercise for you would be to create another component below,
            that can increment and decrement a number on a button click.
          </p>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            This link might help
          </a>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me!
            </Button>
          </div>
        </Alert>

        {!show && (
          <Button onClick={() => setShow(true)} variant="outline-info">
            Show msg
          </Button>
        )}
      </Container>
    </>
  );
}
