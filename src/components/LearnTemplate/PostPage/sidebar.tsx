import React from 'react';


interface SidebarProps {
    pageHeaderList : string[];
}


const Sidebar = ({ pageHeadersList = ['Intro to Prompt Engineering', 'Generating Images with MidJourney', 'Analyzing Medical Documents with ChatGPT', 'Pair Programming with ClaudeAi'] }) => {
    const renderPageHeaders = () => {
        return pageHeadersList.map((header) => {
            return (
                <li className="text-sm text-white opacity-40 mt-6 mb-6">
                    {header}
                </li>
            );
        });
    }

    return (
        <div className="sidebar-container flex-none max-w-30p w-full">
            <div className="sidebar-inner sticky">
                <h3 className="text-md text-shadow-purple  uppercase">Table of Contents</h3>
                <ul className="ml-6">
                    {renderPageHeaders()}
                </ul>
            </div>
        </div>
    );
    }


export default Sidebar;