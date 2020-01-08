import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

    state = {
       text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => {
        this.setState({ text: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '' ){
            this.props.setAlert('Please enter something' , 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
       
    }

    render(){

      const {showClear, clearUsers} = this.props;
       return(
        <div>
            <form action="" className="form" onSubmit={this.onSubmit}>
                <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" name="text" className="btn btn-dark btn-block" placeholder="Search Users..." />
            </form>

            {/* if show clear is true show the button condition  */}
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}> Clear</button> }
            
        </div>
       )
    }
}

export default Search