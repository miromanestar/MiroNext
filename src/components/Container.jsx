const Container = ({ children, rightSidebar }) => (
  <div className="my-8 w-full flex-1 px-4 sm:my-10 sm:px-6 lg:my-12 lg:px-8">
    {rightSidebar ? (
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:gap-8 min-[2200px]:max-w-[128rem] min-[2200px]:grid-cols-[22rem_minmax(0,80rem)_22rem]">
        <div className="hidden min-[2200px]:block" aria-hidden="true" />
        <main className="min-w-0">{children}</main>
        <aside className="min-w-0">{rightSidebar}</aside>
      </div>
    ) : (
      <main className="mx-auto w-full max-w-7xl min-w-0">{children}</main>
    )}
  </div>
);

export default Container;
