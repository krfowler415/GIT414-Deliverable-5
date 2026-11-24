GIT 414 – Deliverable 5 - Accessibility Conformance and Inclusive Quality

Kevin Fowler


# Test Scope:

Accessibility testing focused on the three currently implemented pages of my capstone:

- Home: Navigation, featured animal links, images, and semantic structure.
- Nocturnal Natives: Keyboard-operated flip cards, focus management, and navigation to individual animals.
- Adaptations: Expandable cards, hover and keyboard interactions, and visibility of additional content.

These pages were selected because they represent the site's main content and interactive features.


# Automated Testing:

I ran Google Lighthouse on all three pages of the published GitHub Pages

| Page | Accessibility | Performance |
|---|---|---|
| Home | 100 | 99 |
| Nocturnal Natives | 100 | 99 |
| Adaptations | 100 | 100 |

Lighthouse reported no automated accessibility failures.


# Manual Accessibility Testing:

- Semantic structure: The pages use semantic HTML, headings, navigation landmarks, descriptive links, and native buttons. The interactive cards use accessible names and state attributes.

- Keyboard and focus: Keyboard navigation and card interactions were tested across all three pages. Controls were operable, and visible focus indicators appeared on selectable elements.

- Zoom and reflow: Manual zoom and responsive testing showed that the layouts remained usable. Specific zoom percentages were not recorded for this report.

- Text spacing: I applied WCAG text-spacing values using Chrome DevTools and visually checked all three pages. No text clipping or overlapping was observed.

- Contrast: I calculated contrast ratios for six text colors against the site's two primary dark backgrounds. All twelve combinations exceeded the WCAG AA minimum of 4.5:1 for normal text. Contrast over photographs and gradients has not been fully measured.

- Forms and tables: N/A. The tested pages don't contain forms or data tables.

- Media and motion: The pages use responsive JPG/WebP images, alternative text, and photo credits. Interactive cards contain animations. Reduced-motion behavior and every image alternative have not yet been fully verified.


# Accessibility-Tree Sample:

I inspected the "Shelter Among Saguaros" card on the Adaptations page using Chrome DevTools.

The accessibility tree identified:

- Role: Button
- Accessible name: "Show details for Shelter Among Saguaros"
- Focusable: True
- Expanded: False
- ARIA controls: `saguaro-shelter-details`

The closed-state properties were correct. Similar code elements matches the structure of this component.


# Remediation Log

The following findings were identified during development of these pages.

| Issue and evidence | Impact / Priority | Fix | Retest Result |
|---|---|---|---|
| 1. Home's Explore Animals link did not lead to the intended page. | Navigation usability / Medium | Updated link destination to Nocturnal Natives. | Pass - navigates to Nocturnal Natives.
| 2. Featured animal links did not directly open their corresponding animal cards. | Content navigation / Medium | Added animal-specific URL fragments and JavaScript handling. | Pass - opens the corresponding animal card.
| 3. Nocturnal Natives' active navigation link had incorrect styling. | Visual orientation / Low | Added active-page CSS styling to match Adaptations. | Pass - selected page displays the correct styling.
| 4. Adaptations card content and interactive states were not displaying properly. | Content visibility and operability / High | Restored missing CSS rules controlling the card content and states. | Pass - content displays correctly, and hover/click interactions work.
| 5. An Adaptations introduction paragraph was missing its closing HTML tag. | HTML structure / Low | Identified the correction to the closing tag. | Pass - corrected HTML displays properly.


# Conformance Summary

All three pages achieved a Lighthouse Accessibility score of 100. Manual testing also found working keyboard interactions, visible focus indicators, usable zoom layouts, and no apparent text-spacing problems.

The accessibility-tree sample confirmed appropriate accessible properties for a closed Adaptations card, and the tested solid-color combinations met WCAG AA text contrast requirements.

Before final release, I should verify any outstanding remediation items, expanded-card accessibility-tree behavior, reduced-motion support, and contrast over image backgrounds.

Overall, the testing results are encouraging so far as I continue to build out this website.
