import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/SideBar"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const URL = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      
      const today = new Date().toDateString()
      const localKey = `NASA-${today}`
      const storedData = localStorage.getItem(localKey)
      if(storedData){
        setData(JSON.parse(storedData))
        console.log('Fetched from Local Storage today')
        return;
      }

      localStorage.clear()

      try{
        const res = await fetch(URL)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      }catch(err: any){
        console.log(err.message)
      }
      
    }
    fetchAPIData()
  }, [])

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  return (
    <>
      {data ? <Main data={data}/> : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal}/>}
      {data && <Footer data={data} handleToggleModal={handleToggleModal}/>}
    </>
  )
}

export default App
