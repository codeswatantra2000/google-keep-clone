import React from 'react'
import './Index.css'

const Index = (props) => {
  const deleteNode = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className="notes-section">
      <form className='form-card'>
        <h2>{props.title}</h2>
        <br></br>
        <hr />
        <br></br>
        <p>{props.content}</p>
        <button onClick={deleteNode} type='button' className="edit-btns">
          Remove
        </button>
      </form>
    </div>
  );
}

export default Index









































































































// import React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import "./Index.css";

// const Index = (props) => {
//   const deleteNode = () => {
//     props.deleteItem(props.id);
//   };

//   return (
//     <>
//     <div className="small-section">
//       <Box className="Box">
//         <Card className="Card">
//           <form>
//             <h2>{props.title}</h2>
//             <br></br>
//             <hr />
//             <br></br>
//             <p>{props.content}</p>
//               <button className="edit-btns" onClick={deleteNode}>
//                 Remove
//               </button>
//           </form>
//         </Card>
//       </Box>
//     </div>
//     </>
//   );
// };

// export default Index;



