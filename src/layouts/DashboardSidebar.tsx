import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({children}) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-[3rem] border-[3px] border-[#ddd] rounded-lg">
                {children}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  w-80 min-h-full bg-[#fefefe] text-[#333]">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard/create-blog" className='btn w-full rounded-none my-auto pt-[17px] bg-[#fefefe]'>Create Blog</Link></li>
                    <li><Link to="/blog" className='btn w-full rounded-none my-auto pt-[17px] bg-[#fefefe]'>Create Post</Link></li>
                    <li><Link to="/create-blog" className='btn w-full rounded-none my-auto pt-[17px] bg-[#fefefe]'>All Blogs</Link></li>
                    <li><Link to="/create-blog" className='btn w-full rounded-none my-auto pt-[17px] bg-[#fefefe]'>All Users</Link></li>
                    <li><Link to="/create-blog" className='btn w-full rounded-none my-auto pt-[17px] bg-[#fefefe]'>Settings</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;