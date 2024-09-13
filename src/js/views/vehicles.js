import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchVehicles();
    }, []);

    return (
        <div className="container">
            <h1>Vehicles</h1>
            <div className="row">
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt={vehicle.properties?.name || 'Unknown'} />
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.properties?.name || 'Unknown'}</h5>
                                    <p className="card-text">Model: {vehicle.properties?.model || 'Unknown'}</p>
                                    <p className="card-text">Manufacturer: {vehicle.properties?.manufacturer || 'Unknown'}</p>
                                    <p className="card-text">Cost: {vehicle.properties?.cost_in_credits || 'Unknown'} credits</p>
                                    <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">Details</Link>
                                    <button onClick={() => actions.addFavorite({ ...vehicle }, 'vehicles')} className="btn btn-secondary ml-2">Add to Favorites</button>
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