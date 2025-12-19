import Head from "next/head";
import Banner from "./Banner";
import Breadcrumbs from "./Breadcrumbs";
import Container from "./Container";

const Template = ({ title, names, children, rightSidebar = <></> }) => (
  <div>
    <Banner title={title} />
    <Breadcrumbs names={names} />

    <Head>
      <title>{`Miro | ${title}`}</title>
    </Head>

    <Container rightSidebar={rightSidebar}>{children}</Container>
  </div>
);

export default Template;
