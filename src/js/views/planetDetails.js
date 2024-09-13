import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const planet = store.planets.find(p => p.uid === id);

    useEffect(() => {
        if (!planet) {
            actions.fetchPlanets();
        }
    }, [id, planet, actions]);

    return (
        <div className="container mt-5">
            {planet ? (
                <div className="row">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="img-fluid" alt={planet.properties?.name || 'Unknown'} />
                    </div>
                    <div className="col-md-8">
                        <h2>{planet.properties?.name || 'Unknown'}</h2>
                        <p><strong>Climate:</strong> {planet.properties?.climate || 'Unknown'}</p>
                        <p><strong>Diameter:</strong> {planet.properties?.diameter || 'Unknown'} km</p>
                        <p><strong>Population:</strong> {planet.properties?.population || 'Unknown'}</p>
                        <p><strong>Gravity:</strong> {planet.properties?.gravity || 'Unknown'}</p>
                        <p><strong>Terrain:</strong> {planet.properties?.terrain || 'Unknown'}</p>
                        <Link to="/planets" className="btn btn-primary">Back to Planets</Link>
                        <button onClick={() => actions.addFavorite({ ...planet},'planets' )} className="btn btn-secondary ml-2">Add to Favorites</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};