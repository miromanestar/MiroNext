import { profile, socialLinks } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
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
          <p className="text-center text-xs leading-5 text-gray-500 md:text-left">
            &copy; 2023 {profile.name}. All rights reserved.
            <br />
            Facut cu un pic de nebunie.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
