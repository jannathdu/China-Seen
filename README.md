
# China Seen | 看见中国

### Explore China. Discover Culture. Track Your Journey.

China Seen is a responsive, multilingual travel exploration website that helps visitors discover China's destinations, explore its provincial-level regions, and track their personal travel experiences.

**Live Website:** https://jannathdu.github.io/China-Seen/

**GitHub Repository:** https://github.com/jannathdu/China-Seen

---

## Overview

China Seen combines an interactive map, destination discovery, and personal travel tracking into a unified web experience.

The platform supports three languages:

- English
- Chinese (中文)
- Bengali (বাংলা)

It covers 34 provincial-level administrative regions of China.

## Key Features

### Interactive China Map
- Explore 34 provincial-level regions.
- Select regions to view available destination information.
- Mark regions as visited.
- Add regions to a travel wishlist.

### Discover Destinations
- Browse 15 curated destination and local food cards.
- Search destinations.
- Filter by Nature, History, Culture, and Food.
- View optimized WebP images.

### My Journey
- Track visited regions.
- Manage a travel wishlist.
- Monitor overall travel completion.
- Save travel preferences using browser localStorage.

### Travel Progress
- View visited, wishlist, and remaining region counts.
- Explore circular progress visualization.
- Review progress by administrative region type.
- Unlock travel milestones.

### Multilingual Experience
- English, Chinese, and Bengali interfaces.
- Language preference persistence.
- Responsive layouts for desktop, tablet, and mobile.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Interactive functionality |
| D3.js | Interactive China map visualization |
| GeoJSON | Geographic region data |
| WebP | Optimized destination imagery |
| localStorage | Browser-based travel data persistence |
| GitHub Pages | Static website hosting |

---

## Live Demo

Visit the website:

https://jannathdu.github.io/China-Seen/

### Main Pages

- Home: https://jannathdu.github.io/China-Seen/
- Explore: https://jannathdu.github.io/China-Seen/explore.html
- Discover: https://jannathdu.github.io/China-Seen/discover.html
- My Journey: https://jannathdu.github.io/China-Seen/journey.html
- Progress: https://jannathdu.github.io/China-Seen/progress.html

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jannathdu/China-Seen.git
```

### 2. Open the Project

```bash
cd China-Seen
```

### 3. Run Locally

Open the project in Visual Studio Code and launch `index.html` using the Live Server extension.

No backend server or database is required for the current static version.

---

## Project Structure

```text
China-Seen/
├── assets/
│   ├── images/
│   │   └── destinations/
│   └── maps/
├── css/
│   ├── style.css
│   ├── discover.css
│   ├── journey.css
│   └── progress.css
├── js/
│   ├── app.js
│   ├── data.js
│   ├── destinations.js
│   ├── map.js
│   ├── explore-i18n.js
│   ├── discover.js
│   ├── discover-i18n.js
│   ├── journey.js
│   ├── journey-i18n.js
│   ├── progress.js
│   └── progress-i18n.js
├── index.html
├── explore.html
├── discover.html
├── journey.html
├── progress.html
├── optimize_images.py
└── README.md
```

---

## Image Optimization

The project uses optimized WebP images to reduce image transfer size.

For the 15 destination images:

| Format | Total Size |
|---|---:|
| Original PNG | 41.29 MB |
| Optimized WebP | 4.43 MB |
| Reduction | 89.3% |

The optional image optimization script uses Python and Pillow.

---

## Current Limitations

- Travel data is stored in browser localStorage and does not synchronize across devices.
- Detailed destination content is currently curated for selected regions rather than all 34 regions.
- Destination images include AI-generated illustrations and may not represent exact real-world appearances.
- The current version does not include user accounts or a backend database.

---

## Future Improvements

- Expand destination coverage across China.
- Add detailed travel guides and itineraries.
- Introduce user authentication and optional cloud synchronization.
- Improve accessibility and automated testing.
- Add more travel planning and discovery features.

---

## Project Status

**Deployed — Initial Public Version**

The website is publicly accessible through GitHub Pages. Core navigation, exploration, discovery, and travel tracking functionality have been manually tested.

---

## Author

**GitHub:** [jannathdu](https://github.com/jannathdu)

---

## Acknowledgment

Destination illustrations are AI-generated and are intended for visual inspiration rather than exact photographic documentation.
