# Vroom-Driver Architecture

## Overview

Vroom-Driver is a React Native application for drivers built using a
Hybrid Clean Architecture with MVVM-style patterns inside a
feature-based modular structure. Zustand is used as the primary state
management solution.

The application allows drivers to manage their availability, receive
ride requests, complete trips, monitor earnings and performance, and
manage their profile through a scalable and maintainable architecture.

---

## Project Structure

### Root Layers

- **core/** → Global systems (theme, storage, i18n, store, utils)
- **modules/** → Feature-based modules (auth, dashboard, activity,
  notifications, profile)
- **navigation/** → App navigation structure (stacks, tabs, deep
  linking)
- **shared/** → Reusable UI components
- **assets/** → Fonts, images, SVGs
- **types/** → Global TypeScript types

---

## Feature Module Structure

Each feature follows a consistent structure:

- screens/
- components/
- hooks/
- services/
- store/
- styles/
- types/
- constants/
- viewmodels/

---

## State Management

### Global State (Zustand)

Used for:

- Authentication state
- Theme (Light / Dark)
- Language selection
- Driver availability state
- Current active trip
- Ride request state

### Local State

- useState for UI-only logic
- Modals
- Inputs
- Bottom Sheets
- Toggles

### Feature Stores

- Optional Zustand stores inside features when needed.

---

## Architecture Pattern (MVVM Style)

- **Screens** → UI composition only
- **Hooks** → Business logic & actions
- **ViewModels** → Transform data into UI-ready models
- **Components** → Reusable UI building blocks
- **Styles** → Theme-aware styling

---

## Core Systems

### Theme System

- ThemeProvider + useTheme hook
- Zustand-based theme store
- Light/Dark mode
- Design Tokens:
  - spacing
  - radius
  - typography
  - shadows

### i18n System

- i18next + react-native-localize
- Arabic / English support
- RTL support
- Organized per module
  - auth
  - dashboard
  - activity
  - notifications
  - profile

### Storage System

- MMKV (Primary storage)
- AsyncStorage fallback
- SecureStorage for sensitive data

---

## Navigation

- RootNavigator controls app flow
- AuthStack for authentication
- MainTabs for main application

### Main Tabs

- Dashboard
- Activity
- Profile

### Nested Stacks

- DashboardStack
- ActivityStack
- ProfileStack

### Deep Linking

- Supported

---

# Driver Status Lifecycle

The driver's availability is managed using three states:

- Offline
- Online
- On Trip

Only drivers in the **Online** state are eligible to receive ride
requests.

---

# Ride Lifecycle

Driver trip flow:

Offline

↓

Online

↓

Waiting for Ride Request

↓

Incoming Ride Request

↓

Accept / Reject

↓

Navigate to Pickup

↓

Arrived

↓

Start Trip

↓

Navigate to Destination

↓

End Trip

↓

(Optional) Rate Passenger

↓

Back to Online

---

## Modules

### Auth

- Login
- Signup
- PIN-based UI
- Authentication ViewModels

---

### Dashboard

Driver overview and real-time status.

Features:

- Driver Status
- Online / Offline Switch
- Today's Active Time
- Total Trips
- Daily Earnings
- Weekly Earnings
- Monthly Earnings
- Average Rating
- Weekly Trends
- Ride Statistics
- Quick Actions
  - Wallet
  - Withdraw
  - History
  - Support

---

### Activity

Driver activity management.

Features:

- Ride History
- Monthly Statistics
- Completed Trips
- Cancelled Trips
- Ride Details

---

### Notifications

Features:

- Ride Requests
- Payment Notifications
- System Notifications
- Promotions

---

### Profile

Features:

- Driver Information
- Vehicle Information
- Language
- Theme
- Logout

---

## Shared Components

- Header
- SearchBar
- BottomSheetCard
- Status Switch
- Statistics Cards
- Ride Request Card
- Earnings Card
- Trend Chart
- Driver Action Buttons
- Driver UI Components

---

## Conventions

- Feature-first architecture
- Strict MVVM separation
- Zustand as primary global state tool
- Reusable UI preferred over duplication
- Theme-driven styling only
- All new features must follow module structure

---

## Rule of Extension

Any new feature or architectural decision MUST:

- Follow module structure
- Respect MVVM separation
- Use Zustand for global state only when necessary
- Be documented inside this architecture

---

# Coding Standards

## General Principles

- Write clean, readable, and self-documenting code.
- Prefer composition over duplication.
- Keep files small and focused on a single responsibility.
- Avoid business logic inside UI components.

---

## Naming Conventions

### Components

PascalCase

Example:

```
DriverStatusCard.tsx
```

### Hooks

camelCase starting with use

Example:

```
useDashboardViewModel.ts
```

### Files & Folders

- kebab-case
- feature-based grouping

### Constants

- UPPER_SNAKE_CASE
- grouped inside constants/

---

## Architecture Rules (Strict MVVM)

### Screens

- UI composition only
- No API calls
- No business logic
- Consume hooks/viewmodels only

### Hooks

- Handle business logic
- Handle side effects
- Bridge UI and state

### ViewModels

- Transform raw data
- Prepare UI-ready models
- No rendering

### Components

- Reusable
- Stateless whenever possible

---

## State Management Rules (Zustand)

- Use global stores ONLY for shared state
- Keep stores modular per domain
- Avoid mixing business state with UI state
- Keep state minimal

---

## Styling Rules

- Use createStyles(colors) pattern
- No hardcoded colors
- Always use theme tokens
- Support Light/Dark mode by default

---

## TypeScript Rules

- Always define explicit types
- Avoid any whenever possible
- Prefer interfaces for objects
- Prefer types for unions

---

## Import Rules

Group imports:

1. React / React Native
2. Third-party libraries
3. Internal modules
4. Assets

Avoid deep relative imports whenever possible.

---

## Feature Rules

Every feature must follow the module structure:

- screens/
- components/
- hooks/
- services/
- store/
- styles/
- types/
- constants/
- viewmodels/

No direct cross-feature imports.

Use the shared layer for reusable logic and UI.

---

## Performance Rules

- Avoid unnecessary re-renders
- Memoize heavy components when needed
- Keep state minimal
- Keep components focused on a single responsibility
