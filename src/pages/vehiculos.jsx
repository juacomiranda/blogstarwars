import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Vehiculos = () => {
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_vehiculos", payload: data.results }))
    }, [])

    return (
        <div className="text-center mt-5 text-light">
            <h1>Vehículos</h1>
            <div className="row text-center mt-5 g-4">
                {store.vehiculos.map((vehiculo, i) => (
                    <div className="col-3" key={i}>
                        <div className="card bg-dark text-light h-100">
                            <img
                                src="https://placehold.co/300x280?text=Vehiculo"
                                className="card-img-top object-fit-contain"
                                style={{ height: "280px" }}
                                alt={vehiculo.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{vehiculo.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
