# La Quinta Pata  Frontend

## 🎯 Project Overview

The Community Archive of Migrant Memories Exhibition (MACMM) is a web platform created to catalog and disseminate audiovisual records that narrate migrant experiences. The videos are organized into five thematic axes: autobiography, objects, discrimination based on origin, gender discrimination, and resistance. In addition to the catalog, the platform allows users to view the participants’ journeys to Barcelona on an interactive map and to consult general information about the project and its team. Built with React (frontend), Spring Boot (backend), and PostgreSQL (database), the application follows an MVC architecture and implements a RESTful API.

## ⚙️ Technology Stack

| Category                  | Technologies                                       |
| ------------------------- | -------------------------------------------------- |
| **Frontend Framework**    | React 19 + Vite 7                                  |
| **Styling**               | Tailwind CSS v4 + PostCSS                          |
| **Routing**               | React Router DOM v7                                |
| **State Management**      | React Context API (Auth, Toast)                    |
| **HTTP Client**           | Axios with JWT Authentication                      |
| **UI Components & Icons** | Lucide React + React Icons                         |
| **Notifications**         | React Hot Toast                                    |
| **Error Handling**        | React Error Boundary + Toast Notifications         |
| **Testing**               | Vitest                                             |
| **Version Control**       | Git + GitHub                                       |

## ✨ Features

### 🔓 Public Access

- Landing page with platform overview
- Hero section with call-to-action
- Features showcase
- How it works section
- Participants and collaborators information
- Video catalog browsing
- Interactive map showing participants' journeys
- Footer with links and information

### 🔐 Authentication

- User registration with email and password
- Secure login with JWT tokens in Authorization header
- Persistent authentication (localStorage)
- Secure logout functionality
- Password visibility toggle
- Form validation with error messages
- Admin authentication for management panel

### 📹 Video & Content Management

- **Browse**: View all videos organized by thematic axes
- **Search**: Find videos by title, keywords, and themes
- **Filter**: Filter content by categories (autobiography, objects, discrimination, gender, resistance)
- **Details**: View comprehensive video information and metadata
- User comments and community engagement
- Video player with controls

### 📍 Interactive Map

- View all participants' journeys on an interactive map
- Click markers to see participant details
- Filter locations by origin and destination
- Responsive design for mobile and desktop
- Real-time location updates

### 🎛️ Admin Dashboard

- Comprehensive management panel for administrators
- Video content management (CRUD operations)
- User management
- Content moderation capabilities
- Upload and manage video content

### 📊 User Dashboard

- User profile and preferences
- Saved favorites and watchlist
- Viewing history
- Community contributions
- Personal collections

### 🔔 User Feedback

- Toast notifications for success messages
- Toast notifications for error messages
- Toast notifications for warnings
- Loading spinner during async operations
- Error boundary for handling runtime errors
- Form validation feedback

### 🌍 Multilingual Support

- Support for multiple languages via i18next
- Browser language detection
- Easy language switching
- Translated UI elements

### 📱 Responsive Design

- Mobile-first design approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Accessible navigation
- Touch-friendly interface
- 3D animated elements on landing page

## 🧭 Architecture

The application follows a component-based architecture with clear separation of concerns:

### Directory Structure

```
src/
├── api/                           
│   ├── authService.js           
│   ├── videoService.js           
│   ├── userService.js            
│   └── config.js                 
│
├── components/
│   ├── auth/                     
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── common/                   
│   │   ├── ErrorBoundary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Button.jsx
│   │   ├── InputField.jsx
│   │   └── ErrorMessage.jsx
│   ├── videos/                   
│   │   ├── VideoCard.jsx
│   │   ├── VideoGrid.jsx
│   │   ├── VideoFilters.jsx
│   │   ├── VideoPlayer.jsx
│   │   └── VideoDetails.jsx
│   ├── map/                      
│   │   └── MapDisplay.jsx        
│   ├── layout/                   
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── AdminSidebar.jsx
│   ├── admin/                    
│   │   ├── Dashboard.jsx
│   │   ├── VideoManagement.jsx
│   │   ├── UserManagement.jsx
│   │   └── AdminPanel.jsx
│   └── landing/                  
│       ├── HeroSection.jsx
│       ├── FeaturesSection.jsx
│       ├── GlobeScene.jsx        
│       ├── HowItWorksSection.jsx
│       ├── TeamSection.jsx
│       └── FooterSection.jsx
│
├── context/                      
│   ├── AuthContext.jsx           
│   ├── AuthProvider.jsx          
│   └── ToastContext.jsx          
│
├── hooks/                      
│   ├── useAuth.js               
│   └── useToast.js              
│
├── pages/                      
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Landing.jsx
│   ├── Videos.jsx
│   ├── Map.jsx
│   └── AdminPanel.jsx
│
├── styles/                     
│   └── index.css                
│
├── utils/                 
│   ├── validators.js          
│   └── constants.js             
│
├── i18n/                         
│   ├── config.js              
│   └── locales/                 
│       ├── en.json
│       └── es.json
│
├── tests/                        
│   └── GlobeScene.test.jsx
│   └── AnimatedRoute.test.jsx
│
└── App.jsx                       
```

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- npm ≥ 10.x
- Backend server running on `http://localhost:8080`

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/La-Quinta-Pata/front.git
cd front
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

4. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

The project includes comprehensive tests:

```bash
# Run all tests
npm test
```

## 📝 Git Workflow

The project uses feature branch workflow:

- `main` - Production-ready code
- `dev` - Development integration branch
- `feature/*` - Feature branches for new functionality
- `fix/*` - Bug fix branches
- `chore/*` - Maintenance and polish branches


## 👥 Team Members

| Role | Name | GitHub | LinkedIn |
|------|------|--------|----------|
| 🧠 Product Owner & Developer | **Suraya Mattar** | [GitHub](https://github.com/surayac) | [LinkedIn](https://www.linkedin.com/in/suraya-mattar/) |
| 🧩 Scrum Master & Developer | **Daniella Pacheco** | [GitHub](https://github.com/DaniPacheco8) | [LinkedIn](https://www.linkedin.com/in/daniellapacheco/) |
| 💻 Developer | **Ana Aguilera** | [GitHub](https://github.com/AnaAguileraMorales88) | [LinkedIn](https://www.linkedin.com/in/ana-aguilera-morales-011b1a238/) |
| 💻 Developer | **Montserrat Muñoz** | [GitHub](https://github.com/Montc027) | [LinkedIn](https://www.linkedin.com/in/montse-mu%C3%B1oz-ba202b227/) |
| 💻 Developer | **Estefanía Secanell** | [GitHub](https://github.com/Abaraira) | [LinkedIn]() |
| 💻 Developer | **Mio Ogura** | [GitHub](https://github.com/miaryl) | [LinkedIn](https://www.linkedin.com/in/mio-ogura/) |
