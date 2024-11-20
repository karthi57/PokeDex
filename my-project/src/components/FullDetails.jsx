import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function FullDetails() {

  const [data, setData] = useState([]);

  const [params] = useParams();
  console.log(params)
  return (
    <div>FullDetails</div>
  )
}

export default FullDetails