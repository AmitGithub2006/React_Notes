// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // As "axios" file is exporting default in node_modules -> axios -> node_modules -> index.d.ts then there is no need to put it in {} like { axios } in above line.

// // Api fetch on button click
// export function DataFetch() {
//   const [posts, setPosts] = useState([]);
//   const [id, setId] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => {
//         console.log(response.data);
//         setPosts(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   return (
//     <div>
//       <h1>{posts.title}</h1>
//       <p>{posts.body}</p>
//       <button onClick={() => setId((prev) => prev+1)}>click - {id}</button>
//     </div>
//   );
// }

// ===================================================================================================

import React, { useState, useEffect } from "react";
import axios from "axios";

// Api fetch on entering id and button click.
export function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [btnId, setBtnId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, [btnId]);

  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setBtnId(id)}>click</button>
    </div>
  );
}

// ==========================================================================================

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Api fetch with data filter
// export function DataFetch() {
//   const [posts, setPosts] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setPosts([posts, ...response.data]);
//         setFilteredData([posts, ...response.data]);
//       })
//   }, []);

//   useEffect(() => {
//     const afterFilterData = posts.filter((post) => {
//       if(post.title) {
//         return post.title.includes(search)
//       }
//     })
//     setFilteredData(afterFilterData)
//   }, [search])

//   return (
//     <div>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {filteredData.map((post) => (
//         <div key={post.id}>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
