import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="row justify-content-center">
				<div className="col-md-3">
					<Link to="/personajes" className="text-decoration-none">
						<div className="card p-3 text-center">Personajes</div>
					</Link>
				</div>
				<div className="col-md-3">
					<Link to="/planetas" className="text-decoration-none">
						<div className="card p-3 text-center">Planetas</div>
					</Link>
				</div>
				<div className="col-md-3">
					<Link to="/vehiculos" className="text-decoration-none">
						<div className="card p-3 text-center">Vehículos</div>
					</Link>
				</div>
			</div>
		</div>
	);
};