import { scientists } from "../data/scientists";
import getImageUrl from "../utils/getImage";

export interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

interface ListProps {
  people: Person[];
  title: string;
}

function ListSection(props: ListProps) {
  const { people, title } = props;
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img
              src={getImageUrl(person.imageId)}
              alt={person.name}
              height={70}
              width={70}
            />
            <p>
              <b>{person.name}</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  const chemists = scientists.filter((s) => s.profession === "chemist");
  const eoElse = scientists.filter((s) => s.profession !== "chemist");

  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="EoElse" people={eoElse} />
    </article>
  );
}
