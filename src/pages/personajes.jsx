import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Personajes = () => {
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_personajes", payload: data.results }))
    }, [])

    return (
        <div className="text-center mt-5 text-light">
            <h1>Personajes</h1>
            <div className="row text-center mt-5 g-4">
                {store.personajes.map((personaje, i) => (
                    <div className="col-3" key={i}>
                        <div className="card bg-dark text-light h-100">
                            <img
                                src="https://placehold.co/300x200?text=Personaje"
                                className="card-img-top"
                                alt={personaje.name}
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