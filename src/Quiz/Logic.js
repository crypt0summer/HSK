import customData from '../../assets/json/data_all_kor.json';

function AllRandom() {
    const name = 'react';
    const count = customData.hsk_2022.length

    return (
         <div className = "react">{name}</div>
    );
  }

  export default Parse_Json;