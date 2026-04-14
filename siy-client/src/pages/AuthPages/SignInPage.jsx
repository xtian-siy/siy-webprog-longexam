import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import NU_main from '../../assets/img/nu_main2.jpg';


const SignInPage = () => {
  return (
    <div className="flex min-h-screen w-full fixed inset-0 z-50">


      <div className="relative w-1/2 overflow-hidden hidden lg:block">

        <img src={NU_main} alt="Nu bg" className='w-full h-full ' />


        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e3a]/90 via-[#0b1e3a]/70 to-[#c8a951]/40" />


        <div className="absolute bottom-12 left-10 text-white max-w-sm">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#c8a951] mb-2">
            Nationalian Experience
          </p>
          <h2 className="text-4xl font-black leading-tight">
            Excellence<br />Starts Here
          </h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Access your portal and stay connected with your academic journey.
          </p>
        </div>


        <div className="absolute top-8 left-10 text-white font-black text-xl tracking-tight">
          NU <span className="text-[#c8a951]">MANILA</span>
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#0b1e3a] px-6 lg:px-16">

        <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-2xl shadow-2xl border border-[#1e293b]">


          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#c8a951] mb-2 text-center">
            Sign In
          </p>
          <h1 className="text-3xl font-black text-white text-center">
            Welcome Bark!
          </h1>
          <p className="text-sm text-gray-400 text-center mt-2 mb-8">
            Log in to continue your NU journey.
          </p>


          <form className="flex flex-col gap-5">


            <div>
              <label className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full rounded-xl border border-gray-700 bg-[#020617] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#c8a951]"
              />
            </div>


            <div>
              <label className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-gray-700 bg-[#020617] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#c8a951]"
              />
            </div>


            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#c8a951]" />
                Remember me
              </label>
              <button type="button" className="hover:text-[#c8a951] transition">
                Forgot?
              </button>
            </div>


            <Button Link to='/'
              type="submit"
              className="w-full rounded-xl bg-[#c8a951] hover:bg-[#b8963f] text-[#0b1e3a] py-3 text-xs font-bold tracking-[0.3em] uppercase transition-all shadow-lg hover:shadow-yellow-500/20"
            >
              Log In
            </Button>


            <div className="flex items-center gap-3">
              <div className="flex-1 h-[1px] bg-gray-700" />
              <span className="text-xs text-gray-500">or continue with</span>
              <div className="flex-1 h-[1px] bg-gray-700" />
            </div>


            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="secondary"
                className="rounded-xl py-3 text-xs tracking-[0.2em] bg-[#020617] border border-gray-700 text-white hover:border-[#c8a951]"
              >
                Google
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="rounded-xl py-3 text-xs tracking-[0.2em] bg-[#020617] border border-gray-700 text-white hover:border-[#c8a951]"
              >
                Apple
              </Button>
            </div>

          </form>

          <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
            No account yet?{" "}
            <Link
              to="/auth/signup"
              className="font-bold text-[#c8a951] hover:underline"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignInPage;