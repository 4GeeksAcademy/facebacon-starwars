import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPlanets();
    }, []);

    return (
        <div className="container">
            <h1>Planets</h1>
            <div className="row">
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt={planet.properties?.name || 'Unknown'} />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.properties?.name || 'Unknown'}</h5>
                                    <p className="card-text">Climate: {planet.properties?.climate || 'Unknown'}</p>
                                    <p className="card-text">Population: {planet.properties?.population || 'Unknown'}</p>
                                    <p className="card-text">Diameter: {planet.properties?.diameter || 'Unknown'} km</p>
                                    <Link to={`/planets/${planet.uid}`} className="btn btn-primary">Details</Link>
                                    <button onClick={() => actions.addFavorite({ ...planet}, 'planets' )} className="btn btn-secondary ml-2">Add to Favorites</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};