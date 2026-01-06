const Container = ({ children, rightSidebar }) => (
  <div className="my-12 flex w-full flex-1 flex-wrap justify-center px-4 md:gap-8 lg:px-8">
    <div className="min-[1660px]:flex-1"></div>

    <div className="max-w-7xl">{children}</div>

    <div className="min-[1660px]:flex-1">{rightSidebar}</div>
  </div>
);

export default Container;
