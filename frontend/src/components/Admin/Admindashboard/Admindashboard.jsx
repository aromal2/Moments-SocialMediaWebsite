import React, { useEffect } from 'react'
import { useState } from 'react'
import {genderdetails,agedetails,userlist,totalpost,reportpost} from "../../../api/apiConnections/adminConnection"

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Admindashboard = () => {
useEffect(()=>{
  gender(),
 
  userList(),
  totalposts()
},[])


const [ages,setAge]=useState([])
const [genders,setGender]=useState([])

const [userresponses,setUseresponses]=useState("")
const [postresponses,setPostresponse]=useState("")


useEffect(()=>{
  age()
},[])
  const userList=async()=>{
    const userresponse=await userlist()
    setUseresponses(userresponse?.length)
  }

  const totalposts=async()=>{
    const postresponse=await totalpost()
    console.log(postresponse[0].count,"lllllllllllkglll");
    setPostresponse(postresponse[0].count)
  }

  // const report=async()=>{
  //   const reportresponse=await reportpost()
  //   console.log(reportresponse,"report");
  // }



  const gender=async ()=>{
const genderresponse=await genderdetails()
console.log(genderresponse,"llllllllll");
setGender(genderresponse)

  }



  console.log(genders,"7777777777777");

  const age =async ()=>{
    const ageresponse=await agedetails()
    setAge(ageresponse)

  }

  console.log(ages ,"888888888888");


  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Users by age',
    },
    series: [
      {
        name: 'Data',
        data: [
          { name: 'Age below 18', y: ages && ages.length > 0 ? ages[0]?.agelessthan18 || 0 : 0 },

          { name: 'Age between 18 and 25 ', y: ages&& ages.length > 0?ages[0]?.age18and25 || 0:0},
          { name: 'Age above 25', y:  ages&&ages.length > 0?ages[0]?.ageabove25 ||0:0},
        ],
      },
    ],
  };

  const option = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Sample Bar Chart',
    },
    xAxis: {
      categories: ['Male', 'Female'],
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'number',
        data: [genders[0]?.count  ||0, genders[1]?.count||0, ]
      },
    ],
  }

  return (
    <div className='flex flex-col'>

    <div className='overflow-ellipsis '>
<div className="flex justify-evenly items-center mt-32 ms-56">
  <div className="w-44 h-44  bg-custom-500 text-black p-4">
    <p className='ms-10 mt-14'>Total Users</p>
    <p className="text-center ">{userresponses}users</p>
  </div>
  <div className="w-44 h-44 bg-custom-500 text-white p-4">
  <p className='ms-10 mt-14'>Total Posts</p>
    <p className="text-center">{postresponses} posts</p>
  </div>
  <div className="w-44 h-44 bg-custom-500 p-4">
    <p className="text-center mt-14">Box 3</p>
  </div>
  <div className="w-44 h-44 bg-custom-500 p-4">
    <p className="text-center mt-14">Box 4</p>
  </div>
</div>
</div>



<div className='mt-10  mx-96'>
<HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    
    <div className="mt-10 mx-96">
        <HighchartsReact highcharts={Highcharts} options={option} />
      </div>
    
    </div>
  )
}

export default Admindashboard