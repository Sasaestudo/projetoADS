import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, parseISO } from 'date-fns';
import './css/home.css';



export default function home(){
  
  const [data, setData]=useState (new Date ());
  const formattedDate = format(data, 'dd/MM/yyyy');

  return (

    <section className="ContainerSection ">
       <div className='ContainerHome'>

       </div>
       <h1>Pagina Inicial</h1>
     <div className='bloco1'>
     <article className='calendario'>
        <div>
       <h2>Calendário Acadêmico</h2>
        {formattedDate}
        <Calendar className="calendar" />
        </div> 
      </article>
     </div>
    </section>
    
  )
}