import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import Transition from './Transition';

const Schedule = () => {
  const scheduleItems = [
    {
      day: "Preparation Phase",
      date: "August - September 2025",
      events: [
        {
          time: "August 15 - September 10, 2025",
          title: "Registration Period",
          description: "Teams can register and prepare for the elimination round.",
          location: "Online"
        },
        {
          time: "September 10, 2025",
          title: "Registration Deadline",
          description: "Last day to register for the hackathon.",
          location: "Online"
        },
        {
          time: "September 12, 2025",
          title: "Problem Statement Release",
          description: "Teams receive the problem statements for the elimination round.",
          location: "Online"
        }
      ]
    },
    {
      day: "Elimination Round",
      date: "September 14-18, 2025",
      events: [
        {
          time: "September 14-18, 2025",
          title: "Project Submission Window",
          description: "Teams must submit their projects and presentations.",
          location: "Online"
        },
        {
          time: "September 18, 2025",
          title: "Results Announcement",
          description: "Top 10 teams advancing to the final round will be announced.",
          location: "Online"
        }
      ]
    },
    {
      day: "Hackathon Day 1",
      date: "September 19, 2025",
      events: [
        {
          time: "09:00 AM - 10:00 AM",
          title: "Registration & Breakfast",
          description: "Check in and enjoy breakfast while networking with fellow participants.",
          location: "JIMSEMTC Main Hall"
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address, introduction to sponsors, and hackathon guidelines.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "11:00 AM - 12:00 PM",
          title: "Team Introduction",
          description: "Teams introduce themselves and their project concepts.",
          location: "JIMSEMTC Auditorium"
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
          description: "Teams start working on their prototypes.",
          location: "Assigned Labs"
        },
        {
          time: "06:00 PM - 07:00 PM",
          title: "Dinner",
          description: "Take a break and recharge.",
          location: "Dining Area"
        },
        {
          time: "10:00 PM",
          title: "Mentor Check-in",
          description: "Teams meet with mentors for guidance and feedback.",
          location: "Assigned Labs"
        }
      ]
    },
    {
      day: "Hackathon Day 2",
      date: "September 20, 2025",
      events: [
        {
          time: "09:00 AM - 10:00 AM",
          title: "Breakfast",
          description: "Start your day with a nutritious breakfast.",
          location: "Dining Area"
        },
        {
          time: "12:00 PM - 01:00 PM",
          title: "Lunch Break",
          description: "Mid-day meal break.",
          location: "Dining Area"
        },
        {
          time: "04:00 PM",
          title: "Hacking Ends",
          description: "All teams must finalize their projects by this time.",
          location: "Assigned Labs"
        },
        {
          time: "04:30 PM - 06:30 PM",
          title: "Final Presentations",
          description: "Teams present their prototypes to judges and audience.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "06:30 PM - 07:00 PM",
          title: "Judge Deliberation",
          description: "Panel evaluates all projects and selects winners.",
          location: "Judges' Room"
        },
        {
          time: "07:00 PM - 08:00 PM",
          title: "Award Ceremony",
          description: "Winning teams announced and prizes distributed.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "08:00 PM - 09:00 PM",
          title: "Closing Dinner",
          description: "Celebration dinner for all participants.",
          location: "Dining Area"
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
            Here's what you can expect during our HACKरण 2025 event.
            The hackathon consists of an elimination round followed by a 30-hour final round.
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
