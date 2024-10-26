# Health Tracker Widget

A sleek, user-friendly health tracker widget built with React and Vite. The widget provides a snapshot of various health-related activities over the past 24 hours, including sleep, sitting, steps, running, exercise, and water intake. It also includes visual data summaries with weekly, monthly, and yearly graphs, simulating realistic data with intelligent randomization.

## Features

- **24-Hour Activity Overview:** Displays the most recent data for sleep, sitting, steps, running, exercise, and water intake.
- **Progress Tracking:** Visualizes goal achievements through a color-filled progress bar on each activity card.
- **Historical Data Charts:** Includes charts for weekly, monthly, and yearly summaries, providing insights into long-term trends.
- **Realistic Data Simulation:** Generates realistic random data with intelligent algorithms, giving the feel of actual activity data.

## Tech Stack

- **React** – JavaScript library for building user interfaces.
- **Vite** – Fast frontend build tool and development server.
- **Recharts** – Library for creating dynamic charts and visualizations.
- **CSS3** – Styled components for a clean and modern look.

## Getting Started

### Prerequisites

Make sure you have **Node.js** (>=14) and **npm** (Node package manager) installed on your system.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/health-tracker-widget.git
   cd health-tracker-widget
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Vite for GitHub Pages Deployment:**  
   Update `base` in `vite.config.js` to match your GitHub repository name, if deploying to GitHub Pages.

4. **Run the app in development mode:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

### Building and Deploying

To build the app for production, use:

```bash
npm run build
```

To deploy to GitHub Pages, run:

```bash
npm run deploy
```

Refer to [Deploying to GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages) for additional guidance.

## Usage

1. **24-Hour Activity Widget:** The main dashboard shows current stats for each tracked activity. Each activity card has a progress bar that fills based on the percentage of the goal achieved.
   
2. **Charts:** Click on each activity or select from options to view weekly, monthly, and yearly graphs for trends and insights. These charts simulate realistic patterns, such as an increase in steps or exercise on certain days.

3. **Intelligent Data Simulation:** Data is randomly generated to provide lifelike patterns, ensuring the interface looks realistic and meaningful.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. If you’d like to discuss any major changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Inspired by popular health and fitness tracking apps.
- Icons by [Font Awesome](https://fontawesome.com/).

---
## Authors

- Narayan Jat
- Shravan Bishnoi
