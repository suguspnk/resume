
import React from 'react';
import { MapPin, Phone, Mail, Award, Users, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section py-20 bg-white" style={{ '--delay': 1 } as React.CSSProperties}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 text-center">
          About <span className="text-resume-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate Software Engineer with extensive experience in full-stack development, 
              cloud technologies, and software architecture. My journey in software development has equipped me with 
              a comprehensive understanding of the entire development lifecycle, from concept to deployment.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My expertise spans across various technologies including JavaScript, TypeScript, React, Node.js, 
              and cloud services like Google Cloud Platform. I'm dedicated to creating efficient, scalable, and 
              secure applications while continuously improving my skills and learning new technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me playing badminton, reading manga, or enjoying movies.
            </p>
          </div>
          
          <div className="bg-resume-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-resume-primary mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-resume-accent" size={20} />
                <span>Cebu City, Province Of Cebu, CEB 6000</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-resume-accent" size={20} />
                <span>+63 906 892 5683</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-resume-accent" size={20} />
                <span>antonio.telimban.jr@gmail.com</span>
              </div>
              
              <hr className="border-gray-300 my-4" />
              
              <h3 className="text-xl font-semibold text-resume-primary mb-2">Key Strengths</h3>
              
              <div className="flex items-center gap-3">
                <Code className="text-resume-accent" size={20} />
                <span>Full-stack development with modern technologies</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="text-resume-accent" size={20} />
                <span>Multiple Google Cloud certifications</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="text-resume-accent" size={20} />
                <span>Leadership and mentoring experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
