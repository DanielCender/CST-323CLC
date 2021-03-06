import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useLayoutEffect } from 'react';

export const Logout = () => {
  let history = useHistory();
  const [count, setCount] = useState(3);

  useLayoutEffect(() => {
    window.localStorage.removeItem('USER');
  }, []);

  useEffect(() => {
    if (count === 0) history.push('/');
    setTimeout(() => setCount((prev) => prev - 1), 1000);
  }, [count]);

  return (
    <Container fluid className='p-0 m-0' style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
        className='bg-dark-gray'
      >
        <h1>REDIRECTING</h1>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderTop: '15px solid #A0A09F',
        }}
        className='bg-dark pt-4 pb-4'
      >
        <Row>
          <Col className='text-light'>Redirecting to Home in {count}...</Col>
        </Row>
      </div>
    </Container>
  );
};

export default Logout;
