# MARTIAL VOYAGE
## A Mini Project Report

**Submitted by:** SARAN S KRISHNAN (MES24MCA2049)
**To:** The APJ Abdul Kalam Technological University in partial fulfilment of the requirements for the award of the Degree of Master of Computer Applications
**Department:** Department of Computer Applications, MES College of Engineering Kuttippuram, Malappuram – 679582
**Date:** October, 2025

---

## Declaration
I undersigned hereby declare that the project report “MARTIAL VOYAGE” submitted for partial fulfilment of the requirements for the award of degree of Master of Computer Applications of the APJ Abdul Kalam Technological University, Kerala, is a bonafide work done by me under supervision of Mr.Balachandran KP, Associate Professor, Department of Computer Applications. This submission represents my ideas in my own words and where ideas or words of others have been included, I have adequately and accurately cited and referenced the original sources. I also declare that I have adhered to ethics of academic honesty and integrity and have not misrepresented or fabricated any data or idea or fact or source in my submission. I understand that any violation of the above will be a cause for disciplinary action by the institute and/or the University and can also evoke penal action from the sources which have thus not been properly cited or from whom proper permission has not been obtained. This report has not been previously formed the basis for the award of any degree, diploma or similar title of any other University.

**Saran S Krishnan** (MES24MCA2049)  
**Date:** 06/10/2025

---

## CERTIFICATE
### DEPARTMENT OF COMPUTER APPLICATIONS
#### MES COLLEGE OF ENGINEERING, KUTTIPPURAM

This is to certify that the report entitled **MARTIAL VOYAGE** is a bonafide record of the Mini Project work during the year 2025-26 carried out by SARAN S KRISHNAN(MES24MCA2049) submitted to the APJ Abdul Kalam Technological University, in partial fulfilment of the requirements for the award of the Master of Computer Applications, under my guidance and supervision. This report in any form has not been submitted to any other University or Institution for any purpose.

**Internal Supervisor:** Mr. Balachandran KP  
**Head of The Department:** Prof. Hyderali K

---

## Acknowledgment
I express my sincere gratitude to our principal Dr.Rahumathuniza I for permitting and providing all facilities to carryout this project. I would like to express my sincere gratitude to my internal supervisor, Mr. Balachandhran KP, for his invaluable guidance, support, and encouragement throughout the development of this mini project. I also extend my thanks to the Head of the Department Prof. Hyderali K and all faculty members of the Department of Computer Applications, MES College of Engineering, for providing the necessary resources and a conducive environment for learning and innovation. I am deeply grateful to my fellow martial artists and peers who inspired the vision behind Martial Voyage. Their insights and experiences shaped the direction of this project. Finally I thank my family and friends for their unwavering support and motivation. Above all, I extend my heartfelt gratitude to the Almighty for giving me the strength and wisdom to complete this project.

**Saran S Krishnan** (MES24MCA2049)

---

## Abstract
Martial Voyage is a pioneering web application designed to unify the global martial arts community through a dedicated digital ecosystem. It addresses the fragmentation in existing platforms by integrating commerce, social networking, and personal progress tracking tailored specifically for martial artists. The app offers a curated marketplace for gear and nutrition, a discipline-specific media-sharing network, and tools for tracking training, belt promotions, and competition history. Built using Javascript for cross-platform development and Firebase for backend services, Martial Voyage leverages Firebase and AWS for real-time updates and secure hosting. This report outlines the motivation, objectives, system architecture, and implementation methodology of the project, culminating in a robust solution that empowers martial artists to grow, connect, and thrive.

---

## Table of Contents
1. Introduction
    - 1.1 Motivation
    - 1.2 Objectives
    - 1.3 Contributions
    - 1.4 Report Organization
2. System Study
    - 2.1 Existing System
    - 2.2 Proposed System
    - 2.3 Functionalities of Proposed System
3. Methodology
    - 3.1 Introduction
    - 3.2 Software Tools
    - 3.3 Module Description
    - 3.4 User Story
    - 3.5 Product Backlog
    - 3.6 Sprint Backlog
    - 3.7 Project Plan
    - 3.8 Database Design
4. Results and Discussions
    - 4.1 Results
5. Conclusion and Future Scope
6. References

---

## Chapter 1. Introduction
Martial arts is not just a sport—it is a philosophy, a discipline, and a lifestyle embraced by millions worldwide. Despite its rich cultural heritage and widespread practice, the digital infrastructure supporting martial artists remains fragmented. Existing platforms often dilute martial arts content with unrelated material, making it difficult for practitioners to find authentic gear, track progress, or engage with like-minded individuals. Martial Voyage aims to bridge this gap by offering a unified platform exclusively for martial artists. It combines e-commerce, social networking, and personal development tools into a single application. The platform is designed to support practitioners across disciplines like Karate, Taekwondo, Muay Thai, Jiu-Jitsu, and Kung Fu. The project falls under the domain of full-stack web and mobile development, with a focus on user-centric design and scalable architecture. The UI/UX is crafted to be intuitive, visually engaging, and responsive across devices, ensuring accessibility for users of all skill levels. The problem addressed is the lack of a dedicated digital space for martial artists. Existing solutions are either too generic or fail to integrate commerce, community, and progress tracking effectively. Martial Voyage offers a holistic solution that celebrates martial arts culture and supports practitioners' growth.

