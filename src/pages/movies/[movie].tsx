// import { useRouter } from "next/router";
// import React, { Component } from "react";

// export default class movie extends Component {
//   obj = useRouter();

//   render() {
//     return (
//       <div>
//         <h1>Movie</h1>
//       </div>
//     );
//   }
// }
import { useRouter } from "next/router";
import React from "react";

const movie = () => {
  const obj = useRouter();
  console.log(obj.query);

  return (
    <div>
      <h1>Movie</h1>
    </div>
  );
};

export default movie;
