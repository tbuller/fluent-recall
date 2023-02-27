import React from 'react';
import { useEffect } from 'react';

const InfoCard = (track: any) => {

  return (
    <div className="info-card-container">
    {/* <div>{`-Created on ${JSON.stringify(date)}`}</div> */}
    <div>{`-Success:${(track.track).filter((x: any) => x === "Pass").length}/${(track.track).length}`}</div>
    </div>
  )
}

export default InfoCard;