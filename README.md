# FitLog

FitLog is a workout library and planning app for discovering exercises, building a daily routine, and keeping track of completed training. Workout information is loaded from an external API, while plans and saved workouts persist in the browser.

## Key Features

1. **Browse workouts:** Explore a responsive exercise library with muscle groups, equipment, duration, calories, and ratings.
2. **View exercise details:** Open a dedicated workout page with exercise metrics and step-by-step instructions.
3. **Build a daily plan:** Add up to five workouts, mark them complete, and remove them when plans change.
4. **Save and sort workouts:** Keep exercises for later and sort plan or saved lists by duration, calories, or rating.
5. **Track progress locally:** Review planned exercise, time, and calorie totals; plans and saved workouts are retained with browser `localStorage`.

## Technologies

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [HeroUI 3](https://www.heroui.com/) for interface components
- [Lucide React](https://lucide.dev/) for icons
- [React Hot Toast](https://react-hot-toast.com/) for notifications
- FitLog workout API at `https://api.api-store.workers.dev/api/fitlog`

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use FitLog.

To create a production build, run:

```bash
npm run build
```
