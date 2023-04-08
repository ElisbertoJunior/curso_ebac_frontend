import React, { useEffect, useState } from "react";
import styles from './RepoList.module.css'
 
const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [itsLoading, setItsLoading] = useState(true);

  useEffect(() => {
    setItsLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setInterval(() => {
          setItsLoading(false);
          setRepos(resJson);
        }, 2000);
      });
  }, [username]);

  return (
    <div className="container">
      {itsLoading ? (
        <h1>
          Carregando...
        </h1>
      ) : (
        <ul className={styles.list}>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id} className={styles.listItem}>
            <div className={styles.itemName}>
              <b>Nome: {name}</b>  
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagem: {language}</b>
            </div>
    
            <a className={styles.itemLink} target="_blank" href={html_url}>
              Visitar git hub
            </a>
          </li>
        ))}
      </ul>
      )}
     
    </div>
  );
};

export default RepoList;
