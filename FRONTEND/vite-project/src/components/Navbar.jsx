import React from 'react'
import { Link } from 'react-router'
import  { PlusIcon } from "lucide-react";
const Navbar = () => {
  return (
    <header className ="w-full bg-base-300 border-b border-base-content/10 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="mx-auto max-w-6xl  p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Freewill</h1>
       <div className ="flex items-center   gap-6">
        <Link to={"/create"} className="btn btn-primary">
        <PlusIcon className ="size-5"/>
        <span>New Note</span>
            </Link>
                 </div>
            </div>
        </div>
   
    </header>
  )
}

export default Navbar;
   