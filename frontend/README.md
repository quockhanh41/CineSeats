

# Movie Ticket Booking Website

This is a web application for booking movie tickets, built with **Vite** and **React**, featuring a modern interface styled with **Bootstrap**.
The app includes features such as movie search, ticket booking, user account management, and more.

## Technologies Used

- **Vite**: A fast build tool for fronted projects.
- **React**: A powerful library for building user interfaces.
- **Bootstrap**: A popular CSS framework that facilitates responsive design and fast styling.
- **ESLint**: A syntax-checking tool for JavaScript to ensure clean and error-free code.

## Installation

1. **Clone** and **download** projects:
    ```bash
    git clone <repo_url>
    ```
    
2. **Install dependencies**:
    ```bash
    npm install
    ```
    or, if using **yarn**:
    ```bash
    yarn install
    ```

## npm Scripts

### Run the Development Server
#### Run the following command to start the development server with Vite:
```bash
npm run dev
```
The app will be available at http://localhost:5173

#### Build for Production
To generate a production build, use:
```bash
npm run build
```
The build output will be lacated in the dist folder

#### Preview the Production Build
To test the prodcution build locally:
```bash
npm run preview
```

#### Lint Code with ESLint
Run the following command to check and fix syntax according to ESLint rules:
```bash
npm run lint
```

### Project Structure
The main folder structure for the project:
```bash
movie-ticket/
├── dist/                       # Output directory after building the app
│   ├── assets/                 # Optimized resources (images, icons, CSS, etc.)
│   ├── index.html              # Compiled HTML main file
├── public/                     # Static assets
├── src/                        # Application source code
│   ├── assets/                 # Assets like images and icons
│   ├── components/             # Reusable React components
│   ├── features/               # Core features like booking, movie management, user account
│   ├── pages/                  # Pages like Home, Movie, Booking, Profile
│   ├── services/               # API services for backend communication
│   ├── store/                  # State management with Redux or Context API
│   ├── utils/                  # Utility functions
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # Entry point of the application
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── .eslintrc.js                # ESLint configuration
├── vite.config.js              # Vite configuration
└── package.json                # Package and script definitions
```

### Routing Structure
The application uses `react-router-dom` for managing routes. Below are the defined routes along with their respective components and descriptions:

- **`/`**: **HomePage**
  - Displays the main landing page with featured movies and promotional content.

- **`/account`**: **Account**
  - Allows users to view and manage their account details, including personal information and booking history.

- **`/login`**: **Login**
  - Provides a form for users to log into their accounts. Users can enter their credentials to access their profile.

- **`/register`**: **Register**
  - Displays a registration form for new users to create an account. Users will input their details to sign up.

- **`/movie`**: **Movie**
  - Shows information of a movie. Users can see more details or book tickets.

- **`/contact`**: **Contact**
  - Provides a contact form for users to reach out to support or provide feedback. This page can also include contact information and FAQs.

- **`/payment`**: **Payment**
  - Facilitates the payment process for movie ticket bookings. Users can enter their payment details and complete their purchases.

- **`/admin`**: **Admin**
  - A dedicated page for admin users to manage the application, including adding or removing movies, viewing bookings, and user management.

