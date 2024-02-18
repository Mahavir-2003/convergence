import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import EventsData from "../Data/EventsData.js"

const Events = () => {
    return (
        <div className="w-full bg-[#111] text-white flex justify-center items-center py-[100px] flex-col">
            <div className=' pb-20 w-full flex justify-center items-center flex-col gap-y-3 md:gap-y-8'>
                <h1 className='text-4xl sm:text-5xl md:text-8xl font-Anurati text-amber-300'>Mega Events</h1>
                <h1 className='text-sm sm:text-lg font-Osiris font-thin text-[#ffffffcc]'>Convergence 2024</h1>
            </div>
            <div className='w-[90%] md:w-[70%]'>
                {
                    EventsData.map((Event, index) => {
                        return (
                            <div key={index}>
                                <h1 className='w-full text-center text-3xl sm:text-4xl md:text-5xl font-Anurati text-green-300 mt-16 mb-8'>{Event.Title}</h1>
                                <Accordion allowToggle >
                                    {
                                        Event.events.map((event, index) => {
                                            return (
                                                <AccordionItem key={index}>
                                                    <h2>
                                                        <AccordionButton _expanded={{ bg: '#868AEF', color: 'white' }}>
                                                            <Box as="span" flex='1' textAlign='left' className=' font-Anurati text-2xl font-light'>
                                                                {event.subEvent}
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4} className=' text-xl md:text-2xl text-[#ffffffbb] tracking-wider font-light'>
                                                        {event.Description}
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Events

   
