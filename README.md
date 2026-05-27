# 🚗 Fleet Booking System — Vehicle Management & Booking Platform

A full-stack fleet management and vehicle booking platform that allows organisations to manage their vehicle fleet, handle booking requests, and track availability in real time. Built with Next.js and Tailwind CSS.

## 🎯 What It Does

Managing a fleet manually — via spreadsheets or phone calls — is error-prone and slow. Fleet Booking digitises the entire process: drivers can book vehicles online, managers get a live dashboard of fleet status, and the system prevents double-bookings automatically.

## ✨ Features

### For Drivers / Users
- **Browse Available Vehicles** — Filter by type, capacity, and availability
- **Book a Vehicle** — Select date/time range, submit booking request
- **View My Bookings** — Track upcoming and past bookings
- **Cancel Booking** — Cancel with one click before the trip starts

### For Fleet Managers / Admins
- **Fleet Dashboard** — Real-time overview of all vehicles and their status
- **Vehicle Management** — Add, edit, and retire vehicles from the fleet
- **Booking Approvals** — Approve or reject booking requests
- **Availability Calendar** — Visual calendar view of vehicle schedules
- **Usage Reports** — Track mileage, booking frequency, and utilisation rates

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui, Radix UI |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Date Handling | date-fns |
| Charts | Recharts |
| Deployment | Vercel |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
# Clone the repo
git clone https://github.com/astha9900/fleet-booking.git
cd fleet-booking

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fleet-booking/
├── app/
│   ├── (dashboard)/        # Manager dashboard pages
│   ├── (booking)/          # Driver booking flow
│   ├── api/                # API route handlers
│   └── layout.tsx          # Root layout
│
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── fleet/              # Vehicle cards, fleet table
│   ├── booking/            # Booking form, calendar, status
│   └── dashboard/          # Analytics charts, summaries
│
├── lib/
│   ├── utils.ts            # Utility functions
│   └── validations.ts      # Zod schemas
│
└── styles/                 # Global styles
```

## 📊 Key Screens

| Screen | Description |
|--------|-------------|
| Fleet Overview | All vehicles with status (Available / Booked / Maintenance) |
| Booking Form | Date range picker, vehicle selector, purpose field |
| My Bookings | User's upcoming and past trips |
| Admin Dashboard | Fleet utilisation charts and booking approvals |
| Vehicle Detail | Specs, availability calendar, booking history |

## 🔮 Future Improvements

- GPS tracking integration for live vehicle location
- Driver licence verification
- Fuel and maintenance log tracking
- Email/SMS notifications for booking status
- Mobile app for drivers

## 📄 License

MIT © [Astha Bharti](https://github.com/astha9900)
