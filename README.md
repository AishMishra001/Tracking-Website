# Creating a Tracking website using mern stack 

## Purpose : 

1. To track all the financial exchanges done by a user 
2. To that transaction to the catigory of whatever it fits the most 
3.  To display the total amount spent in each category 
4. To show the difference expense using charts 
5. To add ai technologies to give suggestions to the user 
6. To track down the money using the bank transaction message 
.....while add more in future 

## Technologies Used : 

### MERN Stack 

Database ---> MongoDB 

Frontend ----> React + tailwind + Aceternity UI + shadcn + grap 

Backend ----->  Node.js + Express.js + Mongoose  

Chart Library ---> Chart.js  

## Components : 

SignIn and SignUp 

Dashboard ---> 

1. to enter data to the database and  to display the data 
2. to add categories to it give  

Analytics 

1. Charts  to display the data  

2. ai suggestions 

3. to track the money using the bank transaction message 


Extra resources : 

1. Cloudinary 

2. Google auth 

3. Refine 



# API endpoints : 

# Finance Tracker API Design - Enhanced with Income Tracking

## Base URL
`/api/v1`

## Authentication Endpoints
- POST `/auth/signup`: Register a new user
- POST `/auth/signin`: Sign in a user
- POST `/auth/google`: Google authentication
- GET `/auth/logout`: Log out the current user

## User Endpoints
- GET `/users/me`: Get current user's profile
- PUT `/users/me`: Update current user's profile

## Transaction Endpoints
- POST `/transactions`: Create a new transaction
- GET `/transactions`: Get all transactions for the current user
- GET `/transactions/:id`: Get a specific transaction
- PUT `/transactions/:id`: Update a specific transaction
- DELETE `/transactions/:id`: Delete a specific transaction

## Category Endpoints
- POST `/categories`: Create a new category
- GET `/categories`: Get all categories for the current user
- PUT `/categories/:id`: Update a specific category
- DELETE `/categories/:id`: Delete a specific category

## Income/Pocket Money Endpoints
- POST `/income`: Set or update monthly income or pocket money
- GET `/income`: Get current monthly income or pocket money
- GET `/income/history`: Get history of income changes

## Analytics Endpoints
- GET `/analytics/spending-by-category`: Get total spending by category
- GET `/analytics/monthly-summary`: Get monthly spending summary
- GET `/analytics/trends`: Get spending trends over time
- GET `/analytics/daily-comparison`: Compare daily expenses to average daily budget
- GET `/analytics/budget-status`: Get current spending status compared to income/pocket money

## AI Suggestion Endpoints
- GET `/ai/suggestions`: Get AI-powered financial suggestions based on user data and spending patterns

## Extra Resource Endpoints
- POST `/uploads/image`: Upload an image to Cloudinary (e.g., for receipts)