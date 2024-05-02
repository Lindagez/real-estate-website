// import React, { useState, useRef } from 'react';

// const RotateElement = () => {
//   const [offsetX, setOffsetX] = useState(0);
//   const [offsetY, setOffsetY] = useState(0);
//   const elementRef = useRef(null);

//   const handleMouseMove = (event) => {
//     const x = event.clientX;
//     const y = event.clientY;

//     setOffsetX(((x - window.innerWidth / 2) / window.innerWidth) * 45);
//     setOffsetY(((y - window.innerHeight / 2) / window.innerHeight) * 45);

//     elementRef.current.style.setProperty("--rotateX", offsetX + "deg");
//     elementRef.current.style.setProperty("--rotateY", -1 * offsetY + "deg");
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div ref={elementRef}>
//       <pre>This text will rotate when you move your mouse over it.</pre>
 
//     <pre contenteditable class="language-css" tabindex="0">
//         <code class="language-css"><span class="token selector">.awesome-layouts</span> 
      
//     <span class="token property">display</span>
//     <span class="token punctuation">:</span> 
//     grid<span class="token punctuation">
//     </span>
//   <span class="token punctuation">}</span>
  


// <a href="https://youtu.be/Z-3tPXf9a7M" target="_blank" class="yt"/>YouTube tutorial on making this here</a>
//      </div>
//   );
// };

// export default RotateElement;