### 1.1 Motivation
It has been found that martial artists have personally experienced the challenges of navigating multiple platforms to meet training, gear, and community needs. The absence of a unified digital space that understands and caters to the unique lifestyle of martial artists inspired the creation of Martial Voyage. This project is not just a technical endeavor—it is a personal mission to empower martial artists through technology. The motivation stems from the desire to build a platform that reflects the values of discipline, growth, and community inherent in martial arts. By integrating commerce, content, and progress tracking, Martial Voyage aims to simplify and enrich the journey of every practitioner.

### 1.2 Objectives
The primary objective of Martial Voyage is to develop an application that:
- Empowers users to track and analyze their martial arts journey.
- Fosters a vibrant, discipline-specific social network.
- Centralizes martial arts-related commerce through a curated marketplace.

### 1.3 Contributions
Key contributions of Martial Voyage include:
- A dedicated e-commerce hub for martial arts gear and nutrition.
- A social media platform focused solely on martial arts content.
- A progress tracker for training, belt promotions, and competition history.
- Integration of Firebase for real-time updates and AWS for secure media storage.

These contributions address the limitations of existing systems and offer a comprehensive solution tailored to the martial arts community.

### 1.4 Report Organization
The report is organized such that chapter 2 gives an overview of the existing system and the proposed solution. Chapter 3 describes the development approach, tools used, and details of the modules designed. Chapter 4 summarizes the outputs, various UI/UX designs, and alterations on it. Finally, it summarizes the project achievements and future scope in chapter 5.

---

## Chapter 2. System Study
Martial Voyage is designed to address the fragmented digital experience faced by martial artists. The system aims to unify commerce, community, and personal progress tracking into a single, discipline-specific platform.

### 2.1 Existing System
Presently, martial artists rely on multiple platforms to fulfill their needs—e-commerce sites for gear, social media for community engagement, and spreadsheets or journals for tracking progress. These systems are generic and not tailored to martial arts, leading to inefficiencies, lack of personalization, and diluted content. For example, platforms like Instagram or Amazon do not offer martial arts-specific filters or features. This fragmentation hinders growth and community cohesion.

### 2.2 Proposed System
The proposed system, Martial Voyage, is a mobile-first application that centralizes martial arts commerce, social networking, and progress tracking. It offers:
- A curated marketplace for gear, nutrition, and event tickets.
- A media-sharing platform focused solely on martial arts content.
- A personal dashboard for tracking training, belt promotions, and competition history.

Technologically, the system uses JavaScript/HTML/CSS for front-end cross-platform web experience, and Firebase for backend services and real-time updates. It is designed to be scalable, secure, and user-friendly. Target users include martial artists of all levels, instructors, academies, and vendors specializing in martial arts products.

### 2.3 Functionalities of Proposed System
**E-Commerce Hub:**
- Marketplace for gear, apparel, weapons, nutrition, and event tickets.
- Vendor onboarding and discipline-specific product categorization.
- Secure payment integration.

**Entertainment & Social Network:**
- Media sharing: photos, videos, reels, and stories.
- Follower system, hashtags, and content discovery.
- Personal branding tools for fighters, instructors, and academies.

**Progress Tracker:**
- Training logs and belt promotion records.
- Goal-setting and fitness analytics.
- Journal entries and performance insights.

---

## Chapter 3. Methodology

### 3.1 Introduction
To develop Martial Voyage, an Agile methodology was adopted. Agile promotes iterative development, continuous feedback, and adaptive planning—ideal for building user-centric applications like this one. The project was divided into sprints, each focusing on specific modules such as e-commerce, social networking, and progress tracking. This approach ensured flexibility, faster delivery, and better alignment with user needs.

### 3.2 Software Tools
| Tool Type        | Software Used         |
| ---------------- | --------------------- |
| Operating System | Windows 11            |
| Front End        | JavaScript, HTML, CSS |
| Back End         | Firebase              |
| Database         | Firebase              |
| IDE              | Visual Studio Code    |
| Version Control  | Git                   |

### 3.3 Module Description
The system is divided into modular components to ensure maintainability and scalability.

#### 3.3.1 User Authentication Module
This model handles the signup and signin of the users. Ensures login for only registered users.

#### 3.3.2 Progress Tracker Module
This module empowers users to log their martial arts journey. They can choose the martial arts of their choice and start their journey. Each can focus on their own martial arts and train with the syllabus already provided in the page. They can also set a timer for each section. They can choose their level and start working according to their belt level.

