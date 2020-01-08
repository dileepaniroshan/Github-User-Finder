import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {

    // state = {
    //    text: ''
    // };

    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '' ){
            setAlert('Please enter something' , 'light')
        } else {
            searchUsers(text);
            setText('');
        }
       
    }

    return(
        <div>
            <form action="" className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
                <input type="submit" value="Search" name="text" className="btn btn-dark btn-block" placeholder="Search Users..." />
            </form>

            {/* if show clear is true show the button condition  */}
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}> Clear</button> }
            
        </div>
       )
   
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search