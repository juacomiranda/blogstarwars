import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Personajes = () => {
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_personajes", payload: data }))
    }, [])

    return (
        <div className="text-center mt-5 text-light">
            <h1>Personajes</h1>
            <div className="row text-center mt-5 g-4">
                {store.personajes.map((personaje, i) => (
                    <div className="col-3" key={i}>
                        <div className="card bg-dark text-light h-100">
                            <img
                                src={personaje.image}
                                className="card-img-top object-fit-contain"
                                style={{ height: "280px" }}
                                alt={personaje.name}
                                onError={(e) => { e.target.closest(".col-3").style.display = "none" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{personaje.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};