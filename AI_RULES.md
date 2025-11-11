# AI Development Rules

This document outlines the rules and conventions for the AI assistant to follow when developing this application. Adhering to these rules ensures consistency, maintainability, and adherence to best practices.

## Tech Stack

This is a modern web application built with the following technologies:

*   **Framework:** React 19 with TypeScript for building a type-safe, component-based user interface.
*   **Build Tool:** Vite is used for its fast development server and optimized production builds.
*   **Styling:** Tailwind CSS is the exclusive utility-first CSS framework for all styling.
*   **State Management:** Component-level state is managed using React Hooks (`useState`, `useMemo`, `useEffect`).
*   **Data Visualization:** Recharts is used for creating interactive charts and graphs, as seen in the results screen.
*   **Component Model:** The application is built entirely with functional components and hooks.

## Library and Code Conventions

Follow these rules strictly to maintain code quality and consistency.

### Styling & UI Components

*   **Styling:** Use **Tailwind CSS** for all styling. Avoid writing custom CSS files or using inline `style` attributes unless absolutely necessary for dynamic properties.
*   **Component Library:** For any new UI elements like buttons, inputs, dialogs, cards, etc., you **must** use components from the **shadcn/ui** library. Do not build common UI patterns from scratch.

### Icons

*   **Icon Library:** Use icons from the **`lucide-react`** package exclusively.
*   **No Custom SVGs:** Do not add new SVG code directly into components. If an icon is needed, find a suitable one in `lucide-react`.

### State Management

*   **Local State:** Use React's built-in hooks (`useState`, `useReducer`) for all component-level state.
*   **Global State:** Do not add a global state management library (like Redux or Zustand) unless explicitly requested by the user.

### Data Visualization

*   **Charting Library:** Use **Recharts** for all charts and graphs to maintain consistency with the existing results screen.

### Code Structure

*   **Components:** All React components must be placed in the `src/components/` directory. Each component must be in its own file.
*   **Types:** All shared TypeScript types, enums, and interfaces should be defined in `src/types.ts`.
*   **Constants:** Application-wide constants and static data (like `QUIZ_DATA`) should be located in the `src/constants/` directory.
*   **File Naming:** Use PascalCase for component files (e.g., `ProgressBar.tsx`) and camelCase for other non-component files (e.g., `quizData.tsx`).