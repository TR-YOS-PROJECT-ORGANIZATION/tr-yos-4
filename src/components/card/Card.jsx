import Slider from "react-slick";
import image1 from "../../images/3d.jpg";
import image2 from "../../images/dna.jpg";
import image3 from "../../images/lab.jpg";
import image4 from "../../images/biology.jpg";
import { useNavigate } from "react-router-dom";

// function Arrow(props) {
//   const { className, style, onClick } = props;
 
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "inline-flex",
//         background: "red",
//         position: "fixed",
//       }}
//       onClick={onClick}
//     />
//   );
// }

const Card1 = ({item,key}) => {
  const navigate = useNavigate()
  // console.log(item);
  const images = [
    {img:image1},{img:image2},{img:image3},{img:image4},{img:image1},{img:image2},{img:image3},{img:image4}
  ]
  console.log(images);

  return (
    <>
    {/* className="xs:m-0 xs:px-0 xs:w-full sm:m-0 sm:px-0 sm:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 md:px-20" */}
      <div 
      key={key}>
        
        {/* component */}
        <div className="xs:m-0 sm:m-auto mx-auto w-full max-w-sm pt-6 ml-6">
          <a
            href="#"
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-lg border shadow-2xl">
              <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                <div className="relative w-full">
                 
                    {images.map((img)=> 
                    (<div className="relative">
                      <img
                        className="w-full h-[25rem] object-cover"
                        src={img.img}
                      ></img>
                    </div>)
                    )}
                    
                    
                    
                 
                </div>

                <div class="absolute top-0 right-0 px-2 py-1 m-2 rounded-md shadow-2xl">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                  >
                    <g transform="translate(0 -1028.4)">
                      <path
                        d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                        fill="#e74c3c"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="">
                <div className="mt-3 grid grid-cols-2">
                  <div className="flex text-left ml-3">
                    <div className="relative truncate ">
                      <h2
                        className=" text-base font-medium text-gray-800 md:text-lg "
                        title=""
                        // type="button"
                        onClick={()=> navigate(`/departmentDetail/${item?.department.code}`,{state:item})}
                      >
                        {item.department.tr}
                      </h2>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="Faculty"
                      >
                        {item.faculty.tr}
                      </p>
                      <p
                        className="mt-2 line-clamp-1 text-sm text-gray-800"
                        title="University"
                      >
                        {item.university.tr}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-left mt-2 ml-3 border-t border-gray-200 pt-2">
                  <span className="inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white-cream hover:bg-red-warm">
                    {" "}
                    Compare{" "}
                    <svg
                      fill="#fff"
                      width="20px"
                      className="ml-2"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1,8A1,1,0,0,1,2,7H9.586L7.293,4.707A1,1,0,1,1,8.707,3.293l4,4a1,1,0,0,1,0,1.414l-4,4a1,1,0,1,1-1.414-1.414L9.586,9H2A1,1,0,0,1,1,8Zm21,7H14.414l2.293-2.293a1,1,0,0,0-1.414-1.414l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L14.414,17H22a1,1,0,0,0,0-2Z" />
                    </svg>
                  </span>
                </div>
                <div className="mt-2 ml-3 mr-3 flex justify-between border-b border-t border-gray-200 pb-3 pt-3">
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    <span className="xl:mt-0"> {item.city.tr} </span>
                  </p>
                  <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                    <svg
                      fill="#000000"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M15.3,27.1c-0.7-0.4-1.3-0.9-1.8-1.5c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c0.7,0.8,1.4,1.5,2.3,2
		c0.4,0.3,0.7,0.7,0.7,1.1c0,0.6,0.4,1,1,1s1-0.4,1-1C17,28.8,16.4,27.7,15.3,27.1z"
                        />
                        <path d="M5,5v17c0,1.7,1.3,3,3,3h1v-2V4V2H8C6.3,2,5,3.3,5,5z" />
                        <path
                          d="M21,12.5V5c0-1.7-1.3-3-3-3h-7v1v1v19v1v1h6.8c0.1,0.9,0.5,1.8,1.2,2.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
		c0.4-0.4,0.4-1,0-1.4c-0.6-0.6-0.8-1.5-0.5-2.3c0.1-0.4,0-0.7-0.2-1l-3.3-3.3c-1-1-1.1-2.7-0.3-4l3.2,3.2l1,1c0.4,0.4,1,0.4,1.4,0
		s0.4-1,0-1.4L21,17.6v-2.8c1.9,1.3,3,3.4,3,5.7V30c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.5C26,17.1,24.1,14,21,12.5z M17,10
		c0,0.6-0.4,1-1,1s-1-0.4-1-1V6c0-0.6,0.4-1,1-1s1,0.4,1,1V10z"
                        />
                      </g>
                    </svg>
                    <span className="mt-0"> {item.price}/year </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </>
  );
};

export default Card1;
