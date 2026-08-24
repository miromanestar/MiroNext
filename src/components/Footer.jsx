import { profile, socialLinks } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-background/60 relative z-10 border-t border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="duration-200 hover:opacity-70"
            >
              <span className="sr-only">{item.name}</span>
              <img
                className="white-filter h-6 w-6"
                src={item.image}
                alt=""
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-300 md:text-left">
            &copy; 2023&ndash;{new Date().getFullYear()} {profile.name}. All
            rights reserved.
            <br />
            Facut cu un pic de nebunie.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
