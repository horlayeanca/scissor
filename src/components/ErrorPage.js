import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <h1 className="text-3xl font-bold font-gilroy-light text-red-500">
        Oops!!!
      </h1>
      <p className="text-lg font-gilroy-light">
        The page you are looking for does not exist..
      </p>
      <p className="text-lg font-gilroy-light">
        Click{" "}
        <Link to="/" className="text-blue-500 italic">
          here
        </Link>{" "}
        to go back to the homepage.
      </p>
    </div>
  );
};

export default ErrorPage;
