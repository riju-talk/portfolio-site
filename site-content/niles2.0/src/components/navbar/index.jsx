import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import './styles.scss'
const data=[
    {
        page: "001",
        label: "Hello There",
        route: "/"
    },
    {
        page: "002",
        label: "Projects",
        route: "/projects"
    },
    {
        page: "003",
        label: "Creative Room",
        route: "/creative_room"
    },
    {
        page: "004",
        label: "Reach Out",
        route: "/reach_out"
    }
]

function Navbar(){
    return(
    <nav className="navbar_container"> 
    <div className="row flex-nowrap">
        <div className="col-auto me-auto">
            <span className="fs-4 d-none d-sm-inline">Niles Drake</span>
        </div>
        <div className="col">
            <ul className="navbar_container_menu nav nav-pills flex-column">
                {
                    data.map(
                        (item, key) => (
                            <li key={key} className="navbar_container_menu_item nav_item py-2 py-sm-0 text-center nav-link">
                                <Link className="navbar_container_menu_links" to={item.route}>
                                    <div className=""><p className="page_no">{item.page}</p><p className="page_no">{item.label}</p></div>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    </div>
</nav>
    );
}

export default Navbar;