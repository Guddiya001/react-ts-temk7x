import * as React from 'react';
import './style.css';
// https://jsonplaceholder.typicode.com/posts
export default function App() {
  const [item, setItem] = React.useState(null);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((post) => setItem(post))
      .catch((err) => {});
  }, []);

  const removeElement = (e) => {
    setItem(item.filter((it) => it.id !== e));
  };
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Post</th>
        <th>Action</th>
      </tr>
      {item?.map((dt) => {
        return (
          <tr key={dt.id}>
            <td>{dt.id}</td>
            <td>{dt.title}</td>
            <td>{dt.body}</td>
            <td>
              <button onClick={() => removeElement(dt.id)}> Delete </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
