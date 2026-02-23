# UI Kit Bundle (v1.0.0) Documentation

## Overview

UI Kit Bundle containing essential UI components and modular sections. This comprehensive package offers a Figma design file (.fig), hand-coded source files (.html/.css/.js) and the preview live site. 

Preview site: https://lilythelily.github.io/ui-kit/

## Code Base Structure

```
ui-kit-dev/
├── assets/             # Images and Icons
├── css/                # Styling for UI components
├── html/               # Container for UI components
├── js/                 # JavaScript for UI components
├── index.html          # Main page with basic UI assets
└── readMe.md           # Documentation

```

### `assets/` Directory

Contains images and icons in jpg/png/webp/svg format.

### `css/` Directory

- "main.css": It defines the styling of the main page and the reusable component (top navigation header). 

- Other css files: The styling rule for each component section respectively. For example, "cards.css" file defines the styling for "cards.html" file. Main variables such as color can be modified at css:root. 

### `html/` Directory

- index.html: Main home page with basic UI assets such as buttons and search field. The styling is defined in main.css file.

- Other html files: The containers for each component section.

### `js/` Directory

- Control the interactivity and functions. 

### `index.html` file

- Main home page with basic UI assets such as buttons and search field. The styling is defined in main.css file.

## How to Use the Content
(Reference: https://lilythelily.github.io/ui-kit/html/how-it-works.html)

Each component section is self-contained in separate files (e.g.: "footer.html" and "footer.css"). Please include "main.css" for the global styling.

### Example: Find a code block for "Testimonials" section

1.  **Open 'testimonials.html' file** Locate <!-- === 📌 Testimonials === --> comment tags. Copy the code block below the comment tag to your html file.

2.  **Open 'testimonials.css' and 'main.css' file** Copy all the code into your css files.

3.  **Path Adjustment** Ensure your image paths match your local directory. 

- Default path: <img src="../assets/building1.webp">
- Update to: <img src="your-path/assets/building1.webp">


## License

This project is licensed for personal and commercial use. Redistribution or resale of the file itself is not permitted.

## Credit

Images are sourced from Unsplash:
- christian-perner-fYO1T495QCM-unsplash
- joel-filipe-jU9VAZDGMzs-unsplash
- joel-filipe-RFDP7_80v5A-unsplash

Font is from Google Fonts:
Poppins