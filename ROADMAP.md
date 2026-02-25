# SparkSpirit Shop Development Roadmap

This document outlines the development plan to complete the SparkSpirit Shop project.
## Phase 1: Backend Foundation
**Goal:** robust API with Authentication and Database schema.

- [x] Initial Project Setup & Git Repo
- [x] Basic Express Server Setup
- [x] Prisma Schema (User, Product, Category, Order)
- [x] Product & Category CRUD APIs
- [x] **Authentication System:** Implement User Signup/Login (JWT).
- [ ] **Cart & Order Schema:** Finalize database models for shopping cart and orders.
- [ ] **Error Handling & Validation:** Add Zod validation and global error handlers.

## Phase 2: Frontend Core & Design System (35% Scope - Ongoing)
**Goal:** Foundational frontend architecture and a stunning minimalist homepage.

- [x] **Setup:** Initialize Next.js 15 (App Router) + Tailwind CSS + TypeScript.
- [ ] **Design System:** Define custom easing curves, typography (Playfair Display & Inter), and fluid spacing constants.
- [ ] **Editorial Components:** Build Transparent Header, Hero Section with framed reveals, and interactive Product Cards.
- [ ] **Home Page:** Implement the Hero section, Featured Categories grid, and Newsletter section.

## Phase 3: Core Features & Integration
**Goal:** Connect Frontend to Backend and enable shopping flow.

- [ ] **API Integration:** Connect Frontend to Backend using Axios/TanStack Query.
- [ ] **Product Details:** Dynamic product pages with gallery, size selection, and "Add to Cart".
- [ ] **Cart Functionality:** State management (Zustand/Zotai) for cart operations.
- [ ] **Checkout Logic:** Address input, Order summary, Mock payment integration.
- [ ] **User Dashboard:** Order history and profile management.

## Phase 4: Polish, Testing & Deployment
**Goal:** Production-ready application.

- [ ] **Deployment:**
    - Backend -> Render
    - Frontend -> Vercel
- [ ] **Testing:** End-to-end testing of the "Home -> Checkout" flow.
- [ ] **UI Polish:** Micro-interactions, hover effects, smooth transitions.
- [ ] **SEO & Performance:** Meta tags, image optimization, Lighthouse audit.
- [ ] **Final Launch:** Full walkthrough and demo.

## Key Milestones

1.  **Backend MVP Complete**
2.  **Frontend Foundation & Homepage (35% target)** 
3.  **Core Features Integration**
4.  **Project Launch**
