import './App.css';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

const UserProfiles = () => {

  const [UserProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then(res=>{
      console.log(res);
      setUserProfiles(res.data);
    });
  };

useEffect(() => {
  fetchUserProfiles();
}, []);

return UserProfiles.map((UserProfile,index) =>{
  return( <div key={index}>
    <br/>
    <br/>
    <h1>{UserProfile.username}</h1>
    <p>{UserProfile.userProfileId}</p>
    <MyDropzone {...UserProfile}/>
    <br/>
  </div>
  );
});
};

function MyDropzone({ userProfileId }) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    console.log(file);

    const formData = new FormData();
    formData.append("file",file);

    axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(() => {
      console.log("file upload successfully");
    }).catch(err => {
      console.log(err);
    });
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>이미지를 올려주세요 ...</p> :
          <p>이미지를 올려주거나 프로필 이미지를 클릭해주세요</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserProfiles/>
    </div>
  );
}

export default App;
