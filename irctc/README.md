# IRCTC Clone - Project Documentation

## 1. Project Overview
A functional simulation of the Indian Railways booking portal. This project demonstrates advanced DOM manipulation by using a single-page architecture where content is dynamically swapped based on user role selection, mimicking a modern SPA framework using vanilla JavaScript.

## 2. Authentication Logic Flowchart
This diagram details the complex conditional logic used to handle different user types (Indian, Non-Indian, Guest).

```mermaid
graph TD
    Start[Load Page] --> Home[Home Section]
    Home -->|Click 'Indian Login'| Indian[Load Indian Form]
    Home -->|Click 'Non-Indian Login'| NonIndian[Load Non-Indian Form]
    Home -->|Click 'Guest'| Guest{Guest Handling}
    
    Indian -->|Submit| AuthInd{Validate Credentials}
    AuthInd -->|Success| Redirect[Redirect to Railyatri]
    AuthInd -->|Fail| AlertInd[Show Error Alert]

    NonIndian -->|Submit| AuthNon{Validate Credentials + Country}
    AuthNon -->|Success| Redirect
    AuthNon -->|Fail| AlertNon[Show Error Alert]

    Guest --> Redirect
```

## 3. Dynamic Section Loaders
The application uses a `loadSection(sectionName)` function to inject HTML strings.

| Section ID | User Action | Content Loaded |
| :--- | :--- | :--- |
| `home` | Initial Load | Main dashboard links with background image. |
| `indian` | Click "Indian Login" | Username/Password form validation logic. |
| `non-indian` | Click "Non-Indian Login" | Username/Password + **Country** field validation. |
| `indian-signup` | Click "Sign Up" (Indian) | Registration form with Email validation. |

## 4. Key Files
*   `irctc.js`: Contains the core `validateLogin` and `loadSection` functions.
*   `irctc.css`: Styles for the forms and background images.
