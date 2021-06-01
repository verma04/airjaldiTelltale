import React from 'react'
import { Section } from './Style'

import { logoutUser } from '../../redux/actions/authActions';

import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";



function Sidebar({logoutUser , auth:{isAuthenticated , user}}) {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/")  
    return (
        <Section>

            <div className="grid">

                <div className="img" >
                    <img src={'https://res.cloudinary.com/airjaldi/image/upload/v1621922035/logo_1_nzz4cs.png'} ></img>
                </div>  
                <div   id={splitLocation[1] === "" ? "active" : ""}  className="icon" >
                <i className="fas fa-signal"></i>
             <a  href="/"  >Dashboard

</a>
             </div>

                <div   id={splitLocation[1] === "network" ? "active" : ""}   className="icon" >
                <i className="fas fa-network-wired"></i>
             <a  href="/network"  >network

</a>
             </div>

             <div  id={splitLocation[1] === "users" ? "active" : ""}     className="icon" >
             <i className="fas fa-users"></i>
   
             <a  href="/users"  >Users

</a>
             </div>
            

             <div  id={splitLocation[1] === "reports" ? "active" : ""}     className="icon" >
                <i className="fas fa-chart-line"></i>
            <a  href="/reports"  >
Reports
</a>
             </div>


             <div    className="icon" >
                <i className="fas fa-file-archive"></i>
             <a  href="/"  >Log

</a>
             </div>

             <div    className="icon" >
                <i className="fas fa-cog"></i>
             <a  href="/"  >Settings

</a>
             </div>

             <div    className="icon" >
                <i className="fas fa-sign-out-alt"></i>
             <a  onClick={() => logoutUser() } >Logout

</a>
             </div>

     
            </div>
            
        </Section>
    )
}



const mapStateToProps = state => ({
    auth: state.auth,
   
  });
  
export default connect(
    mapStateToProps,
    { logoutUser }
  )(Sidebar);
