import React from "react";
import { Link , useLocation} from "react-router-dom";

import './styles.scss'
const data = [
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

function Navbar() {
    const lok_data = useLocation();
    let location = data.filter((elt) => elt.route === lok_data.pathname);
    return (
        <nav className="navbar_container">
            <div className="row">
                <div className="transparent-background">
                <div className="row">
                        <div className="col-auto mx-auto d-flex align-items-center page">
                            {location[0]?.page}
                        </div>
                    </div>
                    <ul className="navbar_container__menu nav flex-column">
                        {
                            data.map(
                                (item, key) => (
                                    <li key={key} className="navbar_container__menu__item nav_item">
                                        <Link className="navbar_container__menu__item__links" to={item.route}>
                                            <div className="navbar_container__menu__item__links__page"><p className="page_no">{item.label}</p><p className="page_no">{item.page}</p></div>
                                        </Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="row">
                        <div className="col-auto mx-auto d-flex align-items-center name">
                            Niles Drake
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;