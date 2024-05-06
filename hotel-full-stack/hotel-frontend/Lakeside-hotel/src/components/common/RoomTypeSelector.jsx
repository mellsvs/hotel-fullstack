import React, { useEffect,useState } from 'react'
import { getRoomTypes } from '../utils/ApiFunctions'

const RoomTypeSelector = () => {
    const[roomTypes, setRoomTypes] = useState([])
    const [showNewRoomTypeInput,setShowNewRoomTypesInput] = useState(false)
    const [newRoomType,setNewRoomType] = useState("")

    useEffect(() => {
      getRoomTypes().then((data)=>{
        setRoomTypes(data)
      })

      }
    , [])
    
    const handleNewRoomInputChange = (e) =>{
        setNewRoomType(e.target.value);

    }
    const handleAddNewRoomType = () =>{
        if(newRoomType !==""){
            setRoomTypes(...roomTypes,)
        }
    }
  return (
    <div>RoomTypeSelector</div>
  )
}

export default RoomTypeSelector