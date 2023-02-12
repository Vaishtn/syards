// function Gellary(){
//   const [image, setImage] = useState("");
//   const [res, setRes] = useState([]);
//   const [downloadCount, setDownloadCount] = useState(0);

//   const Access_Key = "X-pafqi8eEtaRcOOEZNXX058Bzhcqmt-iyuxD4Q3Bgk";
//   const fetchRequest = async () => {
//     const data = await fetch(
//       `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${Access_Key}&per_page=20`
//     );
//     const dataJ = await data.json();
//     const result = dataJ.results;
//     // console.log(result);
//     setRes(result);
//   };
//   useEffect(() => {
//     fetchRequest();
//   }, []);
//   const Submit = () => {
//     fetchRequest();
//     setImage("");
//   };
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12 d-flex justify-content-center align-items-center input">
//             <input
//               className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
//               type="text"
//               placeholder="Search Anything..."
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//             />
//             <button
//               type="submit"
//               onClick={Submit}
//               className="btn bg-dark text-white fs-3 mx-8"
//             >
//               Search
//             </button>
//             <h2>downloads-{downloadCount}</h2>
//           </div>
//         </div>
//       </div>
//       <div className="col-12 d-flex justify-content-evenly flex-wrap">
//         {res.map((val) => {
//           return (
//             <>
//               <div class="img-holder">
//                 <img
//                   key={val.id}
//                   className="col-3 img-fluid img-thumbnail"
//                   src={val.urls.small}
//                   alt="val.alt_description"
//                 />
//                 <a
//                   className="link"
//                   download
//                   target="_blank"
//                   href={val.urls.small}
//                 >
//                   <button
//                     // className="fa fa-download"
//                     onClick={() => {
//                       setDownloadCount(downloadCount + 1);
//                     }}
//                   >
//                     download
//                   </button>
//                 </a>
//                 <a href={val.urls.small} className="link1">
//                   Share
//                 </a>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
// }

// export default Gellary
