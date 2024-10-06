MyBusBooking Website
Description
MyBusBooking is a bus booking website built using React.js. The website allows users to search for buses, select seats, fill in personal details, make payments, and track live bus routes. It includes user authentication and various pages to streamline the entire bus booking process.

Features
User Authentication: Sign In page for user authentication.
Bus Search: Users can search for buses by selecting origin, destination, and date.
Bus List: View available buses, filter by seating type, rating, price, and time.
Seat Selection: Interactive seat selection for users to choose their seats.
User Details: Enter user information for ticket booking.
Payment: Payment page to complete the booking.
Booked Tickets: Review and manage booked tickets.
Live Bus Route: Displays a live map for the bus's route, including real-time location tracking.
Project Structure
php
Copy code
mybusbooking/
│
├── public/                 # Public assets
│
├── src/                    
│   ├── components/         # Reusable UI components
│   │   └── navigation/     # Navigation-related components
│   │       └── TabBarIcon.js   # Custom tab bar icon component
│   │   
│   ├── pages/              # Application pages
│   │   ├── SignInPage.js   # Sign In page
│   │   ├── BusSelectionPage.js  # Search page for buses
│   │   ├── BusListPage.js  # Displays available bus options
│   │   ├── SeatSelectionPage.js  # Seat selection page
│   │   ├── UserDetailsPage.js    # User details input page
│   │   ├── PaymentPage.js  # Payment page
│   │   ├── BookedTicketsPage.js  # Displays user's booked tickets
│   │   ├── ViewTicketPage.js # Displays ticket details and route
│   │   └── HomePage.js      # Home page with live bus tracking
│   │
│   ├── contexts/           # Context for managing global state (e.g., BusContext)
│   ├── constants/          # Project-wide constants (e.g., API URLs, data, icons)
│   └── App.js              # Main application component
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
Pages Overview
SignInPage: The initial page where users can log in with their mobile number and password.
BusSelectionPage: Allows users to search for buses by entering origin, destination, and travel dates.
BusListPage: Displays a list of available buses based on the user’s search criteria.
SeatSelectionPage: Users can select their seats interactively.
UserDetailsPage: Users can fill in personal details such as name and contact information.
PaymentPage: After entering details, users proceed to make payments.
BookedTicketsPage: Shows the tickets users have already booked.
ViewTicketPage: Displays the bus route, live bus location, and ticket information.
HomePage: Displays live tracking of bus routes and available buses.
Installation and Setup

Clone the repository:
git clone https://github.com/yourusername/mybusbooking.git

Navigate to the project directory:

cd mybusbooking

Install dependencies:

yarn install

Run the development server:

yarn start

The website will be available at http://localhost:3000.

Dependencies
React: Frontend framework.
React Router: For page navigation.
Leaflet: For displaying live bus routes on a map.
Formik & Yup: For form handling and validation.
Tailwind CSS: For styling.
Live Bus Route Tracking
The app uses Leaflet and OpenStreetMap for real-time bus route tracking. This feature is implemented in the HomePage.js and ViewTicketPage.js components using react-leaflet.

Notes
The app is styled using Tailwind CSS for a modern, responsive user interface.
You can replace the mock data in buses.json or other files with real-time data as needed.
Future Improvements
Add backend services for user authentication and payment handling.
Integrate real-time location tracking using an external API.
