import React from 'react'
import { Nav} from './Style';

import { useHistory } from "react-router-dom";
import { logoutUser } from '../../redux/actions/authActions';
import { connect } from 'react-redux'

function Navbar({logoutUser , auth:{isAuthenticated , user}}) {
    const history = useHistory();
    return (
        <div>
             <Nav>
                <div className='flex' >

                <div className='left' >
                    <div onClick={() => this.props.clickme()} className="wrapper" >
                    <i className="fas fa-bars"></i>
                </div>

                
                </div>
            <div className='mid' >

              

                </div>

              
                <div className='right' >
   
   <div className='name' >

   <i className="fas fa-user-circle"></i>
  {isAuthenticated ? ( <span> {user.user.name} </span> ) : (  <span> </span> )

  }
 
      </div>

                <div className='wrapper' >
                    
             
                </div>
                {isAuthenticated ? (   <i  onClick={() => logoutUser() } className="fas fa-sign-out-alt"></i>  ) : (  <span> </span> )}



                </div>
                </div>
                <div className='flex-sm' >

                <div className='left' >
                    <div onClick={() => this.props.clickme()} className="wrapper" >
                    <i className="fas fa-bars"></i>
                </div>

                
                </div>
            <div className='mid' >

            <img src={'https://res.cloudinary.com/airjaldi/image/upload/v1621922035/logo_1_nzz4cs.png'} ></img>

                </div>
              
                <div className='right' >
   
  

              
                {isAuthenticated ? (   <i  onClick={() => logoutUser() } className="fas fa-sign-out-alt"></i>  ) : (  <span> </span> )}



                </div>
                </div>
           
           
           
            </Nav>
        </div>
    )
}



const mapStateToProps = state => ({
    auth: state.auth,
   
  });
  
export default connect(
    mapStateToProps,
    { logoutUser }
  )( Navbar);