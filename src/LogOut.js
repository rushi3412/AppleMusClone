// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LogOut.css';

// const LogOut = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear the user's session information (e.g., token) from localStorage
//     localStorage.removeItem('token');

//     // Redirect the user to the login or another relevant page
//     navigate('/signin'); // You can change the route as needed
//   };

//   return (
//     <div className="logout-overlay">
//       <div className="logout-container">
//         <p className='logOut' onClick={handleLogout}>Settings</p>
//         <p className='logOut' onClick={handleLogout}>Logout</p>
//       </div>
//     </div>
//   );
// };

// export default LogOut;




// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LogOut.css';

// const LogOut = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
   
//     localStorage.removeItem('token');

//     navigate('/signin'); 
//   };

//   const handleOutsideClick = (e) => {
//     if (!e.target.closest('.logout-container')) {
      
//       navigate('/'); 
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);

//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div className="logout-overlay">
//       <div className="logout-container">
//         {/* <h1>Logout</h1> */}
//         <p className='logOut' onClick={handleLogout}>Settings</p>
//         <p className='logOut' onClick={handleLogout}>Logout</p>
//       </div>
//     </div>
//   );
// };

// export default LogOut;



// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LogOut.css';

// const LogOut = () => {
//   const navigate = useNavigate();
//   let isEventListnerAdded = false;

//   const handleLogout = () => {
//     console.log('User clicked "Logout"');

//     localStorage.removeItem('token');

//     navigate('/signin');
//   };

//   const handleOutsideClick = (e) => {
//     if (!e.target.closest('.logout-container')) {
//       console.log('User clicked outside the logout container');

//       navigate('/');
//     }
//   };

  
//   return (
//     <div className="logout-overlay">
//       <div className="logout-container">
//         {/* <h1>Logout</h1> */}
//         <svg className="logout-icon" onClick={handleLogout} onMouseDown={(e) => e.stopPropagation()}>
//           <use xlinkHref="#logout-icon" />
//         </svg>
//         <p className="logOut" onClick={handleLogout}>Settings</p>
//         <p className="logOut" onClick={handleLogout}>Logout</p>
//       </div>
//     </div>
//   );
// };

// export default LogOut;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token');

   
    navigate('/signin'); 
  };

  return (
    <div className="logout-overlay">
      <div className="logout-container">
        <h1>Logout</h1>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default LogOut;