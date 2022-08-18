import React, { useEffect, useState } from 'react';
import { fakeApi } from '../fakeAPI/api';
import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
  // const params = useParams(); then use with params.id
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fakeApi.getProject(projectId);
        // console.log(response);
        setProject(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [projectId]);

  return (
    <div>
      {project && (
        <div>
          <h6>Project: {project.title}</h6>
          <p>Description: {project.description}</p>
        </div>)}
      {!project && <p>Project not found</p>}
    </div>
  )
}
