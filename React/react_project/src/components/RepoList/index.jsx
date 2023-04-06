import React, { useEffect, useState } from "react";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [itsLoading, setItsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/ElisbertoJunior/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setInterval(() => {
          setItsLoading(false);
          setRepos(resJson);
        }, 3000);
      });
  }, []);

  return (
    <>
      {itsLoading && (
        <h1>
          Carregando...
        </h1>
      )}
      <ul>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <b>Nome: {name}</b>
            <br />
            <b>Linguagem: {language}</b>
            <br />
            <a target="_blank" href={html_url}>
              Visitar git hub
            </a>
            <hr />
          </li>
        ))}
        <li>Repositorio</li>
      </ul>
    </>
  );
};

export default RepoList;
