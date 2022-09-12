import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function CreateProject() {
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: '',
    description: '',
    imageUrl: ''
  })

  // In case of multiple file upload:
  // const [imageUrls, setImageUrls] = useState([]);
  // const [imgForUser, setImgForUser] = useState([]);

  const handleChange = (e) => {
    setProject(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFileUpload = async(e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/projects/upload`, uploadData);
      console.log(response.data.fileUrl);

      setProject(prev => {
        return {
          ...prev,
          imageUrl: response.data.fileUrl
        }
      })

      // In case of multiple file upload
      // setImageUrls(prev => [...prev, response.data.fileUrl]);
      // setImgForUser(prev => [...prev, e.target.files[0].name]);


    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // In case of multiple file upload
    // const projectToSend = {
    //   title: project.title,
    //   description: project.description,
    //   imageUrls: imageUrls
    // }

    try {
      const newProject = await axios.post('http://localhost:8000/api/v1/projects', project, { headers: { Authorization: `Bearer ${storedToken}` } });
      toast.success('Project created successfully')
      navigate(`/projects/${newProject.data.data._id}`)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={project.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={project.description} onChange={handleChange} />

        {/* In case of multiple file upload */}
        {/* {imgForUser && (
          <ul>
            {imgForUser.map((elem, i) => {
              return <li key={i}>{elem}</li>
            })}
          </ul>
        )} */}

        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
