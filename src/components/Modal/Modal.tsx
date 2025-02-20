import { User } from "../../types/user";
import "./Modal.css"; 
interface Props {
  user: User;
  onClose: () => void;
}

const UserModal = ({ user, onClose }: Props) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <button onClick={onClose} className="modal-close-btn">X</button>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Ciudad:</strong> {user.address.city}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Compañía:</strong> {user.company.name}</p>
    </div>
  </div>
);

export default UserModal;