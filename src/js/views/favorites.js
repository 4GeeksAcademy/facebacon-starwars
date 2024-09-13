import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Favorites</h2>
            <div className="row">
                {store.favorites.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card bg-dark text-white">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <button onClick={() => actions.removeFavorite(item)} className="btn btn-danger">Remove from Favorites</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};