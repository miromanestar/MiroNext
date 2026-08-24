import Head from "next/head";

import Breadcrumbs from "./Breadcrumbs";
import Container from "./Container";
import PageGradient from "./PageGradient";

const Template = ({ title, names, children, rightSidebar = null }) => (
  <div className="relative min-h-screen">
    <PageGradient title={title} />

    <Head>
      <title>{`Miro | ${title}`}</title>
    </Head>

    <div className="relative z-10">
      <section className="px-4 pt-28 pb-4 sm:px-6 sm:pt-36 sm:pb-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-highlight text-sm font-semibold tracking-[0.2em] uppercase">
            Project
          </p>
          <h1 className="mt-2 max-w-5xl text-3xl font-bold tracking-tight text-white drop-shadow-md sm:mt-3 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      <Breadcrumbs names={names} />
      <Container rightSidebar={rightSidebar}>{children}</Container>
    </div>
  </div>
);

export default Template;
