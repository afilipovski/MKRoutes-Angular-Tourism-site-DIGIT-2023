# MKRoutes Angular Tourism Site

This project is a sample Angular application that showcases various tourist destinations in Macedonia.

## Prerequisites

To run this application, you will need:

- Node.js (version 14.16 or later)
- Angular CLI (version 11.2 or later)

## Getting Started

To get started with this application, follow these steps:

1. Clone the repository:
`git clone https://github.com/afilipovski/MKRoutes-Angular-Tourism-site-DIGIT-2023.git`

2. Navigate to the project directory:
`cd MKRoutes-Angular-Tourism-site-DIGIT-2023`

3. Install the dependencies:
`npm install`

4. Start the development server:
`ng serve`

5. Open the application in your browser by navigating to `http://localhost:4200`.

## Features

This application includes the following features:

- Home page with a list of all tourist destinations;
- Destination detail pages with information about each destination;
- Firebase integration to store and retrieve the data for each user, as well as the reviews for each destination;
- Responsive design that works well on desktop and mobile devices;
- Weather conditions for each destination;

## Routing

The following routes are defined in this application:

### Home Page Route

The home page route displays the list of all tourist destinations.

- **Path**: `''`
- **Component**: `HomeComponent`

### Place Detail Route

The place detail route displays the details of a specific tourist destination, identified by its `id` parameter.

- **Path**: `'place/:id'`
- **Component**: `PlaceComponent`

### Signup Route

The signup route displays a form for creating a new user account.

- **Path**: `'signup'`
- **Component**: `SignupComponent`

### Bookmarks Route

The bookmarks route displays a list of the user's bookmarked tourist destinations.

- **Path**: `'bookmarks'`
- **Component**: `BookmarksComponent`

### Catch-All Route

The catch-all route redirects any invalid route to the home page.

- **Path**: `'**'`
- **Redirect To**: `'/'`

## Firebase Integration

This application uses Firebase to authenticate users, and store and retrieve data. To use this feature, you will need to provide your own Firebase configuration by setting the `firebaseConfig` variable in the `environment.ts` and `environment.prod.ts` files.

## Weather API

The application uses the OpenWeatherMap API to display the current weather conditions for each tourist destination. When a user navigates to a destination's detail page, the application sends a request to the OpenWeatherMap API with the destination's latitude and longitude coordinates to retrieve the current weather information. The retrieved weather data is then displayed on the page, including the temperature, weather description, and an icon representing the current weather condition.

## Deployment

To deploy this application to a production server, you can use the following command:
`ng build --prod`
