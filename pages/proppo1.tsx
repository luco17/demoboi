import getImageUrl from "../utils/getImage";

interface ProfileProps {
  name: string;
  imageUrl: string;
  imageSize: number;
  profession: string;
  awards: string[];
  discovery: string;
}

function Profile(props: ProfileProps) {
  const { name, imageUrl, imageSize, profession, awards, discovery } = props;

  return (
    <div>
      <h2>{name}</h2>
      <img
        src={getImageUrl(imageUrl)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(",")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Marie Curie"
        imageUrl="szV5sdG"
        imageSize={70}
        profession="Physicist and chemist"
        awards={["Polonium", "Radium", "Curium"]}
        discovery="Stuff"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        imageSize={70}
        profession="Geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
