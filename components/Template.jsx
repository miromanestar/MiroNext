import Banner from './Banner'
import Breadcrumbs from './Breadcrumbs'
import Container from './Container'

const Template = ({title, names, children}) => (
    <div>
        <Banner title={title} />
        <Breadcrumbs names={names} />

        <Container>
            {children}
        </Container>
    </div>
)

export default Template