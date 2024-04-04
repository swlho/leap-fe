# Leap Frontend

## Summary

This project is the frontend version of Leap, an AI-powered social learning platform, brought to you by The Node Toads. It is built using Next JS, a popular JavaScript library for building user interfaces. The application provides a user-friendly interface through which a user can get up to speed with any topic and connect with other Leapers with shared interests to take their learning to the next level.

Users can query any topic of interest, which will then serve a summary of the top 10 search results on that topic. If the topic does not yet have its own pond environment, a user can then create this. A user can view ponds, posts and comments. Users can also post new posts within their affiliated topic ponds. The frontend communicates with the backend API to fetch the necessary data and also to post new data or updates.

The project showcases the use of modern frontend development techniques and practices, including component-based architecture, state management, and responsive design.

## Live Demo

You can access the live demo of the project [here](https://leap-1i7mfs9mn-swlhos-projects.vercel.app/).

## Backend Repository

You can find the backend repository [here](https://github.com/jamie-appleyard/leap-backend).

## Getting Started

To configure this project locally, please follow these steps:

### Prerequisites

- Node.js (minimum version: 14.6.4)

### Installation

1. Clone the repository:

```
git clone https://github.com/swlho/leap-fe 
```

2. Install dependencies:

```
cd leap-fe
npm install
```

3. Running the project locally:

```
npm run dev
```

This will spin up the local development server, which can be accessed via the terminal. This will show as: http://localhost:<port-number-here>/