# Wildlife Zoo Website with Firebase Integration

This is a wildlife zoo website with Firebase Authentication and Firestore database integration. The website allows users to sign up, log in, browse zoo passes, and interact with various features.

## Features

- **User Authentication**: Sign up and login functionality using Firebase Authentication
- **User Profiles**: Store user data in Firestore database
- **Ticket Booking**: Book zoo passes and store booking history
- **Animal Tracking**: Record animal visits and track popular animals
- **Event Registration**: Register for zoo events
- **Feedback System**: Submit and store user feedback
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "wildlife-zoo-website")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

### 3. Create Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" for development (you can add security rules later)
4. Select a location for your database
5. Click "Done"

### 4. Get Firebase Configuration

1. In your Firebase project, click the gear icon next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Enter an app nickname (e.g., "wildlife-zoo-web")
6. Click "Register app"
7. Copy the Firebase configuration object

### 5. Update Configuration

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 6. Set Up Security Rules (Optional but Recommended)

In your Firestore Database, go to the "Rules" tab and add these security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can create and read their own bookings
    match /bookings/{bookingId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Users can create and read their own event registrations
    match /eventRegistrations/{registrationId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Users can create animal visits and read popular animals
    match /animalVisits/{visitId} {
      allow read, write: if request.auth != null;
    }
    
    // Users can create feedback
    match /feedback/{feedbackId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## File Structure

```
├── index.html              # Sign up page
├── login.html              # Login page
├── home.html               # Main dashboard
├── animals.html            # Animals page
├── event.html              # Events page
├── firebase-config.js      # Firebase configuration
├── auth.js                 # Authentication functions
├── database.js             # Database utility functions
├── img/                    # Image assets
├── videos/                 # Video assets
└── README.md               # This file
```

## Usage

1. **Sign Up**: Users can create new accounts with email, password, and username
2. **Login**: Existing users can log in with their email and password
3. **Browse Passes**: View different zoo pass options and pricing
4. **Book Tickets**: Purchase zoo passes (integration with payment system needed)
5. **View Animals**: Browse different animals in the zoo
6. **Register for Events**: Sign up for special zoo events
7. **Logout**: Securely log out from the application

## Database Collections

The application uses the following Firestore collections:

- **users**: User profiles and account information
- **bookings**: Ticket bookings and purchase history
- **animalVisits**: Records of animal visits for analytics
- **eventRegistrations**: Event sign-ups
- **feedback**: User feedback and reviews

## Security Features

- Email/password authentication
- User data isolation (users can only access their own data)
- Form validation and error handling
- Secure logout functionality
- Authentication state management

## Browser Compatibility

The application works with modern browsers that support:
- ES6+ JavaScript features
- Firebase SDK
- CSS Grid and Flexbox

## Development

To run the application locally:

1. Set up a local web server (e.g., using XAMPP, Live Server, or Python's `http.server`)
2. Ensure all Firebase configuration is properly set up
3. Open the application in a web browser

## Troubleshooting

### Common Issues:

1. **Firebase not initialized**: Check that `firebase-config.js` has the correct configuration
2. **Authentication errors**: Ensure Email/Password authentication is enabled in Firebase
3. **Database access denied**: Check Firestore security rules
4. **CORS errors**: Make sure you're running the app from a web server, not file:// protocol

### Getting Help:

- Check the Firebase Console for error logs
- Verify your Firebase configuration matches the console
- Ensure all required Firebase services are enabled

## Future Enhancements

- Payment gateway integration
- Real-time notifications
- Admin dashboard
- Advanced analytics
- Mobile app development
- Social media integration 