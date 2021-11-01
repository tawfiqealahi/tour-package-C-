import React from 'react';
import { Form } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div>
            <Form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Subscribe us" />
</Form>
        </div>
    );
};

export default Subscribe;