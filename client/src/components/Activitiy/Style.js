

  import styled from 'styled-components'




  export const Section = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1281px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;


table {
    width: 100%;
}
h1 {
    font-family: Montserrat-Bold;
}
tr {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

#img {
  width: 5;
  display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: left;
    img {
        width: 2rem;;
    }
   
}

#con {
    margin-left: 1.5rem;;
    margin-right: 1rem;
     font-size:1.3rem;
}

th:nth-child(3){
    color: #637381;
    font-size: 0.9rem;
}
 
    
  
}

@media (max-width: 787px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .flex {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
border-radius: 15px;
height: 40rem;

.top {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 10%;
    align-items: center;
    .head {
        h2 {
            font-family: Montserrat-Bold;
            color: ${props => props.theme.colors.blue};
        }
    }

    .add-users {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        height: 70%;
        background: #ECE9F1;
  i {
color: #5B5B5B;
font-size: 1.4rem;

  }
  span {
    font-family: Montserrat-Bold;
    background: ${props => props.theme.colors.brown};
  }
    }
}

.data {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    height: 80%;
    flex-direction: column;
    align-items: center;
    .data-head {
        display: none;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
    align-items: center; 
    background: #F4F6F8;
border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
li:nth-child(2) {
    width: 17%;
}
li:nth-child(3) {
    width: 25%;
}
li:nth-child(4) {
    text-align: center;
    width: 40%;
}
li:nth-child(5) {
    text-align: center;
    width: 20%;
}
    }

    ul {
        margin-bottom: 2rem;
        display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 12rem;
  
    align-items: center;
    margin-top : 1rem ;
    margin-bottom: 1rem;
    ;

border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    
}
li:nth-child(2) {
    width: 100%;
    text-align: center;
    font-family: Montserrat-Bold;
}
li:nth-child(3) {
    width: 100%;
    text-align: center;
}
li:nth-child(4) {
    
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  margin-top: 1rem;;
    span {
     padding: 0.5rem;
     padding-left: 1rem;
     padding-right: 1rem;
    background: #2BC271;

      color:white;
      font-family: Montserrat-Bold;
    }
   
}
li:nth-child(5) {
  
    width: 20%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  
  
    span {
     padding: 0.5rem;
     padding-left: 2rem;
     padding-right: 2rem;
     background: #268EC7;
      color:white;
      font-family: Montserrat-Bold;
    }
   
   
}
    }
}
  }
    
  
}
  `