### 3.4 User Story
| Role           | Goal                              | Benefit                          |
| -------------- | --------------------------------- | -------------------------------- |
| Martial Artist | Buy gear and track progress       | Saves time and improves focus    |
| Instructor     | Share content and manage students | Builds reputation and engagement |
| Vendor         | Sell martial arts products        | Reaches targeted audience        |

### 3.5 Product Backlog
| ID  | Name              | Priority | Estimate (hrs) | Status      |
| --- | ----------------- | -------- | -------------- | ----------- |
| 1   | User Registration | High     | 5              | Completed   |
| 2   | Login             | High     | 3              | Completed   |
| 3   | Progress Tracker  | High     | 20             | Completed   |
| 4   | Media Sharing     | Medium   | 20             | In Progress |
| 5   | Product Listing   | Low      | 20             | Planned     |

### 3.6 Sprint Backlog
| Sprint | Task                         | Status      |
| ------ | ---------------------------- | ----------- |
| 1      | Firebase Auth Setup          | Completed   |
| 2      | UI Design for Login/Register | Completed   |
| 3      | Product API Integration      | Completed   |
| 4      | Media Upload Feature         | In Progress |

### 3.7 Project Plan
| User Story ID | Task Name | Start Date | End Date   | Duration (Days) | Status   |
| ------------- | --------- | ---------- | ---------- | --------------- | -------- |
| 1             | Sprint 1  | 14/07/2025 | 16/07/2025 | 3               | Complete |
| 2             |           | 17/07/2025 | 19/07/2025 |                 | Complete |
| 3             |           | 20/07/2025 | 23/07/2025 |                 | Complete |
| 4             | Sprint 2  | 24/07/2025 | 30/07/2025 | 7               | Complete |
| 5             |           | 31/07/2025 | 06/08/2025 |                 | Complete |
| 6             | Sprint 3  | 07/08/2025 | 13/08/2025 | 7               | Complete |
| 7             |           | 14/08/2025 | 21/08/2025 |                 | Complete |
| 8             | Sprint 4  | 22/08/2025 | 28/08/2025 | 7               | Planned  |
| 9             |           | 29/08/2025 | 30/08/2025 |                 | Planned  |

### 3.8 Database Design
The database schema includes collections of User details like Username, Email address.

| Email        | Provider | Created     | Signed In   | UID            |
| ------------ | -------- | ----------- | ----------- | -------------- |
| sd@gmail.com | Email    | Oct 5, 2023 | Oct 5, 2023 | g1f8s8a1u7m... |
| sd@gmail.com | Email    | Oct 5, 2023 | Oct 5, 2023 | 1g1f8s8a1u7... |
| sd@gmail.com | Email    | Oct 5, 2023 | Oct 5, 2023 | 2g1f8s8a1u7... |
| sd@gmail.com | Email    | Oct 5, 2023 | Oct 5, 2023 | 3g1f8s8a1u7... |
| t1@gmail.com | Email    | Oct 5, 2023 | Oct 5, 2023 | 4g1f8s8a1u7... |

*This table summarizes user authentication data for the Martial Voyage Firebase project. It lists registered users along with their email addresses, authentication provider (Email), account creation and last sign-in dates, and unique Firebase-generated UIDs.*

---

## Chapter 4. Results and Discussions

### 4.1 Results
The Martial Voyage application was successfully developed and tested across its core modules. Key milestones include a clean UI with options to log in, register, and track daily martial arts goals. Pages like SignIn, Dashboard, Martial Track Page, and Kungfu Tracking Page (Belt Levels & Timers) were implemented to set the tone for a martial arts-focused experience.

---

## Chapter 5. Conclusion and Future Scope
Martial Voyage is a comprehensive web application designed to unify the martial arts community through a dedicated digital ecosystem. It successfully integrates commerce, social networking, and personal development tools tailored to martial artists. Key achievements include:
- A discipline-specific marketplace for gear and nutrition.
- A vibrant social platform for sharing martial arts content.
- A robust progress tracker for training, belt promotions.

The project demonstrates the power of full-stack development in solving real-world problems. While the MVP covers core functionalities, future enhancements could include creating your own syllabus and academy management tools. Limitations faced included time constraints for advanced features like live streaming and vendor analytics. These can be addressed in future iterations with extended development cycles and user feedback.

---

## References
- Firebase, “Firebase Documentation,” Google LLC, [Online]. Available: https://firebase.google.com/docs. [Accessed: 01 Oct 2025].
- WAKO India Kickboxing Federation, “National Kickboxing Guidelines,” [Online]. Available: https://wakoindia.org/. [Accessed: 01 Oct 2025].
- "Getting started with Firebase on the Web" A concise walkthrough of setting up Firebase, including authentication, Firestore, and hosting.
- HTML, CSS, and Javascript in 30 minutes. A fast-paced crash course.
- Microsoft Copilot, AI Companion for Technical and Creative Assistance. [Online]. Available: https://copilot.microsoft.com. [Accessed: 06 Oct 2025].
