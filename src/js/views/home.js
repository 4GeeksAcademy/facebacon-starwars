import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <div className="container text-center mt-5">
        <h1>Welcome to the Star Wars Databank</h1>
        <p className="lead">Explore the Star Wars universe. Browse characters, vehicles, and planets.</p>
        <div className="row mt-4">
            <div className="col-md-4">
                <div className="card bg-dark text-white">
                    <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="card-img-top" alt="Characters" />
                    <div className="card-body">
                        <h5 className="card-title">Characters</h5>
                        <p className="card-text">Explore the characters of the Star Wars universe.</p>
                        <Link to="/people" className="btn btn-primary">View Characters</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-white">
                    <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" className="card-img-top" alt="Vehicles" />
                    <div className="card-body">
                        <h5 className="card-title">Vehicles</h5>
                        <p className="card-text">Discover the various vehicles in Star Wars.</p>
                        <Link to="/vehicles" className="btn btn-primary">View Vehicles</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-dark text-white">
                    <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="card-img-top" alt="Planets" />
                    <div className="card-body">
                        <h5 className="card-title">Planets</h5>
                        <p className="card-text">Learn about the planets in the Star Wars universe.</p>
                        <Link to="/planets" className="btn btn-primary">View Planets</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);