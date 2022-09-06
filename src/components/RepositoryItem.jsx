export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository ?? 'Default'}</strong>
      <p>Forms in react</p>
      <a href="#">Access Repository</a>
    </li>
  );
}
