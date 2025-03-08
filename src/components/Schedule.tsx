
import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import Transition from './Transition';

const Schedule = () => {
  const scheduleItems = [
    {
      day: "Day 1",
      date: "October 15, 2023",
      events: [
        {
          time: "09:00 AM - 10:00 AM",
          title: "Registration & Breakfast",
          description: "Check in and enjoy breakfast while networking with fellow participants.",
          location: "Main Hall"
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address, introduction to sponsors, and hackathon guidelines.",
          location: "Auditorium"
        },
        {
          time: "11:00 AM - 12:00 PM",
          title: "Team Formation",
          description: "Find team members or finalize your existing team.",
          location: "Collaboration Space"
        },
        {
          time: "12:00 PM - 01:00 PM",
          title: "Lunch Break",
          description: "Enjoy lunch provided by our sponsors.",
          location: "Dining Area"
        },
        {
          time: "01:00 PM",
          title: "Hacking Begins!",
          description: "Start working on your projects.",
          location: "All Venues"
        },
        {
          time: "06:00 PM - 07:00 PM",
          title: "Dinner",
          description: "Take a break and recharge.",
          location: "Dining Area"
        }
      ]
    },
    {
      day: "Day 2",
      date: "October 16, 2023",
      events: [
        {
          time: "09:00 AM - 10:00 AM",
          title: "Breakfast",
          description: "Start your day with a nutritious breakfast.",
          location: "Dining Area"
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Workshop: Advanced AI",
          description: "Learn about implementing AI in your projects.",
          location: "Workshop Room A"
        },
        {
          time: "02:00 PM - 03:00 PM",
          title: "Workshop: UI/UX Design",
          description: "Tips and tricks for better user experience design.",
          location: "Workshop Room B"
        },
        {
          time: "06:00 PM - 07:00 PM",
          title: "Dinner",
          description: "Evening meal and networking.",
          location: "Dining Area"
        }
      ]
    },
    {
      day: "Day 3",
      date: "October 17, 2023",
      events: [
        {
          time: "09:00 AM - 10:00 AM",
          title: "Breakfast",
          description: "Final day breakfast.",
          location: "Dining Area"
        },
        {
          time: "12:00 PM",
          title: "Hacking Ends",
          description: "All projects must be submitted by this time.",
          location: "All Venues"
        },
        {
          time: "12:00 PM - 01:00 PM",
          title: "Lunch",
          description: "Lunch break before presentations.",
          location: "Dining Area"
        },
        {
          time: "01:00 PM - 04:00 PM",
          title: "Project Presentations",
          description: "Teams present their projects to judges.",
          location: "Auditorium"
        },
        {
          time: "04:00 PM - 05:00 PM",
          title: "Judging & Deliberation",
          description: "Judges evaluate projects and select winners.",
          location: "Judging Room"
        },
        {
          time: "05:00 PM - 06:00 PM",
          title: "Closing Ceremony & Awards",
          description: "Announcement of winners and prize distribution.",
          location: "Auditorium"
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading">Event Schedule</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Here's what you can expect during our three-day hackathon event.
            Check back frequently as we may update the schedule with additional workshops and activities.
          </p>
        </Transition>
        
        <div className="mt-16 space-y-16">
          {scheduleItems.map((day, dayIndex) => (
            <Transition 
              key={dayIndex} 
              animation="fade-in-up" 
              delay={300 + dayIndex * 200}
            >
              <div className="bg-white rounded-xl border border-gray-100 smooth-shadow p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 text-primary mr-6">
                    <CalendarDays className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{day.day}</h3>
                    <p className="text-gray-500">{day.date}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="border-l-2 border-primary/20 pl-6 pb-6 relative"
                    >
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-medium">{event.title}</h4>
                          <p className="text-gray-600 mt-1">{event.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-primary/70" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={900} className="mt-16">
          <div className="bg-primary/5 p-8 md:p-12 rounded-2xl smooth-shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">Need More Details?</h3>
            <p className="text-gray-600 mb-6">
              Download the complete schedule with all workshops, mentor sessions, 
              and activities to plan your hackathon experience.
            </p>
            <a href="#" className="button-primary">
              Download Full Schedule
            </a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Schedule;
