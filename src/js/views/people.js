import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPeople();
    }, []);

    return (
        <div className="container">
            <h1>People</h1>
            <div className="row">
                {store.people && store.people.length > 0 ? (
                    store.people.map((person, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt={person.properties?.name || 'Unknown'} />
                                <div className="card-body">
                                    <h5 className="card-title">{person.properties?.name || 'Unknown'}</h5>
                                    <p className="card-text">Gender: {person.properties?.gender || 'Unknown'}</p>
                                    <p className="card-text">Birth Year: {person.properties?.birth_year || 'Unknown'}</p>
                                    <p className="card-text">Height: {person.properties?.height || 'Unknown'} cm</p>
                                    <Link to={`/people/${person.uid}`} className="btn btn-primary">Details</Link>
                                    <button onClick={() => actions.addFavorite({ ...person},'people' )} className="btn btn-secondary ml-2">Add to Favorites</button>
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