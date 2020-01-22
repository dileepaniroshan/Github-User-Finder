import React , { useContext } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/gituhub/githubContext';



const Users = () => {

  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  console.log('users',users);
  console.log('loading',loading);

    if(loading){
      return <Spinner/>
    }else{
      return (
        <div style={userStyle}>
            {
              
              users.map( user => (
                 <Useritem key={user.id} user={user}/>
                  //console.log(user)
                ))


            }
        </div>
    )
    }    
    
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
