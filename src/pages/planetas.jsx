import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Planetas = () => {
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_planetas", payload: data.results }))
    }, [])

    return (
        <div className="text-center mt-5 text-light">
            <h1>Planetas</h1>
            <div className="row text-center mt-5 g-4">
                {store.planetas.map((planeta, i) => (
                    <div className="col-3" key={i}>
                        <div className="card bg-dark text-light h-100">
                            <img
                                src="https://placehold.co/300x280?text=Planeta"
                                className="card-img-top object-fit-contain"
                                style={{ height: "280px" }}
                                alt={planeta.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planeta.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
