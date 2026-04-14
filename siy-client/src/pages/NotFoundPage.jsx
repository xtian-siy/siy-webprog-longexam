import Button from '../components/Button';
import Bella from '../assets/img/bella.jpg';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 text-center">

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
        Page Not Found
      </p>

      <h1 className="text-7xl font-extrabold text-white sm:text-8xl">
        404
      </h1>

      <p className="mt-4 max-w-md text-sm text-blue-100 sm:text-base">
        The page you're looking for might have been removed, renamed,
        or is temporarily unavailable.
      </p>

      <div className="mt-8 flex aspect-square w-100 h-100 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden shadow-lg">

        <img
          src={Bella}
          alt="Not Found Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          to="/"
          className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-blue-900 hover:bg-yellow-300 transition"
        >
          Back Home
        </Button>

        <Button
          to="/products"
          className="rounded-xl border border-yellow-400 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 transition"
        >
          View Products
        </Button>
      </div>

    </div>
  );
};

export default NotFoundPage;