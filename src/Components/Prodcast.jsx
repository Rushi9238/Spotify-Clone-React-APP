import React from 'react'

const Prodcast = ({data}) => {
    // const array=data.podcastUnionV2.episodesV2.items
    // console.log(data.data.podcastUnionV2);
    const arrayOfObj = Object.entries(data).map((e) => ( { [e[0]]: e[1] } ));
    console.log(arrayOfObj);
    // console.log(arrayOfObj[0].data.podcastUnionV2.episodesV2.items)
  return (
    <div>
{
 
}
    </div>
  )
}

export default Prodcast