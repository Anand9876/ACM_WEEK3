import { useState } from 'react'
import mountain_1 from './assets/mountains1.jpg';
import mountain_2 from  './assets/mountains2.jpg';
import beach_1 from './assets/beach1.jpg';
import beach_2 from './assets/beach2.jpg';
import sky_1 from './assets/sky1.jpg';
import sky_2 from './assets/sky2.jpg';
import sunset_1 from './assets/sunset1.jpg'
import sunset_2 from './assets/sunset2.jpg'
import sunset_3 from './assets/sunset3.jpg'
import sunset_4 from './assets/sunset4.jpg'
import './App.css'

function App() {
  const [category, setCategory] = useState("")

  const img_filter=[
    {id:1,name:"mountain-1",category:'Mountains',image:mountain_1},
    {id:2,name:"mountain-2",category:'Mountains',image:mountain_2},
    {id:3,name:"beach-1",category:'Beach',image:beach_1},
    {id:4,name:"beach-2",category:'Beach',image:beach_2},
    {id:5,name:"sky-1",category:'Sky',image:sky_1},
    {id:6,name:"sky-2",category:'Sky',image:sky_2},
    {id:7,name:"sunset-1",category:'Sunset',image:sunset_1},
    {id:8,name:"sunset-2",category:'Sunset',image:sunset_2},
    {id:9,name:"sunset-3",category:'Sunset',image:sunset_3},
    {id:10,name:"sunset-4",category:'Sunset',image:sunset_4},
  ]

  const categories=img_filter.map((item)=>{
    return(
      <>
      {
        item.category===category&&
                <img src={item.image} style={{height:500}}></img>

      }
      <br></br>
      {
        item.category===category&&<p>{item.name}</p>
  }
      </>
    )
  })

  return (
    <>
    <label>Filter content:</label>
    <input value={category} ></input>
    <select value={category} onChange={(e)=>{
      setCategory(e.target.value)
    }}>
      <option>Mountains</option>
      <option>Beach</option>
      <option>Sky</option>
      <option>Sunset</option>
    </select>
    <br></br>
    <>{categories}</>
    </>
  )
}

export default App
