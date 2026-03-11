# Claude Context — Employee Certificate Request App

This file provides context and development rules for generating code for the **Employee Certificate Request Mobile App**.

Claude must follow these constraints when generating or modifying code.

---

# Project Overview

This is a **React Native mobile application (Android & iOS)** that allows employees to:

1. Request a certificate of employment
2. View submitted certificate requests
3. View request details
4. Preview issued certificates as PDF
5. Update request purpose locally (when status = "New")

This project represents a **Minimum Viable Product (MVP)**.

Backend APIs are **mock endpoints** and primarily return success responses.

---

# Technology Stack

Framework
React Native CLI **0.84**

Language
TypeScript

UI Library
React Native Paper

Navigation
React Navigation (Stack)

Networking
Axios

State Management
Redux Toolkit

Testing
Jest

PDF Viewer
react-native-pdf

---

# Architecture

The project uses **Feature-Based Architecture**.

Each feature contains its own:

- screens
- components
- services
- state slice
- validation logic
- types

Folder structure:

```
/src
  /app
    store.ts
    rootReducer.ts

  /features
    /certificate
      /components
      /screens
      /services
      slice.ts
      types.ts
      validation.ts
      filters.ts

  /navigation
    AppNavigator.tsx

  /shared
    /components
    /services
    /utils

  /assets
    sample_certificate.pdf

  /tests
```

---

# Coding Guidelines

Use:

- Functional components
- React Hooks
- TypeScript interfaces
- Redux Toolkit slices
- Axios service layer

Follow separation of concerns:

UI → Screens / Components
State → Redux slice
Networking → Services
Validation → validation.ts

Avoid placing API calls directly inside UI components.

---

# API Endpoints

Create Certificate Request

POST

```
https://zalexinc.azure-api.net/request-certificate?subscription-key=API_KEY
```

Body

```
{
  "address_to": "Embassy",
  "purpose": "Visa Application",
  "issued_on": "12/9/2022",
  "employee_id": "123456"
}
```

Response

```
{
  "response": "Ok"
}
```

---

Retrieve Request List

GET

```
https://zalexinc.azure-api.net/request-list?subscription-key=API_KEY
```

Example Response

```
[
 {
   "address_to": "Embassy of Neptun",
   "purpose": "Visa Application",
   "issued_on": "12/9/2022",
   "employee_id": "123456"
 }
]
```

---

# Business Rules

Request Form

Fields

address_to
purpose
issued_on
employee_id

Validation

address_to → required
purpose → minimum 50 characters
issued_on → future date only
employee_id → numeric only

Inline validation messages must appear under inputs.

Submit button must be disabled when invalid.

---

# Request List Features

Display:

- Reference Number
- Address To
- Status
- Issued On
- Purpose snippet

Provide:

Sorting

- Issued On
- Status

Filtering

- Reference No (exact match)
- Address To (contains)
- Status (exact match)

---

# Request Details

Display:

Reference No
Address To
Purpose
Status
Issued On (only when status = "Done")

PDF Rules

If status = "Done"

Show bundled PDF from:

```
/assets/sample_certificate.pdf
```

If status != "Done"

Display message:

```
Certificate is yet to be issued.
```

---

# Local Update Rule

Users may update **purpose** only when:

```
status === "New"
```

The update must:

- modify Redux state
- not call backend API
- update list immediately

---

# Testing Requirements

Use Jest.

Add tests for:

1. Validation logic
2. Filtering logic
3. Purpose edit rule

UI tests are optional.

---

# Output Rules for Claude

When generating code:

- Output only code
- Do not include explanations
- Follow folder structure exactly
- Prefer small reusable components
- Keep implementation simple
