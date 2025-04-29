import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export default function Education() {
  const data = [
    {
      title: "The Open University",
      date: "2013 - 2015",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Masters Of Business Administration (Technology Management)
          </div>
          <div className="text-lg">Modules:</div>
          <br />
          <div className="block text-sm">
         
            MBA Stage 1<br />
            <br /> Managing Technological Innovation
            <br />
            <br /> Technology Strategy
            <br />
            <br /> Strategic Human Resource Management
            <br />
            <br /> Corporate Finance
            <br />
            <br /> Project Management
            <br />
            <br /> The Management Initiative (Capstone Project)
            </div>
        </div>
      ),
    },
    {
      title: "The Open University",
      date: "2015 - 2016",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Postgraduate Certificate Technology Management
          </div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <div className="text-lg">Modules:</div>
            <br />

            <div className="block text-sm">
              Exploring management
              <br />
              <br /> Managing people and organizations
              <br />
              <br /> Managing financial resources and performance
              <br />
              <br /> Managing marketing
              <br />
              <br /> Operational management
              <br />
              <br /> Evidence Based Initiative
            </div>
  
          </div>
        </div>
      ),
    },
    {
      title: "Chartered Management Institute",
      date: "2014",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Level 5 Diploma - leadership and management
          </div>
          <div className="text-lg">Modules: </div>< br/>
          <div className="block text-sm">
            Being a Leader
            <br />
            <br /> Description: This unit has been designed for learners who
            want to develop or sharpen their professional edge and enhance
            personal effectiveness. Learners will evaluate the impact of an
            organizations structure and governance on management and leadership.
            They will explore theoretical models, management and leadership
            styles and approaches designed to promote a culture of mutual trust,
            respect and support. <br />
            <br />
          Learning outcomes
            <br />
            Understand factors which impact on an organization&apos;s internal
            environment <br />
            <br />
            Understand the application of management and leadership theories
            <br />
            <br />
            Understand the knowledge, skills and behaviors to be effective in a
            management and leadership role
            <br />
            <br />
            <br />
            Managing Team and Individual Performance
            <br />
            <br /> Description: This unit evaluates the reasons for managing
            performance and the approaches that can be used. It explores methods
            of rewarding the performance of individuals who exceed expectations,
            and analyses ways of managing under performance in a professional
            and supportive manner.This unit focuses on the way performance
            management, when used effectively, is able to impact on individual
            and organizational achievement. <br />
            <br />
            Learning outcomes
            <br />
            Understand the rationale for managing performance within
            organizations
            <br />
            <br />
            Understand frameworks, diagnostic and evaluation tools used for
            performance management
            <br />
            <br /> Know how to manage performance
            <br />
            <br />
            <br />
            Project Development and Control
            <br />
            <br /> Description: This unit focuses on the knowledge and skills
            required to manage projects successfully and overcome problems and
            challenges. It requires the learner to evaluate the methods and
            tools for planning tasks and activities, as well as knowing how to
            implement and manage project activities, build stakeholder
            relationships, manage resources and risk, monitor progress and
            report on outcomes. <br />
            <br />
            Learning outcomes
            <br />
            Understand the role of projects in delivering organizational
            strategy
            <br />
            <br />
            Understand processes for initiating, planning and managing projects
            <br />
            <br />
            Understand the factors which contribute to effective project
            management
            <br />
            <br />
          Managing Recruitment, Selection and Induction
            <br />
            <br /> Description: This unit has been designed to equip learners
            with an understanding of the factors which impact on recruitment.
            They will know how to develop plans and strategies for selecting
            staff, and identify approaches for retaining the best of the best.
            <br />
            Learning outcomes
            <br />
            Understand the factors that impact on recruitment and selection
            <br />
            <br /> Know how to plan for recruitment and selection
            <br />
            <br />
            Understand approaches to the recruitment and selection of a diverse
            and talented workforce
            <br />
            <br /> Understand strategies for retaining talent
            <br />
            <br />
           Organizational Financial Management
            <br />
            <br /> The aim of this unit is to enable learners to understand how
            financial systems operate within organizations. Learners will
            evaluate the sources of finance for organizations, and understand
            the principles for setting and managing budgets in line with
            regulatory and organizational guidelines. This unit has been
            designed to enhance the learner’s confidence and credibility in
            financial management, which will translate into improved management
            skills. <br />
            <br />
          Learning outcomes
            <br /> Understand finance within organizations
            <br />
            <br /> Know how to set and manage budgets <br />
            <br />
            <br />
          </div>
        </div>
      ),
    },
    {
      title: "Swindon College",
      date: "2005",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Certificate in Business management
          </div>
          <div className="block text-sm">
            This course covered the major aspects of first line management
            including hiring, performance management and basic budgeting, it was
            the first management course I had taken and was a good overview of
            being a front line manager.
          </div>
        </div>
      ),
    },
    {
      title: "University of the West Of England",
      date: "2000-2004",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            BSc(Hons) Computer Science
          </div>
          <div className="text-lg">Modules: </div>< br/>
          <div className="block text-sm">
            Analytical modelling
            <br /> score: 48
            <br />
            <br />
            Description: This module covered the discrete mathematics required
            for the understanding of computer science concepts and to be able to
            model theoretical constructs.
            <br />
            <br />
            Component based development
            <br /> score: 52
            <br />
            <br />
            Description: This module covered Java EE, java beans and built on
            previous knowledge of object based programming to culminate in
            building a e-commerce book site with the ability for people to leave
            reviews (including a star rating), buy books and register their
            details to make checkout easier and faster in future. <br />
            <br /> Computer networks and operating systems
            <br /> score: 62
            <br />
            <br />
            Description: This module covered the basics of operating systems and
            networks, the module had me building the various utilities within an
            operating system (ls, cd, pwd) and ultimately combining these into a
            custom shell on the OS, This module also covered the OSI model, IP
            addressing and routing. <br />
            <br /> Computer science concepts
            <br /> score: 77
            <br />
            <br />
            Description: This module covered the basic concepts for computer
            science including Big O notation, P vs NP problems, binary
            arithmetic and basic cryptography <br />
            <br /> Computer systems
            <br /> score: 58
            <br />
            <br />
            Description: This module covered the very basics of computing and
            the project for this module involved writing a serial port to serial
            port communication protocol with encryption using x86 assembler.{" "}
            <br />
            <br /> Computing project
            <br /> score: 75
            <br />
            <br />
            Description: This was a research based (rather than developing an
            application) piece of work where I looked at the creation,
            development and evolution of web crawlers, how they are used by
            companies to index the Internet and the ultimately built two
            different crawlers using different indexing methods to determine
            which would index the Internet the fastest given an arbitrary start
            point. <br />
            <br /> Data structures and databases
            <br /> score: 54
            <br />
            <br />
            Description: This module was an introduction to Oracle databases and
            using it to store information in a efficient way, it examined all
            aspects of database design to minimize memory and disk usage while
            still being easily expandable and adaptable. <br />
            <br /> Declarative programming
            <br /> score: 58
            <br />
            <br />
            Description: This was an introduction to declarative programming
            using PROLOG and helped to understand the differences and benefits
            of declarative programming. <br />
            <br /> Design and analysis of algorithms
            <br /> score: 57
            <br />
            <br />
            Description: This module looked at writing various sorting
            algorithms in Java (bubble sort, binary sort, quick sort) as well as
            different storing mechanisms such as binary tree&apos;s. <br />
            <br /> Formal language processing
            <br /> score: 76
            <br />
            <br />
            Description: This module looked at creating intelligent systems
            using Haskell and LISP, this combined together until ultimately I
            created a London Underground mapping system to find the quickest
            route from any two arbitrary points within the network. <br />{" "}
            Industrial placement
            <br /> score: Pass
            <br />
            <br />
            Description: I spent a year working for the NHS in WIltshire and
            applied some of the topics I had learnt over the past two years in a
            real world environment. <br />
            <br /> Information systems application context
            <br /> score: 65
            <br />
            <br />
            Description: This module Focused on the business aspects of
            technology and involved case studies using private industry and the
            public sector to discuss what went well, what didn&apos;t and why.{" "}
            <br />
            <br /> Interface engineering
            <br /> score: 58
            <br />
            <br />
            Description: This module was an introduction to user interface
            design and showed the different ways information can be conveyed to
            the end user and when different methods should be used. <br />
            <br /> Professional, commercial & legal issues
            <br /> score: 58
            <br />
            <br />
            Description: This module covered the legal and ethical issues facing
            computing and required that they were discussed and reasoning given
            for our viewpoints, the project for this module was a presentation
            for an ethical business to a group of lecturers acting as angel
            investors. <br />
            <br /> Program development
            <br /> score: 64
            <br />
            <br />
            Description: This was an introduction to Java programming and
            Focused on understanding the language and being able to solve
            problems in an object orientated model. <br />
            <br /> Software design
            <br /> score: 56
            <br />
            <br />
            Description: This module focused on how to design software using UML
            including the backend systems and the user interface. <br />
            <br /> Software engineering
            <br /> score: 48
            <br />
            <br />
            Description: This module improved upon the first year Java
            programming module and introduced advanced topics which culminated
            in writing a vending machine using object orientated principals.{" "}
            <br />
            <br /> Symbolic processing
            <br /> score: 67
            <br />
            <br />
            Description: This was an artificial intelligence module and covered
            the history of artificial intelligence, it&apos;s future and how
            AI&apos;s are built by providing the symbols that they need to
            process in order to understand the world. <br />
            <br /> Systems development
            <br /> score: 69
            <br />
            <br />
            Description: This module was Focused on web technologies and
            involved writing a fully functioning website for a company using
            HTML, perl and the UNIX rdb database. <br />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div  id="education" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
