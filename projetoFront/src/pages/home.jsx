
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import 'react-big-calendar/lib/css/react-big-calendar.css';
//import moment from 'moment';
//import TimePicker from 'react-time-picker';


// const localizer = momentLocalizer(moment);

const Home = () => {
  const { userId } = useContext(UserContext)
  return(
    <section className='ContainerSection'>
    <h2>Bem vindo, Aluno!</h2>
    </section>
  )

 
};
 /* const [events, setEvents] = useState([]);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleEventTimeChange = (time) => {
    setEventTime(time);
  };

  const handleAddEvent = () => {
    if (selectedSlot && eventTitle && eventTime) {
      const newEvent = {
        start: selectedSlot.start,
        end: selectedSlot.end,
        title: eventTitle,
        time: eventTime,
      };
      setEvents([...events, newEvent]);
      setSelectedSlot(null);
      setEventTitle('');
      setEventTime(null);
    }
  };

  const eventComponents = events.map((event, index) => (
    <div key={index}>
      <span>{event.title}</span>
      <span>{event.time}</span>
    </div>
  ));

  return (
    <div>
      <div style={{ height: '50vh', width: '70%', margin:'auto'}}>
        <Calendar localizer={localizer} events={events} selectable onSelectSlot={handleSelectSlot} />
      </div>
      {selectedSlot && (
        <div style={{ height: '13vh', width: '30%', margin:'auto', border:'1px solid #d3d3d3',  }}>
          <input className='entrada'
                 type="text"
                 value={eventTitle}
                 onChange={handleEventTitleChange}
                 placeholder="Título do evento"
          />
          <div style={{fontSize:'20px', color:'black', background:'d3d3d3'}}>
          <TimePicker
                 value={eventTime}
                 onChange={handleEventTimeChange}
                 clearIcon={null}
                 disableClock={true}
                 
          />
          </div>
          
          <button onClick={handleAddEvent}>Adicionar evento</button>
        </div>
      )}
      <div>{eventComponents}</div>
    </div>
  );*/


export default Home;
