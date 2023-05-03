import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Prodcast = () => {
  const {items}=useSelector((select)=>select.slice.PlayPodcast)
  // console.log(items); 
  return (
    <div className='songDetail'>
      <table style={{ width: '100%' }}>
              <tbody >
                <tr>
                  <th>No.</th>
                  <th>Song</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
                {items !== undefined ? items.map((ele,i) => {
                  return <>
                    <tr style={{ textAlign: 'center'}}>
                      <td>{i+1}</td>
                      <td><img src={ele && ele.entity.data.coverArt.sources[0].url} alt="" /> <span>{ele.entity.data.name}</span> </td>
                      <td>{ele.entity.data.type}</td>
                      <td> <p>{new Date(ele.entity.data.duration.totalMilliseconds).toISOString().slice(11, 19)}</p> </td>
                    </tr>
                  </>
                }):''}
              </tbody>
            </table>
    </div>
  )
}

export default Prodcast