# Food-Mood

Food-Mood is a web application that suggests unique recipes by combining two world cuisines, meal type, and number of people — powered by the Spoonacular API. Users can log in, select criteria, and discover creative meal ideas tailored for their group size.

## Features

- **Recipe Suggestions**: Combines two world cuisines, meal type, and number of people to generate unique recipes.
- **Powered by Spoonacular API**: Fetches real recipes and ingredient data.
- **User Authentication**: Login and logout features for personalized experience.
- **Tech Stack**: 
  - **Frontend**: React
  - **Backend**: Django (REST API)
  - **Database**: PostgreSQL
- **Responsive Design**: Works on desktop and mobile.

## Demo

![Demo Screenshot](demo-screenshot.png)
*Screenshot showing recipe suggestion UI.*

## Architecture

```
React (Frontend)
     |
     | REST API calls
     v
Django (Backend)
     |
     | ORM
     v
PostgreSQL (Database)
     |
     | External API call
     v
Spoonacular API
```

## Setup

### Prerequisites

- Node.js & npm (for React)
- Python & pip (for Django)
- PostgreSQL
- Spoonacular API key

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

### Backend (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Database

- Configure your PostgreSQL credentials in `backend/settings.py`.

### Environment Variables

Create a `.env` file in your backend directory:

```
SPOONACULAR_API_KEY=your_api_key_here
DJANGO_SECRET_KEY=your_django_secret_here
DATABASE_URL=postgres://user:password@localhost:5432/foodmood
```

## Usage

1. Register or login.
2. Select two world cuisines, a meal type, and number of people.
3. Get recipe suggestions and instructions.

## Example API Request (Backend to Spoonacular)

```python
import requests

def get_recipes(cuisine1, cuisine2, meal_type, people, api_key):
    url = "https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "cuisine": f"{cuisine1},{cuisine2}",
        "type": meal_type,
        "number": people,
        "apiKey": api_key
    }
    response = requests.get(url, params=params)
    return response.json()
```

## Authentication Flow

- Django handles user authentication (login/logout).
- React frontend manages login UI and stores JWT/session token.
- Protected API endpoints for logged-in users.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT

## Credits

- [Spoonacular API](https://spoonacular.com/food-api)
- React, Django, PostgreSQL
