import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-dark mb-3 px-5">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Star Wars Databank</span>
            </Link>
            <div className="ml-auto dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                {store.favorites.length > 0 ? (
    store.favorites.map((item, index) => {
        console.log('item:', item);
        return (
            <li key={index} className="d-flex justify-content-between align-items-center">
                <Link className="dropdown-item" to={`/${item.type}/${item.uid}`}>
                    {item.properties?.name || 'Unknown'}
                </Link>
                <button
                    className="btn btn-sm btn-outline-danger ml-2"
                    onClick={() => actions.removeFavorite(item)}
                >
                    &times;
                </button>
            </li>
        );
    })
) : (
    <li className="dropdown-item">No favorites added</li>
)}
                </ul>
            </div>
        </nav>
    );
};