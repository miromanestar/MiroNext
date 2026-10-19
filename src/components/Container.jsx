const Container = ({ children, rightSidebar }) => (
  <div className="my-8 w-full flex-1 px-4 sm:my-10 sm:px-6 lg:my-12 lg:px-8">
    {rightSidebar ? (
      <div className="relative mx-auto grid w-full max-w-7xl gap-6 lg:gap-8">
        <main className="min-w-0">{children}</main>
        <aside className="order-first min-w-0 min-[2200px]:absolute min-[2200px]:inset-y-0 min-[2200px]:left-full min-[2200px]:ml-8 min-[2200px]:w-88">
          {rightSidebar}
        </aside>
      </div>
    ) : (
      <main className="mx-auto w-full max-w-7xl min-w-0">{children}</main>
    )}
  </div>
);

export default Container;
