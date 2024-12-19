import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
        <h1>User Details</h1>
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        )}
        <Link to="/">Go Home</Link>
      </div>
  );
};

export default UserDetails;
