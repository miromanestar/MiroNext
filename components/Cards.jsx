import Link from "next/link";
import Card from "./Card";

const Cards = ({ cards, className }) => {
  return (
    <div className={className}>
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 bg-transparent px-6 pt-16 pb-10 lg:px-8 lg:pt-24">
        <div className="relative mx-auto max-w-7xl">
          <h2 className="mx-auto w-fit rounded-lg p-3 text-center text-3xl font-bold text-white drop-shadow-md sm:text-4xl">
            My Projects
          </h2>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {cards.map((p, i) => (
              <Card key={`fcard-${i}`} data={p} />
            ))}
          </div>
        </div>
        <Link
          href="/projects"
          className="bg-highlight w-fit cursor-pointer rounded-lg p-4 font-medium text-white duration-200 hover:scale-105 hover:brightness-110"
        >
          View all my projects
        </Link>
      </div>
    </div>
  );
};

export default Cards;
