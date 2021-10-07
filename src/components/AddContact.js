import { useState } from 'react';
import Swal from "sweetalert2";

const AddContact = ({onSave}) => {
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!Name && !Number) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Name and Number or close the form!'
            })
        } else if (!Name && Number) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Name!'
            })
        } else if (Name && !Number) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Number!'
            })
        } else {
            onSave({ Name, Number });
        }
        setName('');
        setNumber('');
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="add Name" value={Name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Number</label>
                <input type="tel" placeholder="add Number" value={Number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Contact" />
        </form>
      )
  }
  export default AddContact