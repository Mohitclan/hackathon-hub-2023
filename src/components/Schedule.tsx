
import React from 'react';
import { CalendarDays, Clock, MapPin, Shield } from 'lucide-react';
import Transition from './Transition';

const Schedule = () => {
  const missionBriefs = [
    {
      day: "Strategic Planning Phase",
      date: "August - September 2025",
      events: [
        {
          time: "August 15 - September 10, 2025",
          title: "Agent Recruitment",
          description: "Teams assemble and prepare for the first mission.",
          location: "Digital Channels"
        },
        {
          time: "September 10, 2025",
          title: "Roster Closure",
          description: "Last day to register for the initiative.",
          location: "Digital Channels"
        },
        {
          time: "September 12, 2025",
          title: "Mission Brief Distribution",
          description: "Teams receive their assignments for the first phase.",
          location: "Digital Channels"
        }
      ]
    },
    {
      day: "Phase One: Assessment",
      date: "September 14-18, 2025",
      events: [
        {
          time: "September 14-18, 2025",
          title: "Field Testing",
          description: "Teams must submit preliminary solutions for evaluation.",
          location: "Digital Channels"
        },
        {
          time: "September 18, 2025",
          title: "Team Selection",
          description: "Top 10 teams advancing to Phase Two announced.",
          location: "Digital Channels"
        }
      ]
    },
    {
      day: "Phase Two: Day 1",
      date: "September 19, 2025",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Team Check-in & Briefing",
          description: "Register at S.H.I.E.L.D. HQ and enjoy breakfast while meeting fellow agents.",
          location: "JIMSEMTC Main Hall"
        },
        {
          time: "10:00 - 11:00",
          title: "Director's Address",
          description: "Welcome speech, mission parameters, and operational guidelines.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "11:00 - 12:00",
          title: "Team Capabilities Assessment",
          description: "Teams present their expertise and strategic approach.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "12:00 - 13:00",
          title: "Tactical Resupply",
          description: "Lunch provided by our alliance partners.",
          location: "Mess Hall"
        },
        {
          time: "13:00",
          title: "Mission Launch",
          description: "Teams deploy to begin main objective execution.",
          location: "Assigned Labs"
        },
        {
          time: "18:00 - 19:00",
          title: "Sustenance Distribution",
          description: "Evening meal and brief respite.",
          location: "Mess Hall"
        },
        {
          time: "22:00",
          title: "Progress Assessment",
          description: "Teams meet with S.H.I.E.L.D. advisors for tactical guidance.",
          location: "Assigned Labs"
        }
      ]
    },
    {
      day: "Phase Two: Day 2",
      date: "September 20, 2025",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Morning Briefing & Sustenance",
          description: "Begin final day with tactical assessment and breakfast.",
          location: "Mess Hall"
        },
        {
          time: "12:00 - 13:00",
          title: "Mid-Operation Resupply",
          description: "Lunch break to refuel.",
          location: "Mess Hall"
        },
        {
          time: "16:00",
          title: "Mission Completion",
          description: "All teams must finalize their solutions by this time.",
          location: "Assigned Labs"
        },
        {
          time: "16:30 - 18:30",
          title: "Solution Demonstrations",
          description: "Teams present their completed projects to the Council.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "18:30 - 19:00",
          title: "Council Deliberation",
          description: "Panel evaluates all solutions and selects worthy champions.",
          location: "Secured Room"
        },
        {
          time: "19:00 - 20:00",
          title: "Awards Ceremony",
          description: "Announcement of teams who've proven their worth.",
          location: "JIMSEMTC Auditorium"
        },
        {
          time: "20:00 - 21:00",
          title: "Victory Celebration",
          description: "Celebratory dinner for all participants.",
          location: "Mess Hall"
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="section-padding bg-black relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-red">
            <span className="font-marvel">MISSION TIMELINE</span>
          </h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Your mission, should you choose to accept it, follows this operational timeline.
            Intelligence suggests this will be a challenging 30-hour deployment requiring your best strategic thinking.
          </p>
        </Transition>
        
        <div className="mt-16 space-y-16">
          {missionBriefs.map((mission, dayIndex) => (
            <Transition 
              key={dayIndex} 
              animation="fade-in-up" 
              delay={300 + dayIndex * 200}
            >
              <div className="bg-black/60 rounded-xl border border-marvel-red/20 shadow-marvel p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-marvel-red/10 text-marvel-red mr-6">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white font-marvel">{mission.day}</h3>
                    <p className="text-gray-400">{mission.date}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {mission.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="border-l-2 border-marvel-red/20 pl-6 pb-6 relative"
                    >
                      <div className="absolute w-4 h-4 bg-marvel-red rounded-full -left-[9px] top-1"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-medium text-white font-marvel">{event.title}</h4>
                          <p className="text-gray-400 mt-1">{event.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-marvel-red" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-marvel-red" />
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
          <div className="bg-black/60 p-8 md:p-12 rounded-2xl border border-marvel-red/20 shadow-marvel text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white font-marvel">FULL MISSION BRIEF</h3>
            <p className="text-gray-300 mb-6">
              Download the complete mission documentation with all workshops, advisor sessions, 
              and tactical information to plan your operation.
            </p>
            <a href="#" className="bg-marvel-red text-white py-3 px-8 rounded hover:bg-marvel-red/90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-marvel inline-block">
              Download Intelligence File
            </a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Schedule;
