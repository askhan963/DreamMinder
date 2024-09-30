

## DreamMinder Frontend

**DreamMinder** is a modern goal-setting and productivity app that helps users turn their dreams into actionable goals. The frontend of this app provides an intuitive and interactive user experience for setting and managing goals. The app features user authentication, personalized reminders, progress tracking, and beautiful UI components to ensure an engaging experience.

### Features

- **User Authentication & Authorization**: 
  - Secure sign-up and login with JWT (JSON Web Tokens).
  - Access control for protected pages to enhance security.

- **Goal and Task Management**:
  - Create, update, and delete goals and tasks.
  - Visual progress tracking with timelines and progress bars.

- **Personalization**:
  - Customizable themes (light/dark mode).
  - Inspirational dashboard with motivational quotes and goal suggestions.

- **Notifications & Reminders**:
  - Reminder setup to notify users about upcoming tasks and milestones.

### Tech Stack

- **Frontend**: 
  - **React.js** for building the user interface.
  - **Redux** for state management, ensuring efficient and predictable data flow.
  - **Tailwind CSS** for responsive and elegant styling.
  - **Axios** for making HTTP requests to the backend API.

- **Deployment**:
  - The frontend is deployed on **Netlify** and can be accessed here: [https://dreamminder.netlify.app](https://dreamminder.netlify.app).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/askhhan963/DreamMinder.git
   ```
2. **Navigate to the frontend directory**:
   ```bash
   cd DreamMinder/frontend
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:  
   Create a `.env` file in the `frontend` directory with the following variables:
   ```bash
   REACT_APP_API_URL=your_backend_api_url
   ```

5. **Run the frontend app**:
   ```bash
   npm start
   ```

6. **Access the app**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Folder Structure

- **`/src`**: Main source code directory.
  - **`/components`**: Contains reusable UI components like buttons, cards, etc.
  - **`/features`**: Feature-specific code (e.g., authentication, goal management).
  - **`/pages`**: React components for each main page (e.g., Dashboard, Login, Register).
  - **`/redux`**: Contains Redux slices and store configuration.
  - **`/styles`**: Styling for the application using Tailwind CSS.

### Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs the test cases (if any are defined).
- **`npm run eject`**: Ejects the app from Create React App (not recommended).

### API Integration

- The frontend integrates with the backend server to authenticate users and manage goals.
- **API Endpoints** used in the frontend are:
  - **POST** `/api/users/login`: Log in a user.
  - **POST** `/api/users`: Register a new user.
  - **GET** `/api/goals`: Retrieve goals for the authenticated user.
  - **POST** `/api/goals`: Create a new goal.

### Deployment

The frontend of DreamMinder is hosted using **Netlify** for fast and reliable delivery:
- **Netlify URL**: [https://dreamminder.netlify.app](https://dreamminder.netlify.app)

### Contributing

If you want to contribute to the frontend of DreamMinder, feel free to fork the repository, make your changes, and submit a pull request. Contributions are always welcome!

### License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

