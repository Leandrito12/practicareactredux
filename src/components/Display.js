import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  let characters = useSelector((store) => store.characters.data);
  return (
    <>
      {characters.map((character) => {
        return (
          <div key={character.id} className="d-inline-flex p-2">
            <div
              className="card mb-3"
              style={{ maxwidth: 400 + "px", minHeight: 400 + "px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={character.img_url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    {character.abilities.map((ability) => (
                      <p className="text">
                        {ability}
                        <br />
                      </p>
                    ))}
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
