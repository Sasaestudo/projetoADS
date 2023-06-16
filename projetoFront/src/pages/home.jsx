import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, parseISO } from 'date-fns';
import './css/calendario.css';

export default function home(){
  
  const [data, setData]=useState (new Date ());
  const formattedDate = format(data, 'dd/MM/yyyy');

  return (

    <section className="ContainerSection">
      <h1>Pagina Inicial</h1>
      {formattedDate}
      <Calendar className="calendar"/>
      <p>What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
  )
}