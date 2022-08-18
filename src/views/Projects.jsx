import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fakeApi } from '../fakeAPI/api';

export default function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fakeApi.getAllProjects();
        // console.log(response.data)
        setProjects(response.data);
      } catch (error) {
        console.error(error)
      }
    }
    getData();
  }, [])

  return (
    <div>
      <h3>Check out my projects:</h3>
      {!projects && <p>Loading</p>}
      {projects && projects.map(elem => {
        return <p key={elem._id}><Link to={`/projects/${elem._id}`}>{elem.title}</Link></p>
      })}
      <Outlet />
    </div>
  )
}
