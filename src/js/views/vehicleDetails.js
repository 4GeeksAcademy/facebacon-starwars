import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const vehicle = store.vehicles.find(v => v.uid === id);

    useEffect(() => {
        if (!vehicle) {
            actions.fetchVehicles();
        }
    }, [id, vehicle, actions]);

    return (
        <div className="container mt-5">
            {vehicle ? (
                <div className="row">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="img-fluid" alt={vehicle.properties.name} />
                    </div>
                    <div className="col-md-8">
                        <h2>{vehicle.properties.name}</h2>
                        <p><strong>Model:</strong> {vehicle.properties.model}</p>
                        <p><strong>Manufacturer:</strong> {vehicle.properties.manufacturer}</p>
                        <p><strong>Cost:</strong> {vehicle.properties.cost_in_credits} credits</p>
                        <p><strong>Length:</strong> {vehicle.properties.length} meters</p>
                        <p><strong>Max Speed:</strong> {vehicle.properties.max_atmosphering_speed} km/h</p>
                        <p><strong>Cargo Capacity:</strong> {vehicle.properties.cargo_capacity} kg</p>
                        <Link to="/vehicles" className="btn btn-primary">Back to Vehicles</Link>
                        <button onClick={() => actions.addFavorite({ ...vehicle}, 'vehicles')} className="btn btn-secondary ml-2">Add to Favorites</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};