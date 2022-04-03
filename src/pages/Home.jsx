import React from 'react';
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { db, auth } from '../components/Firebase/firebase';
import { query, onSnapshot, addDoc, collection } from 'firebase/firestore';
import ResponsiveAppBar from '../components/navbar';


export default function Home() {

  const [data, setData] = useState("")
  const user = auth.currentUser
  

  useEffect(()=>{
    const q = query(collection(db,`events+${user.uid}`));
    const unsub = onSnapshot(q,(snap)=>{
      const array = snap.docs.map(doc=>{
        return{
          id : doc.id,
          title : doc.get('title'),
          start: doc.get('start').toDate(),
          allDay : doc.get('allDay')

        }
      });
      setData([...array]);
    })
    return ()=>{unsub()}
  })
  
  
  

   

  
 const handleDateClick = (args) => {
    if(args.jsEvent.altKey) {
      const title= prompt('Enter Title',args.dateStr);
      const event = {
        title: title ? title : args.dateStr,
        start: args.date,
        allDay: true,
        owner: user.uid
      }
      addDoc(collection(db,`events+${user.uid}`),event)
    }
  };
  


  return (
   
    
    
      
     <header>
      <ResponsiveAppBar>
      </ResponsiveAppBar>
      
   
    

 
      
    <div>
    <FullCalendar

      events={data}
      plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{left:'prev,next today',
                      center:'title',
                      right:'dayGridMonth,dayGridWeek,dayGridDay,listWeek'}}
      dateClick={handleDateClick} />
      </div>
      </header>
    
    
      
      
  )
  }
