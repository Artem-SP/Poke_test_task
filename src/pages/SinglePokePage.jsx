import { useParams } from "react-router-dom";
import SinglePokee from "../components/SinglePoke";

export default function SinglePokePage() {
  const { name } = useParams();

  return <SinglePokee name={name} />;
}
