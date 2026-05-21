import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="row justify-content-center">
				<div className="col-md-3">
					<div className="card p-3 text-center">Personajes</div>
				</div>
				<div className="col-md-3">
					<div className="card p-3 text-center">Planetas</div>
				</div>
				<div className="col-md-3">
					<div className="card p-3 text-center">Vehículos</div>
				</div>
			</div>
		</div>
	);
}; 