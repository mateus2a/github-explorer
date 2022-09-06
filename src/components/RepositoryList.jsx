import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';
// https://api.github.com/users/mateus2a/repos
export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/mateus2a/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        <RepositoryItem repository="unform2" />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
