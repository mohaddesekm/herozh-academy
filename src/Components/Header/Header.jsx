import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

import './Header.css'

export default function Header() {
  return (
    <div className="header">
        <Topbar/>
        <Navbar/>
        <Landing/>
    </div>
  )
}
