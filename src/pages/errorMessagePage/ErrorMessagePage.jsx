import { Link } from "react-router-dom";

const ErrorMessagePage = () => {
    
    return (
        <div className="mx-24  text-center mt-72">
            <h2 className="text-2xl font-semibold">Oops!!!</h2>
            <p className="text-lg font-medium mb-2">No data to show</p>
            <Link to='/' className="bg-stone-400 text-white px-4 py-2 rounded">Go back Home</Link>
        </div>
    );
};

export default ErrorMessagePage;