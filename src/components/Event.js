import React from 'react'
import Events from "../Data/EventData.js"

const Event = () => {

    const [mainEvent, setMainEvent] = React.useState(Events[0]);
    const [subEvent, setSubEvent] = React.useState(Events[0].subEvents[0]);

    const handleSubEventClick = (e) => {
        const subEventId = Number(e.currentTarget.id); // Convert id to number
        const subEvent = mainEvent.subEvents.find((subEvent) => subEvent.subEventId === subEventId);
        setSubEvent(subEvent);
    }

    const handleMainEventClick = (e) => {
        const eventId = Number(e.currentTarget.id); // Convert id to number
        const event = Events.find((event) => event.EventId === eventId);
        setMainEvent(event);
        setSubEvent(event.subEvents[0]);
    }

    return (
        <div className=' bg-[#111] w-full flex justify-start flex-col items-center'>
            <div className=' pb-16 w-full flex justify-center items-center flex-col gap-y-3 md:gap-y-8'>
                <h1 className='text-4xl sm:text-5xl md:text-8xl font-Anurati text-amber-300'>Mega Events</h1>
                <h1 className='text-sm sm:text-lg font-Osiris font-thin text-[#ffffffcc]'>of Convergence 2024</h1>
            </div>
            <p className=' text-white text-xl font-Osiris'>Select Major Event</p>
            <div className=' bg-white/50 lg:bg-transparent w-[90%] h-[1px] my-4 lg:my-2'></div>
            {/* <div className='Event w-[90%]  text-white  flex  justify-center gap-4 flex-wrap'>
                {Events.map((MainEvent) => {
                    return (
                        // <div
                        //     id={MainEvent.EventId}
                        //     onClick={handleMainEventClick}
                        //     className={`flex justify-center items-center px-4 lg:px-6 border duration-300 border-green-300 transition-all hover:cursor-pointer py-2 rounded-tl-2xl rounded-br-2xl ${mainEvent.EventId === MainEvent.EventId ? ' bg-green-300 text-black' : ''}`}
                        // >
                        //     <p className='inline-block text-sm md:text-base lg:text-lg tracking-wider text-center font-medium'>{MainEvent.EventName}</p>
                        // </div>
                        <img className=' lg:mx-[60px] mx-[20px] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[150px] object-cover aspect-video rounded-tl-3xl mb-10' src={require(`../assets/images/events/${mainEvent.MajorEventLogo}`)} alt="eventLogo"/>
                    )
                })}
            </div> */}
            <div className='Event w-[90%] grid gap-y-5 gap-x-2 grid-cols-2 sm:grid-cols-3 lg:gap-x-8 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
            {Events.map((Event) => {
                return (
                    <div id={Event.EventId}
                        onClick={handleMainEventClick}
                        className={`rounded-full  overflow-hidden  p-2  ${mainEvent.EventId === Event.EventId ? ' border-2 border-dashed border-green-300' : ''}`}>
                    <img className='lg:h-[250px] lg:w-[250px] object-cover aspect-square rounded-full' src={require(`../assets/images/events/${Event.MajorEventLogo}`)} alt="eventLogo"/>
                    </div>
                )
                 })}
            </div>
            <div className='Spacer h-[80px]'></div>
            <p className=' text-white text-xl font-Osiris'>Select Sub Event</p>
            <div className=' bg-white/50 lg:bg-transparent w-[90%] h-[1px] my-4 lg:my-2'></div>
            <div className='Sub-Event w-[90%] text-white  flex  justify-center gap-4 flex-wrap'>
                {mainEvent.subEvents.map((SubEvent) => {
                    return (
                        <div
                            id={SubEvent.subEventId}
                            onClick={handleSubEventClick}
                            className={`flex justify-center items-center px-4 lg:px-6 border duration-300 border-blue-300 transition-all hover:cursor-pointer py-2 rounded-tl-2xl rounded-br-2xl ${SubEvent.subEventId === subEvent.subEventId ? ' bg-blue-300 text-black' : ''}`}
                        >
                            <p className='inline-block text-sm md:text-base lg:text-lg tracking-wider text-center font-medium'>{SubEvent.subEventName}</p>
                        </div>
                    )
                })}
            </div>
            <div className='Spacer h-[100px]'></div>
            <div className='Sub-Event-Details w-[80%] text-white  flex  justify-center gap-4 flex-wrap'>
            {/* <div className=' bg-white/50 lg:bg-transparent w-[90%] h-[1px] my-4'></div> */}
            <p className=' text-white text-3xl sm:text-6xl text-center font-Osiris'>{subEvent.subEventName}</p>
            <div className='Event-card w-full flex flex-col xl:flex-row gap-x-10 justify-around items-center xl:items-start  p-10 '>
                <div className='flex w-[100%] xl:w-[50%] flex-col justify-start items-center'>
                <img className=' w-[200px] h-[200px] rounded-full mb-10' src={require(`../assets/images/events/${subEvent.eventLogo}`)} alt="eventLogo"/>
                <div className='pricePool flex flex-col items-center w-full mb-5'>
                        <div className='flex flex-col items-center relative w-full'>
                             <div className='price-container flex justify-around flex-col sm:flex-row gap-y-7 mt-6 w-full'>
                                <div className=' p-1 pt-0 border border-white/50 flex flex-col items-center relative'>
                                    <p className='sm:text-lg text-xs mx-10 text-center translate-y-[-50%] font-semibold tracking-widest bg-[#111] inline-block px-4 font-Hyperion'>First Price</p>
                                    <p className='sm:text-3xl text-2xl py-2 font-Osiris text-center text-[#252525] tracking-widest bg-[#d4af37] block w-full'>₹3000</p>
                                </div>
                             </div>
                             <div className='price-container flex justify-around flex-col sm:flex-row gap-y-7 mt-6 w-full'>
                             <div className=' p-1 pt-0 border border-white/50 flex flex-col items-center relative'>
                                    <p className='sm:text-lg text-xs mx-10 text-center translate-y-[-50%] font-semibold tracking-widest bg-[#111] inline-block px-4 font-Hyperion'>Second Price</p>
                                    <p className='sm:text-3xl text-2xl py-2 font-Osiris text-center text-[#252525] tracking-widest bg-[#C0C0C0] block w-full'>₹2000</p>
                                </div>
                                <div className=' p-1 pt-0 border border-white/50 flex flex-col items-center relative'>
                                    <p className='sm:text-lg text-xs mx-10 text-center translate-y-[-50%] font-semibold tracking-widest bg-[#111] inline-block px-4 font-Hyperion'>Third Price</p>
                                    <p className='sm:text-3xl text-2xl py-2 font-Osiris text-center text-[#252525] tracking-widest bg-[#c58653] block w-full'>₹1000</p>
                                </div>
                             </div>
                        </div>
                    </div>
                    <p className=' w-[90dvw] sm:w-[100%]  text-justify font-light text-lg md:text-2xl opacity-70'>{subEvent.eventDescription}</p>
                </div>
                <div className=' w-[90dvw] sm:w-[100%] xl:w-[50%] flex flex-col justify-between items-start'>
                    <p className=' text-2xl font-Osiris mb-8 underline mt-6'>* Rules & Regulations</p>
                    <ul className=' list-inside list-disc text-xl'>
                        {subEvent.eventRules.map((rule, index) => {
                            return (
                                <li key={index} className='opacity-70 pb-4'>{rule}</li>
                            )
                        })}
                    </ul>
                    <p className=' text-2xl font-Osiris mb-8 mt-8 underline'>* Cordinator Contact</p>
                    <ul className=' list-inside list-disc text-xl'>
                        {subEvent.cordinatorsContact.map((contact, index) => {
                            return (
                                <a href={`tel:${contact.contact}`} className='opacity-70 hover:opacity-100 hover:cursor-pointer duration-200'><li key={index} className='pb-4'>{contact.name + " - " + contact.contact}</li></a>
                            )
                        })}
                    </ul>
                    <p className=' text-2xl font-Osiris mb-8 mt-8 underline'>* Faculty Contact</p>
                    <ul className=' list-inside list-disc text-xl'>
                        {subEvent.facultyContact.map((contact, index) => {
                            return (
                                <a href={`tel:${contact.contact}`} className='opacity-70 hover:opacity-100 hover:cursor-pointer duration-200'><li key={index} className='pb-4'>{contact.name + " - " + contact.contact}</li></a>
                            )
                        })}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Event