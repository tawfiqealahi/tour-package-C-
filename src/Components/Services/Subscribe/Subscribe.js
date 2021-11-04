import React from 'react';
import { Form } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div className="my-3">
            <Form>
  <label>
    
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Subscribe us" />
</Form>
        </div>
    );
};

export default Subscribe;