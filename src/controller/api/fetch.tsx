import {useEffect, useState} from 'react';

const [githubData, setGithubData] = useState([])
const [githubUser, setGithubUser] = useState("mmessiasdev")

const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }

export default fetchData;