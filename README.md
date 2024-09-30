## DreamMinder

**DreamMinder** is a modern goal-setting and productivity app that helps users turn their dreams into actionable goals. With intuitive task management, personalized reminders, progress tracking, and user authentication, DreamMinder keeps users focused on achieving their personal and professional milestones. The app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and features secure authentication for a personalized experience.

### Features

- **User Authentication & Authorization**: 
  - Secure sign-up and login with JWT (JSON Web Tokens).
  - Protected routes to ensure goal and task management is available only to authenticated users.
  - Password encryption for user data security.

- **Goal and Task Management**:
  - Create, categorize, and manage personal and professional goals.
  - Break down goals into smaller tasks with customizable deadlines and priorities.
  - Visual progress tracking through timelines and progress bars.

- **Notifications & Reminders**:
  - Set reminders for upcoming tasks and milestones.
  - Receive daily and weekly progress reports.

- **Dashboard & Analytics**:
  - Visualize goal progress using charts and statistics.
  - Track completed, pending, and overdue tasks.

- **Collaborative Goal Setting**:
  - Share goals with others and work on them collaboratively.

- **Personalization**:
  - Customizable themes (light/dark mode).
  - Inspirational dashboard with motivational quotes and goal suggestions.

- **Habit Tracking**:
  - Integrate habits linked to goals for consistent progress.
  - Visual habit streaks and performance metrics.

### Tech Stack

- **Frontend**: 
  - React.js
  - Redux for state management
  - Tailwind CSS for styling

- **Backend**:
  - Node.js and Express.js for API and business logic
  - MongoDB as the database for secure data storage

- **Authentication**:
  - JSON Web Tokens (JWT) for secure user sessions
  - Bcrypt for password encryption

- **Deployment**: 
  - Deployed using Vercel and Netlify

### Acknowledgments
- **Netlify Deployment**: The frontend of DreamMinder is deployed on [Netlify](https://dreamminder.netlify.app).
- **Vercel Deployment**: The backend server is deployed using Vercel to provide a seamless serverless experience.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/askhan963/DreamMinder.git
   ```
2. **Install the dependencies**:
   ```bash
   cd DreamMinder
   npm install
   cd client
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the root directory with the following variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the app**:
   - Start the backend server:
     ```bash
     npm run dev
     ```
   - Start the React frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the app**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

### API Endpoints

- **POST** `/api/users`: Register a new user.
- **POST** `/api/users/login`: Log in a user and receive a JWT token.
- **GET** `/api/goals`: Get all goals for the authenticated user.
- **POST** `/api/goals`: Create a new goal (authentication required).

### Contributing

If you'd like to contribute to DreamMinder, feel free to submit pull requests or open issues with ideas and improvements.

