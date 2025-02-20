import { User } from "../../types/user";
import "./Card.css"; 

interface Props {
  user: User;
  onClick: () => void;
}

const UserCard = ({ user, onClick }: Props) => (
  <div className="user-card" onClick={onClick}>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.address.city}</p>
  </div>
);

export default UserCard;