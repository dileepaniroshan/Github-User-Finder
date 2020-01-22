import React, { useState, useContext } from 'react';
import GithubContext from '../../context/gituhub/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

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
            alertContext.setAlert('Please enter something' , 'light')
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


export default Search