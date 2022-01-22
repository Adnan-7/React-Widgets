import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Exp = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRendering = async () => {
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/users'
      );
      setUsers(data);
    };
    userRendering();
  }, []);

  const userRendered = users.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });

  return <ul>{userRendered}</ul>;
};

export default Exp;
