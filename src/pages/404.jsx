import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      Page not Found. Go <Link to="/">home</Link>
    </div>
  );
}
