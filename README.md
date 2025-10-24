# Enlightenment - Burning Man 2025

Landing page for Enlightenment, a large-scale interactive art installation for Burning Man 2025. The project explores themes of connection, light, and community through a human-safe simulation of the trees of Elysara.

## Project Information

- **Firebase Project:** `enlightenment-ff168`
- **Live URL:** [enlightenment-ff168.web.app](https://enlightenment-ff168.web.app)
- **Contact:** enlightenment@thatcatcamp.com

## Deployment

### Automatic Deployment (GitHub Actions)

Pushes to `main` branch automatically deploy to Firebase Hosting via GitHub Actions.

#### Required GitHub Secrets

1. `FIREBASE_PROJECT_ID`: `enlightenment-ff168`
2. `FIREBASE_SERVICE_ACCOUNT_KEY`: Full JSON content of your service account key

#### Service Account Permissions

The service account **must** have these IAM roles in the Firebase project:

- **Firebase Hosting Admin** (`roles/firebasehosting.admin`) - Use the standard role, NOT the beta version

To add permissions:
1. Go to [Google Cloud IAM](https://console.cloud.google.com/iam-admin/iam)
2. Select project `enlightenment-ff168`
3. Find your service account
4. Add role: **Firebase Hosting Admin** (the regular version, not beta)



### Local Deployment

```bash
# Authenticate with Firebase
firebase login

# Deploy to production
firebase deploy

# Deploy to preview channel
firebase hosting:channel:deploy preview
```

## Local Development

This is a static site using Bootstrap and vanilla JavaScript.  
This runs serverless on Firebase (actually Google Cloud) - you can't 
add any server-side code unless it's using Firebase.

```bash
# Serve locally using Firebase
# nvm use 22 and npm install -g firebase to use
firebase serve

# Or use any static server
python3 -m http.server 8000
# Or use the included autoreload server (install requirements.txt)
python3 server.py
```

## Project Structure

- `index.html` - Main landing page
- `css/style.css` - Custom styles
- `js/script.js` - Custom JavaScript
- `static/` - Images and videos
- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project configuration

## Tech Stack

- Bootstrap 5.3
- Google Analytics (GA4)
- Firebase Hosting
- GitHub Actions for CI/CD
