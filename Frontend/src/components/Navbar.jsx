// import React, { useState } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { Navlinks } from "../constants/Navlinks";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   //useState
//   //const [state, setState]= useState(initialState)
//   //useState is the special function in react used for state management.It store data and update it.
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-cyan-300 px-2 ">
//       <div className="flex justify-between p-2 text-white">
//         <NavLink to="/" className="flex items-center gap-2">
//           <img src="/logo.jpg" alt="logo" className="h-12" />
//           <h1>NYB Construction</h1>
//         </NavLink>

//         <button
//           onClick={() => setOpen(!open)}
//           className="bg-green-400 px-4 text-sm mr-2 sm:hidden cursor-pointer"
//         >
//           {open ? (
//             <HiOutlineX className="size-10" />
//           ) : (
//             <HiOutlineMenu className="size-10" />
//           )}
//         </button>
//         <ul className="sm:flex sm:flex-row hidden gap-4 items-center px-10">
//           {Navlinks.map((link, index) => (
//             <li key={index}>
//               <Link to={link.path}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {
//         open && <ul className="absolute p-4 space-y-6 bg-gray-300  font-semibold text-xl w-full">
//         {Navlinks.map((link, index) => (
//           <li key={index}>
//             <Link to={link.path} onClick={()=>setOpen(false)}>{link.name}</Link>
//           </li>
//         ))}
//       </ul>
//       }
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Navlinks } from '../constants/Navlinks'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [open, setopen] = useState(false)
    return (

        <nav className='bg-blue-400'>
            <div className='flex justify-between p-2 text-white'>

                <NavLink to="/" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="" className='h-12' />
                    <h1>New Y B Construction</h1>
                </NavLink>
                <button className='bg-green-400 px-4 mr-2 sm:hidden' onClick={() => setopen(!open)}>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>

                <ul className='sm:flex sm:flex-row hidden  gap-4 items-center px-10'>
                    {
                        Navlinks.map((link, index) => (

                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>


                        ))
                    }
                </ul>
            </div>

            {
                open && <ul className='absolute p-4 space-y-6 bg-gray-300  font-semibold text-xl w-full'>
                    {
                        Navlinks.map((link, index) => (

                            <li key={index}>
                                <Link to={link.path} onClick={()=>setopen(false)}>{link.name}</Link>
                            </li>


                        ))
                    }
                </ul>
            }

        </nav>
    )
}

export default Navbar



