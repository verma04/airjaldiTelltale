import styled from 'styled-components'



export const Nav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
z-index: 1;
@media (min-width: 1025px) {
 
min-height:5rem;
background-color:  ${props => props.theme.colors.background};
box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);

width:100%;
top:0;
 
 .flex {
     display:flex;
     justify-content:space-between;
  
      align-items:center;
    height:100%;
    width:100%;
  
   
     .left {
    
    width:20%;
    height:100%;
   
   display:flex;
     justify-content:center;
  
      align-items:center;
      width:7%;
    .wrapper {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
 
  i {
 font-size :2rem;
 color:white;
  
  }
    }
    
     }
     .mid {
        width:20%;
    height:100%;
    display:flex;
    justify-content:flex-end;
      align-items:center;
       img {
           width:60%;
       }
     }
     .right {
        width:20%;
    height:100%;
     
    
    display:flex;
     justify-content:flex-end;
  
      align-items:center;
      .name {
        width:80%;
       
        height:100%;
        display:flex;
        justify-content:center;
      align-items:center;
      span {
        color:white;
        font-size:1.1rem;
      }
      }
   
      img {
        width:1.5rem;
        margin-left:1rem;
        margin-right:1rem;
      }
      
       i{
         font-size:1.5rem;
         margin-right:1rem;
         cursor: pointer;
         position:relative;
         color:white;
         h4{
          position: absolute;
    top: -43%;
    right: -24%;
    border: 1px solid;
    border-radius: 50%;
    padding: 0.2rem;
    background: black;
    color: white;
         }
        
       }
       .far {
        margin-right:0rem;
       }
     }
 }
   
   .flex-sm {
     display: none;
   }

}
@media (max-width: 767px) {
 
 min-height:5rem;
 background: #FFFFFF;
 box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
 
 width:100%;
 top:0;
  
  .flex {
     display: none;
  }

  .flex-sm {
     display:flex;
     justify-content:space-between;
  
      align-items:center;
    height:100%;
    width:100%;
  
   
     .left {
    
    width:20%;
    height:100%;
   
   display:flex;
     justify-content:center;
  
      align-items:center;
      width:15%;
     
    .wrapper {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
 width: 100%;

  i {
 font-size :2rem;
 color:black;
  
  }
    }
    
     }
     .mid {
        width:30%;
    height:100%;
    display:flex;
    justify-content:flex-end;
      align-items:center;
       img {
           width:100%;
       }
     }
     .right {
        width:20%;
    height:100%;
     
    
    display:flex;
     justify-content:flex-end;
  
      align-items:center;
      .name {
        width:80%;
       
        height:100%;
        display:flex;
        justify-content:center;
      align-items:center;
      span {
        color:white;
        font-size:1.1rem;
      }
      }
   
      img {
        width:1.5rem;
        margin-left:1rem;
        margin-right:1rem;
      }
      
       i{
         font-size:1.5rem;
         margin-right:1rem;
         cursor: pointer;
         position:relative;
         color:black;
         h4{
          position: absolute;
    top: -43%;
    right: -24%;
    border: 1px solid;
    border-radius: 50%;
    padding: 0.2rem;
    background: black;
    color: white;
         }
        
       }
       .far {
        margin-right:0rem;
       }
     }
 }
    
 }
`
