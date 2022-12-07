import React, {  useState } from 'react'
import './App.css'
import Products from './components/Products';


const App = () => {
  const YOUR_APP_ID="";
  const YOUR_APP_KEY="";
  const [search,setSearch]=useState("")
  const [photos, setPhotos]= useState([])
  const [loading, setLoading] = useState(true)


  const submitHandler= (e)=>{
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=24&calories=591-722&health=alcohol-free`)
    .then(resp =>resp.json())
    .then(data=>{
      setPhotos(data.hits)
      setLoading(false)
    }) 
  }

  return (
    <div className='container'>
        <h1>Food Recipe App</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> 
          <button className='Button'>Submit</button>
        </form>
        {
          loading && <div >Loading...</div> 
        }
        { photos.length>1? <Products data= {photos}/> : null }
    </div>
  )
}

export default App
