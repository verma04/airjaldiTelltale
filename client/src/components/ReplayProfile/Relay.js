import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Section} from './Style'
import { useParams } from 'react-router-dom';
import Notifications from './Notifications'
import moment from 'moment'
import Users from './Users'
import Comment from './Comment'

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";
import Json from  './Json' 
import Loading from '../Loading/Loading';
import Graph from './Graph';

const data = [
  {
    name: "Time A",
    uv: 10000,
    V: 2400,
    amt: 2400
  },
  {
    name: "Time B",
    uv: 3000,
    V: 1398,
    amt: 2210
  },
  {
    name: "Time C",
    uv: 2000,
    V: 9800,
    amt: 2290
  },
  {
    name: "Time D",
    uv: 2780,
    V: 3908,
    amt: 2000
  },
  {
    name: "Time E",
    uv: 1890,
    V: 4800,
    amt: 2181
  },
  {
    name: "Time F",
    uv: 2390,
    V: 3800,
    amt: 2500
  },
  {
    name: "Time G",
    uv: 3490,
    V: 4300,
    amt: 2100
  }
];
const fetchNews = async (id) => {

    const idd = id.queryKey[1]
   
    const res = await fetch(`/api/getNetworkProfile/${idd}`);
    return res.json();
  };
function Dash({}) {
  let history = useHistory();
const params = useParams()
  
    const { data, status  , isFetching } = useQuery(["Stories" , params.id ], fetchNews ,
    {
       
        refetchInterval: 500,
      }
    
    );
 
    return (
        <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
        
   <Loading/>
        
        }
        {status === "success" && (

   <>
   <Section>
<div className="flex" >
          

{data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay).map(number =>

<div className="flex-1" >

    <div className="top" >

<div className="left" >
<div className="left-top" >
<i class="fas fa-broadcast-tower"></i>

<li><span>Relay Name</span><span>{params.relay}</span></li>

</div>
<div className="left-bottom" >

<li><h4>Current Voltage</h4><span>{ parseFloat(data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage).toFixed(1)}</span></li>
<li><h4>Ampere</h4><span> {data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].batteryampere} </span></li>
</div>
    </div> 
    <div className="right" >

<div  style={{marginTop:"1rem"}} >
    <ReactSpeedometer
    maxValue={16}
    value={data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage}
    valueFormat={'d'}
    customSegmentStops={[ 0 ,10 , 12 ,  14 ,  16]}
    style={{marginTop:"1rem" ,}}
    textColor={"red"}
    width={200}
    height={110}

    segmentColors={[
        "#bf616a",
        "#d08770",
        "#ebcb8b",
        "#a3be8c",
        "#b48ead",
      ]}
    
  
  />
 
  {moment(data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].reading_time).format("dddd, MMMM Do YYYY, h:mm:ss a")}


  </div>
</div> 


    </div>

  

</div>






)}

<div className="flex-2" >

<Notifications id={params.relay}/>


</div>
 




  </div>

  {data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay).map(number =>


<Graph  relayData={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)} data={data.sensors.filter(sets => sets.location === number.relayNetworkName)} />




)}

<Users id={params.id} relayData={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)} relay={params.relay} />

<Comment  network={params.id} relay={params.relay}  />

<Json  sens={data.sensors}  id={params.id} sensor={data.sensors} data ={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)} relay={params.relay} />
 
 
 </Section >

        
   
  </>
       )}
      

   
      

    
    
    </>
    )
}

export default Dash


