const Container = ({ children, rightSidebar }) => (
    <div className="flex flex-wrap w-full h-full justify-center px-4 my-12 md:gap-8 lg:px-8">

        <div className="min-[1660px]:flex-1"></div>

        <div className="max-w-7xl">
            {children}
        </div>

        <div className="min-[1660px]:flex-1">
            {rightSidebar}
        </div>
    </div>
)

export default Container