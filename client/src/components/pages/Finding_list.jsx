// import React, { useState , useEffect} from "react";
// import { Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import "./Form_page.css";

// // import Axios from "axios";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }));

// const Finding_list = () => {
// //   const [RuleId, setRuleId] = useState(data.RuleId);
// //   const [Description, setDescription] = useState(data.Description);
// //   const [Severity, setSeverity] = useState(data.Severity);
// //   const [Pathname, setPathName] = useState(data.Pathname);


//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/findingdata")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Log the response data to the console
//         setData(data);
//       });
//   }, []);

// //   return (
// //     <div>
// //       <Box sx={{ display: "flex", width: "100%" }}>
// //         <Box sx={{ p: 3, width: "100%" }}>
// //           <DrawerHeader />
// //           <form action="#">
// //             <label>
// //               Rule ID:
// //               <input type="text" value={RuleId} />
// //             </label>
// //             <label>
// //               Description:
// //               <input type="text" value={Description} />
// //             </label>
// //             <label>
// //               Severity:
// //               <input type="text" value={Severity} />
// //             </label>
// //             <label>
// //               Path Name:
// //               <input type="text" value={Pathname} />
// //             </label>
// //           </form>
// //         </Box>
// //       </Box>
// //     </div>
// //   );
// // };





//   return (
//     <>
//       <Box sx={{ display: "flex", width: "100%" }}>
//         <Box sx={{ p: 3, width: "100%" }}>
//           <DrawerHeader />
//           <div>
//             {/* <div className="divaddButton">
//               <button type="submit" className="addButton" onClick={getEmployees}>
//                 show data
//               </button>
//             </div> */}
//             <div>
//               {data && data.map((val) => {
//                 return (
//                   <div key={val.id} className="employee">
                   
                   
                   
//                     <div className="info">
//                       <h3>
//                         {" "}
//                         <b>Repo Name: </b>
//                         {val.Reponame}
//                       </h3>
//                       <h3>
//                         <b>Status: </b>
//                         {val.Status}
//                       </h3>
//                       <h3>
//                         <b>QueuedAt: </b>
//                         {val.QueuedAt}
//                       </h3>
//                       <h3>
//                         <b>ScanningAt: </b>
//                         {val.ScanningAt}
//                       </h3>
//                       <h3>
//                         <b>FinishedAt: </b>
//                         {val.FinishedAt}
//                       </h3>
//                       <Link to={route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
//                         <h3 style={{fontSize: 'bold'}}>FinishedAt</h3>
//                     </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </Box>
//       </Box>
//     </>
//   );
// };





// export default Finding_list;








import React from "react";
import { useState,useEffect } from "react";
// import Axios from "axios";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import './Finding_list.css';

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Finding_list = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/getdata')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response data to the console
        setData(data);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ p: 3, width: "100%" }}>
          <DrawerHeader />
          <div>
            <div>
              {data && data.map((val) => {
                return (
                  <div key={val.id} className="employee">
                    <div className="info">
                      <h3>
                        {" "}
                        <b>Rule Id: </b>
                        {val.Ruleid}
                      </h3>
                      <h3>
                        <b>Description: </b>
                        {val.Descriptions}
                      </h3>
                      <h3>
                        <b>Severity: </b>
                        {val.Severity}
                      </h3>
                      <h3>
                        <b>Path Name: </b>
                        {val.Pathname}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Finding_list;
