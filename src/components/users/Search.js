import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/gituhub/githubContext';

const Search = ({ setAlert}) => {

    const githubContext = useContext(GithubContext);

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
            githubContext.searchUsers(text);
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
            {githubContext.users.length > 0  && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}> Clear</button> }
            
        </div>
       )
   
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search