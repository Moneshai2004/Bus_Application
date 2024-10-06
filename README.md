<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyBusBooking Website</title>
</head>
<body>
    <h1>MyBusBooking Website</h1>

    <h2>Description</h2>
    <p>MyBusBooking is a bus booking website built using React.js. The website allows users to search for buses, select seats, fill in personal details, make payments, and track live bus routes. It includes user authentication and various pages to streamline the entire bus booking process.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>User Authentication:</strong> Sign In page for user authentication.</li>
        <li><strong>Bus Search:</strong> Users can search for buses by selecting origin, destination, and date.</li>
        <li><strong>Bus List:</strong> View available buses, filter by seating type, rating, price, and time.</li>
        <li><strong>Seat Selection:</strong> Interactive seat selection for users to choose their seats.</li>
        <li><strong>User Details:</strong> Enter user information for ticket booking.</li>
        <li><strong>Payment:</strong> Payment page to complete the booking.</li>
        <li><strong>Booked Tickets:</strong> Review and manage booked tickets.</li>
        <li><strong>Live Bus Route:</strong> Displays a live map for the bus's route, including real-time location tracking.</li>
    </ul>

    <h2>Project Structure</h2>
    <pre>
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
    </pre>

    <h2>Pages Overview</h2>
    <ul>
        <li><strong>SignInPage:</strong> The initial page where users can log in with their mobile number and password.</li>
        <li><strong>BusSelectionPage:</strong> Allows users to search for buses by entering origin, destination, and travel dates.</li>
        <li><strong>BusListPage:</strong> Displays a list of available buses based on the user’s search criteria.</li>
        <li><strong>SeatSelectionPage:</strong> Users can select their seats interactively.</li>
        <li><strong>UserDetailsPage:</strong> Users can fill in personal details such as name and contact information.</li>
        <li><strong>PaymentPage:</strong> After entering details, users proceed to make payments.</li>
        <li><strong>BookedTicketsPage:</strong> Shows the tickets users have already booked.</li>
        <li><strong>ViewTicketPage:</strong> Displays the bus route, live bus location, and ticket information.</li>
        <li><strong>HomePage:</strong> Displays live tracking of bus routes and available buses.</li>
    </ul>

    <h2>Installation and Setup</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/mybusbooking.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd mybusbooking</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>yarn install</code></pre>
        </li>
        <li>Run the development server:
            <pre><code>yarn start</code></pre>
            The website will be available at <a href="http://localhost:3000">http://localhost:3000</a>.
        </li>
    </ol>

    <h2>Dependencies</h2>
    <ul>
        <li><strong>React:</strong> Frontend framework.</li>
        <li><strong>React Router:</strong> For page navigation.</li>
        <li><strong>Leaflet:</strong> For displaying live bus routes on a map.</li>
        <li><strong>Formik & Yup:</strong> For form handling and validation.</li>
        <li><strong>Tailwind CSS:</strong> For styling.</li>
    </ul>

    <h2>Live Bus Route Tracking</h2>
    <p>The app uses Leaflet and OpenStreetMap for real-time bus route tracking. This feature is implemented in the <code>HomePage.js</code> and <code>ViewTicketPage.js</code> components using <code>react-leaflet</code>.</p>

    <h2>Notes</h2>
    <p>The app is styled using Tailwind CSS for a modern, responsive user interface.</p>
    <p>You can replace the mock data in <code>buses.json</code> or other files with real-time data as needed.</p>

    <h2>Future Improvements</h2>
    <ul>
        <li>Add backend services for user authentication and payment handling.</li>
        <li>Integrate real-time location tracking using an external API.</li>
    </ul>
</body>
</html>
