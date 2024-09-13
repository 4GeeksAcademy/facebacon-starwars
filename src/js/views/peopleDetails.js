import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const person = store.people.find(p => p.uid === id);

    useEffect(() => {
        if (!person) {
            actions.fetchPeople();
        }
    }, [id, person, actions]);

    return (
        <div className="container mt-5">
            {person ? (
                <div className="row">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="img-fluid" alt={person.properties.name} />
                    </div>
                    <div className="col-md-8">
                        <h2>{person.properties.name}</h2>
                        <p><strong>Gender:</strong> {person.properties.gender}</p>
                        <p><strong>Birth Year:</strong> {person.properties.birth_year}</p>
                        <p><strong>Height:</strong> {person.properties.height} cm</p>
                        <p><strong>Mass:</strong> {person.properties.mass} kg</p>
                        <p><strong>Hair Color:</strong> {person.properties.hair_color}</p>
                        <p><strong>Skin Color:</strong> {person.properties.skin_color}</p>
                        <p><strong>Eye Color:</strong> {person.properties.eye_color}</p>
                        <Link to="/people" className="btn btn-primary">Back to People</Link>
                        <button onClick={() => actions.addFavorite({ ...person}, 'people')} className="btn btn-secondary ml-2">Add to Favorites</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};