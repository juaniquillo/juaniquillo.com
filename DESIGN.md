# Juaniquillo - Design System

## Design Philosophy
The "Juaniquillo" website aims for a **Retro-Modern** aesthetic. It utilizes the technical, structured look of monospaced typography and "pixel-perfect" UI elements like notched corners and beveled buttons to create a digital, pixelated feel.

## Typography
*   **Headings:** "Space Mono" (Monospace/Retro) for a technical and distinctive look.
*   **Body & UI:** "Space Mono" (Monospace) for a clean, consistent, and readable experience.
*   **Scale:**
    *   `h1`: 3.2rem (Mobile) / 4.8rem (Desktop)
    *   `h2`: 1.8rem
    *   Body: 1rem (Mobile) / 1.2rem (Desktop)

## Color Palette

### Light Mode (Warm Retro)
*   **Primary:** `#155263` (Deep Teal)
*   **Secondary:** `#0e3b47` (Dark Teal)
*   **Background:** `#fbe7b4` (Warm Cream)
*   **Accent:** `#ff6f3c` (Coral), `#ff9a3c` (Orange), `#ffc93c` (Yellow)

### Dark Mode (Midnight Cyan)
*   **Primary:** `#facc57` (Golden Yellow)
*   **Secondary:** `#b98e00` (Dark Gold)
*   **Background:** `#072027` (Deep Dark Teal)

## UI Components

### Buttons
*   **Style:** Beveled with notch corners.
*   **Gradient:** Linear gradient from `--button-secondary` to `--button-primary`.
*   **Feedback:** Hover/Focus states use a specific accent color (`--button-hover`) for the outline.

### Dialogs
*   **Backdrop:** Blurred background (`4px`) with semi-transparent overlay.
*   **Corners:** Notched corners for consistency with buttons.

### Icons
*   **Source:** [Pixel Icon Library](https://pixeliconlibrary.com/)
*   **Style:** Pixel-art style icons that complement the "Retro-Modern" aesthetic and monospaced typography.

---

## Design Suggestions & Improvements (Status: Pending)

1.  **Utilize Accent Palette:** Integrate orange/coral colors for hover states or decorative elements.
3.  **Cross-browser Notches:** Add `clip-path` fallbacks for `corner-shape: notch`.
4.  **Interactive Cube:** Enhance the cube with mouse-tracking rotation.
