import logo from '../assets/img/nubdexchange_logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0b1e3a] px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">

          <img
            src={logo}
            alt="BulldogEx"
            className="h-12 w-12 rounded-xl border-2 border-[#c8a951] bg-white object-contain shadow-md"
          />

          <div>
            <h2 className="text-lg font-black text-white tracking-tight">
              BulldogEx Shop
            </h2>
            <p className="text-sm text-gray-300 mt-1 max-w-xs leading-relaxed">
              Campus essentials made simple for every Nationalian.
            </p>

            <div className="mt-3 h-[2px] w-16 bg-[#c8a951]" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center lg:text-left">

          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#c8a951]">
            Navigation
          </p>

          <div className="flex gap-6 text-sm text-gray-300">
            <span className="hover:text-[#c8a951] cursor-pointer transition">Facebook</span>
            <span className="hover:text-[#c8a951] cursor-pointer transition">Instagram</span>
            <span className="hover:text-[#c8a951] cursor-pointer transition">Youtube</span>
          </div>
        </div>

        <div className="text-center lg:text-right">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} BulldogEx
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-1">
            Nationalian System
          </p>
        </div>

      </div>

      <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#c8a951]/50 to-transparent" />

    </footer>
  );
};

export default Footer;