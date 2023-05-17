const Container = ({ children, rightSidebar }) => (
    <div className="flex flex-wrap lg:px-8">

        <div className="min-[1660px]:flex-1"></div>

        <div className="w-full h-full px-4 my-12 mx-auto max-w-7xl">
            {children}
        </div>

        <div className="min-[1660px]:flex-1 p-4 4xl:p-0">
            {rightSidebar}
        </div>
    </div>
)

export default Container