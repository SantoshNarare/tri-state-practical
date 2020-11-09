import React, { useState, useEffect } from 'react';
import { Segment, Button, Checkbox, Label, Rating } from 'semantic-ui-react';
import AddUser from './AddUser';

const Home = (props) => {
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [rating, setRating] = useState(1);
  const [isHighest, setHighest] = useState(true)

  useEffect(() => {
    if (isHighest) {
      setUsers(users.sort((a, b) => { return a.rating - b.rating }))
    } else {
      setUsers(users.sort((a, b) => { return b.rating - a.rating }))
    }
  })


  return (
    <>
      <Segment>
        <Label>sortBy:- </Label>
        <Checkbox
          checked={isHighest}
          label='sortBy Highest Rating'
          onChange={() => setHighest(true)}
        />
        <Checkbox
          checked={!isHighest}
          label='sortBy Lowest Rating'
          onChange={() => setHighest(false)}
        />
        <Button onClick={() => setOpen(true)} floated='right'>Add user</Button>
      </Segment>
      <AddUser
        open={open}
        setOpen={setOpen}
        users={users}
        setUsers={setUsers}
        rating={rating}
        setRating={setRating}
      />

      {users.map((Item, i) => {
        return (
          <Segment
            key={i}
          >
            <p>{Item.user}</p>
            <Rating
              icon='star'
              size='huge'
              key={i + Item.user}
              onRate={(e, data) => {
                setUsers(
                  users.map(el => (el.user.toString() === Item.user.toString() ? { user: el.user, rating: data.rating } : el))
                )
              }}
              defaultRating={Item.rating}
              maxRating={5}
            />
          </Segment>
        )
      })}
    </>
  )
};


export default Home;
