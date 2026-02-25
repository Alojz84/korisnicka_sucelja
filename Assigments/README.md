# 💈 EasyCut | Barber Booking Web Application

# 📁 Project Overview

EasyCut is a Next.js-based barber booking web application that allows users to browse barber services, select a barber, choose an available time slot, and book appointments online. The application focuses on a clear, guided booking flow, responsive design, and user authentication to provide a smooth experience on both desktop and mobile devices.

The project was developed through multiple assignment stages, including idea definition, user personas, information architecture, prototyping, and a fully implemented and deployed web application.

---

# 📂 Assignment Overview

This project was completed through a series of structured assignments, progressing from concept development to a fully deployed, production-ready web application.

## 1. Idea Pitch

### Objectives
- Identify common problems users face when booking barber appointments (phone calls, unclear availability, lack of online booking)
- Define core target user groups (customers and barbers)
- Propose a centralized web solution for barber service booking
- Define the initial scope and goals of the application based on real-world needs

---

## 2. User Personas and Information Architecture

### Outcomes
- Defined user personas representing different customer profiles
- Documented goals, motivations, and pain points for each persona
- Designed information architecture aligned with booking and account flows
- Created a sitemap showing page hierarchy and navigation structure
- Validated content structure supporting service browsing, booking, and account management

---

## 3. Next.js – Application Deployment

### Outcomes
- Initialized a Next.js project using the App Router
- Implemented pages and routes based on the sitemap
- Added primary navigation using the Next.js Link component
- Deployed the application to Vercel
- Verified correct routing and navigation in the production environment

---

## 4. Low/High-Fidelity Prototype

### Outcomes
- High-fidelity desktop homepage and booking flow prototype
- High-fidelity mobile prototype optimized for touch interaction
- Defined visual style, spacing, and content hierarchy
- Created a visual blueprint for the final Next.js implementation

---

## 5. Next.js – Dynamic Routes and Data Fetching

### Outcomes
- Implemented dynamic routes for services, barbers, and bookings
- Integrated data fetching and state management
- Built a step-by-step booking flow with real-time UI updates
- Ensured data-driven rendering based on user interaction and authentication state

---

# 💡 Features

- **Service browsing**
  - Overview of available barber services with price and duration
  - Clean and scannable service cards
  - Responsive layout for mobile and desktop

- **Barber selection**
  - Dedicated barber profiles
  - Clear association between barbers and services
  - Visual indicators for selection

- **Appointment booking**
  - Step-by-step booking flow (service → barber → date & time → confirmation)
  - Validation of available time slots
  - Booking confirmation page

- **User accounts and authentication**
  - Supabase-powered sign up, login, and logout
  - Protected routes requiring authentication
  - Redirect logic for unauthorized access

- **My Appointments**
  - Overview of booked appointments for logged-in users
  - Clear display of booking details

- **Navigation and layout**
  - Sticky top navigation bar
  - Active page highlighting
  - Desktop and mobile navigation menus
  - Click-outside behavior for mobile menus

- **Responsive design**
  - Optimized layouts for mobile and desktop
  - Touch-friendly controls
  - Consistent UI using Tailwind CSS

---

# 🛠️ Technologies Used

- **Frontend**
  - ***Next.js App Router*** – routing, layouts, and server/client components
  - ***React*** – component-based UI development
  - ***TypeScript*** – static typing and safer code
  - ***Tailwind CSS*** – utility-first responsive styling

- **Backend and Services**
  - ***Supabase*** – authentication, user sessions, and database storage

- **Tooling and Deployment**
  - ***ESLint*** with ***eslint-config-next*** – linting and best practices
  - ***TypeScript Compiler*** – type checking
  - ***Vercel*** – hosting and continuous deployment

---

# 🔍 Basic Design Principles

The EasyCut interface follows a clear set of visual and layout principles to ensure consistency and usability.

1. Consistent typography and color usage across pages
2. Clear emphasis on primary actions (booking steps)
3. Strong contrast for readability
4. Structured layouts with aligned grids and spacing
5. Grouped labels and inputs for easy scanning

---

# 🔍 Norman’s 7 Strategies

The project applies Norman’s design strategies to make the booking process intuitive and predictable.

1. ***Discoverability*** – Navigation and booking actions are always visible
2. ***Feedback*** – Buttons and form actions respond immediately
3. ***Conceptual Model*** – Booking flow matches real-world appointment scheduling
4. ***Affordances*** – Interactive elements clearly look clickable
5. ***Signifiers*** – Labels and placeholders guide user actions
6. ***Mappings*** – Booking steps follow a logical sequence
7. ***Constraints*** – Booking cannot proceed without valid selections

---

# 🔍 Heuristic Evaluation (Nielsen)

The application was evaluated using Nielsen’s usability heuristics.

1. Visibility of system status (loading and confirmation states)
2. Match between system and real-world terminology
3. User control and freedom (navigation, logout, review bookings)
4. Consistency across pages and components
5. Error prevention through form validation
6. Recognition rather than recall
7. Flexible and efficient interaction
8. Aesthetic and minimalist design
9. Clear error messages
10. Self-explanatory actions reducing the need for documentation

---

# 🔍 C.R.A.P. Principles

Visual design decisions follow the C.R.A.P. principles.

- **Contrast** – Highlighted headings and primary buttons
- **Repetition** – Consistent components and styles
- **Alignment** – Clean grid-based layouts
- **Proximity** – Related elements grouped together

---

# ⚡ Analyze the Application’s Performance

The deployed EasyCut application was evaluated using PageSpeed Insights to assess performance, accessibility, best practices, and SEO for both mobile and desktop.

---

# 🔮 Future Improvements

- Online payment integration
- Email and SMS appointment confirmations
- Barber dashboard for schedule management
- Reviews and ratings system
- Multi-language support
- Push notifications for appointment reminders
- Admin panel for service and barber management

---

# ✅ Conclusion

EasyCut was developed as a step-by-step journey from concept to implementation. Early assignments focused on defining the problem, users, and information architecture, while later stages translated those insights into high-fidelity designs and a functional Next.js application.

The final implementation delivers a responsive barber booking platform with a guided booking flow, authentication, protected routes, and a clean user interface. Together, the assignments and the final codebase demonstrate a complete UX and engineering process, resulting in a solid foundation that can be further extended with payments, notifications, and management tools.
