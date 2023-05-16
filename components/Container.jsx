const Container = ({ children, rightSidebar }) => (
    <div className="flex flex-wrap lg:px-8">

        <div className="flex-1"></div>

        <div className="w-full h-full px-4 my-12 mx-auto max-w-7xl">
            {children}
        </div>

        <div className="flex-1 p-4 md:p-0">
            {rightSidebar}
        </div>
    </div>
)

export default Container