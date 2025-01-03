import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FaExclamationTriangle size={50} className="text-red-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
