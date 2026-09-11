---
name: fullstack-development
description: Build end-to-end full-stack applications combining Node.js/Express backends, React.js or Angular frontends, database integration, and AWS deployment.
---

# Full-Stack Development

This skill guides the full-stack integration milestones defined in `readme.md` section 6.

## Integration Milestones

1. **Backend API** — Build a REST API with Node.js and Express.
2. **Frontend** — Build a UI with React.js/Next.js or Angular that consumes the API.
3. **Frontend-to-API connection** — Wire the frontend to the backend API.
4. **Database connection** — Connect the backend to a database.
5. **Deployment setup** — Configure deployment for both frontend and backend.

## Backend: Node.js + Express

### Key Topics (from `readme.md` section 4)
- Node.js basics and the event loop
- npm and package management
- Modules and the file system
- Express.js routing and middleware
- Request and response handling
- Validation and error handling
- Authentication and authorization basics (JWT or sessions)
- REST architecture
- Environment variables (`dotenv`)
- Process management (`pm2`)

### Express Project Structure

```
project/
├── app.js
├── server.js
├── routes/
├── controllers/
├── middleware/
├── models/
├── .env
└── package.json
```

### Quick API Example

```js
// server.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(process.env.PORT || 5000);
```

## Frontend Options

### React.js / Next.js Path
- Components and props
- State and hooks
- Forms and validation
- Routing
- Fetching API data
- Next.js app structure, routing, SSR/SSG
- API routes integration

### Angular Path
- Components and modules
- Templates and data binding
- Directives and pipes
- Services and dependency injection
- Routing
- HTTP client
- Forms

## Connecting Frontend to Backend

- Use `fetch` or `axios` for API calls.
- Handle loading states and errors gracefully.
- Store API base URL in environment variables.
- Match frontend data shapes to backend responses.

## Database Integration

- Connect the Express backend to a managed database (e.g., AWS RDS).
- Use an ORM or query builder (e.g., Prisma, Sequelize).
- Store database connection strings in `.env`.

## Deployment Mindset

- Separate frontend and backend concerns.
- Use environment variables for all secrets.
- Configure CORS appropriately.
- Deploy with process managers in production.

## Related Documentation

- `readme.md` — Section 6 (Full-Stack Integration), Section 7 (AWS).
- `.kilo/skills/nodejs-setup/` — environment setup.
- `.kilo/skills/aws-cloud-engineering/` — AWS deployment.

## Daily Discipline

- Commit and push progress daily.
- Track milestones in a Google Sheet or Kanban board.
- Log blockers and solutions in notes.
