import React from 'react';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const Navbar = ()=>{
    return(
        <>
            <div className="navbar">
                <span className='nav_icon'><StickyNote2Icon/></span>
                <span className='nav_title'>Google Keep Clone</span>
            </div>
        </>
    )
}

export default Navbar;