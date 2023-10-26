import React from 'react';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
} from "@material-tailwind/react";

import {reportpost} from "../../../api/apiConnections/adminConnection"
import { CLOUDINARY_POST_URL } from '../../../api/baseURL';

import { useEffect } from 'react';
import { useState } from 'react';

const Adminreportlist = () => {
  const TABLE_HEAD = ["Username", "Post", "Total Likes", "Total Report", "Userblock"];
 const [reportdetail,setReportdetail]=useState([])
useEffect(()=>{
  report()
},[])

  const report= async()=>{
    const reportresponse=await reportpost()
    setReportdetail(reportresponse)
    console.log(reportresponse,"33333333reportresponse");
  }

  return (
    <div className='w-[56rem] mx-96 mt-28'>
      <Card>
        <CardHeader>
          <h6 className="text-blue-gray-400 text-sm font-semibold">
            Admin Report List
          </h6>
        </CardHeader>
        <CardBody className="px-0 w-[56rem]">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className={`border border-blue-gray-100 bg-custom-500 p-4 ${
                      index === 0 ? 'w-24' : '' // Adjust the width for the first column
                    }`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='w-[50rem]'>

              {reportdetail.map((response)=>{
       return (
<tr>

 <td className="">
    <Typography
      variant="small"
      color="blue-gray"
      className="font-normal ms-3"
    >{response.userName}</Typography>
  </td>
  <td className="">
    <div className="flex items-center gap-3">
      {response.imgVideoURL?(<Avatar
        src={CLOUDINARY_POST_URL+response.imgVideoURL}
        size="md"
        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 ms-0"
      />):(
      <Avatar
        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        size="md"
        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 ms-0"
      />)}
      
      
      <Typography
        variant="small"
        color="blue-gray"
        className="font-bold -ms-2"
      ></Typography>
    </div>
  </td>
  
  <td className="">
    <Typography
      variant="small"
      color="blue-gray"
      className="font-normal ms-6"
    >{response.likelength}</Typography>
  </td>
  <td className="ms-20">
    <Typography
      variant="small"
      color="blue-gray"
      className="font-normal ms-4"
    >{response.reportsLength}</Typography>
  </td>
  <td>
    <Button color="blue" size="sm">
      Unblock
    </Button>
    <Button color="deep-orange" size="sm">
      Block
    </Button>
  </td>
</tr>
       )
                
              })}
              
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Adminreportlist;
