import React, { useState, useEffect } from 'react';
import { Button, Segment, Rating, Modal, Input, Label } from 'semantic-ui-react';


const AddUser = (props) => {
  const { open, setOpen, users, setUsers, rating, setRating } = props;
  const [user, setUser] = useState('');

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        size='small'
      >
        <Modal.Header>Add User</Modal.Header>
        <Segment>
          User Name:-
          <Input onChange={(e, data) => setUser(data.value)} /> <br />
          User Rating:-
          <Rating icon='star' size='huge' onRate={(e, data) => setRating(data.rating)} defaultRating={1} maxRating={5} />
          <div style={{ marginTop: '10px' }}>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => {
              setOpen(false);
              setUsers([...users, { user: user, rating: rating }]);

            }}>Save</Button>
          </div>
        </Segment>

      </Modal>
    </div>
  );
}

export default AddUser;
