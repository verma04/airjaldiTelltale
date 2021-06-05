import React from 'react'

function Json({ relay,  data}) {
 
  
    console.log(data , 'asas')

    return (
        <div className="josn" >
         
    
            <code className="code" ng-non-bindable>
            &#123;
            "location": "abc",<br></br>

"network": "xyz",<br></br>
"battery_voltage": {data[0].voltage}, <br></br>
"email": "email@example.com", <br></br>

"phone": "0000000000" <br></br>
"network":
            &#125;
            </code>  

            </div>
        
   
    )
}

export default Json
