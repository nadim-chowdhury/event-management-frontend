const AttendeeDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Attendee Dashboard</h1>
      <div className="flex space-x-4">
        <a
          href="/attendee/view-events"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View Events
        </a>
        <a
          href="/attendee/register-event"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Register for Event
        </a>
      </div>
    </div>
  );
};

export default AttendeeDashboard;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const AttendeeDashboard = () => {
//   const [registeredEvents, setRegisteredEvents] = useState([]);
//   const [purchasedTickets, setPurchasedTickets] = useState([]);

//   useEffect(() => {
//     const fetchRegisteredEvents = async () => {
//       const response = await axios.get('/api/attendee/registered-events');
//       setRegisteredEvents(response.data);
//     };

//     const fetchPurchasedTickets = async () => {
//       const response = await axios.get('/api/attendee/purchased-tickets');
//       setPurchasedTickets(response.data);
//     };

//     fetchRegisteredEvents();
//     fetchPurchasedTickets();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-6">Attendee Dashboard</h1>
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Registered Events</h2>
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr>
//               <th className="border

//  px-4 py-2">ID</th>
//               <th className="border px-4 py-2">Title</th>
//               <th className="border px-4 py-2">Date</th>
//               <th className="border px-4 py-2">Venue</th>
//             </tr>
//           </thead>
//           <tbody>
//             {registeredEvents.map(event => (
//               <tr key={event.id}>
//                 <td className="border px-4 py-2">{event.id}</td>
//                 <td className="border px-4 py-2">{event.title}</td>
//                 <td className="border px-4 py-2">{new Date(event.date).toLocaleDateString()}</td>
//                 <td className="border px-4 py-2">{event.venue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Purchased Tickets</h2>
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr>
//               <th className="border px-4 py-2">Ticket ID</th>
//               <th className="border px-4 py-2">Event</th>
//               <th className="border px-4 py-2">Quantity</th>
//               <th className="border px-4 py-2">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {purchasedTickets.map(ticket => (
//               <tr key={ticket.id}>
//                 <td className="border px-4 py-2">{ticket.id}</td>
//                 <td className="border px-4 py-2">{ticket.eventTitle}</td>
//                 <td className="border px-4 py-2">{ticket.quantity}</td>
//                 <td className="border px-4 py-2">${ticket.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AttendeeDashboard;
