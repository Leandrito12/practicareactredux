import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCharacter } from "../redux/Slices/CharactersSlice";
import { useParams } from "react-router-dom";

export default function DisplayOne() {
  //se llama dispatch para no usar prompts
  let dispatch = useDispatch();

  //para obtener la id del character se usa use params que y se desestructura el payload para
  //obtener la id
  let { id } = useParams();

  //para controlar que no se llame 2 veces, se declara characters igual a la data
  //y se manda en el callback del useEffect
  let characters = useSelector((store) => store.characters.data);
  let character = useSelector((store) => store.characters.characterFiltrado);
  useEffect(() => {
    dispatch(filterCharacter(id));
  }, [characters]);

  //let character = useSelector((store) => store.character.data);
  return (
    <>
      <div className="d-inline-flex p-2">
        <div
          className="card mb-3"
          style={{ maxwidth: 400 + "px", minHeight: 400 + "px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={character?.img_url}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{character?.name}</h5>
                {character?.abilities.map((ability) => (
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
    </>
  );
}
