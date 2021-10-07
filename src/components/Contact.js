import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Contact = ({ contact, onDelete, onEdit }) => {
    return (
      <div>
        <div className="contact">
          <div>
            <p className="contactName">
              <span className="textBold">Contact Name:</span> {contact.text}
            </p>
        <p className="contactDate"><span className="textBold">Date of Completion:</span>              {contact.day}
            </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(contact.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(contact.id)} className="editIcon" /></p>
          </div>
        </div>
      </div>
    )
}
export default Contact;