# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.1 - 2022-11-18
### Added
- Multiselect
  - [data-limit="n"] attribute to limit selected options

### Bug fixes
- Segmented Control: inverted styles
- Forms
  - Datepicker: label styles

## 2.0.0 - 2022-09-27
### New components
- Avatar
- Forms / Multiselect dropdown
- Modal
- Share Elements
  - Share Bar
  - Share Button

### Potentially breaking changes to component HTML structure
The following components have an updated HTML structure / CSS classes in SDK 2.0:

Badge
  - Now uses `<span>` element
  - CSS class updates
  - See Storybook Badge preview -> 'Docs' tab for usage guide

Breaker
  - Simplified HTML structure (removed all Bootstrap elements from component)
  - CSS class updates
  - See within any Storybook Breaker preview -> 'Docs' for usage guide

Card
  - Carousel: Updated aria labels on Splide carousel wrapper

Download Teaser
  - Restructure of previous Download -> Teaser component
  - Simplified HTML structure
  - CSS class updates
  - See within Storybook Download Teaser preview -> 'Docs' for usage guide

Download Teaser Carousel
  - Formerly Download List, renamed to avoid confusion with new Download List (see below) 
  - Simplified HTML structure
  - CSS class updates
   - See within Storybook Download Teaser Carousel preview -> 'Docs' for detailed usage guide

Footer
  - Link List classes and HTML structure updated (`link-list--social`)
  - See within Storybook Footer preview -> 'Docs' for usage guide

Forms
  - Readonly styles added
  - Suggestor component: data-attribute configuration updated
  - See within Storybook Forms/Suggestor preview -> 'Docs' for updated configuration guide
  - Textarea: Light variant removed. HTML structure updated. Counter behaviour disabled (must now be implemented manually)

Icons
  - Icon size CSS utilities updated
  - within Storybook Icons preview -> 'Docs' for usage guide

Image
  - Size and rounded CSS utilities updated

Download List
  - Moved to List components.
  - Simplified HTML structure & improved variants
  - See within Storybook List -> Download preview -> 'Docs' for usage guide

Loader
  - CSS class updates
  - Aria labels added
  - See within Loader Storybook preview -> 'Docs' for usage guide

Navigation
  - Header: Updated HTML structure
  - Navigation: Navdrawer structure updated
  - See within Navigation Storybook preview -> 'Docs' for usage guide
  - Inpage Navigation: HTML structure updates (navigation now using `<button>`)

Newsletter
  - Updated HTML structure (de-Bootstrapping)
  - CSS class updated
  - See within Navigation Storybook preview -> 'Docs' for usage guide

Promo
  - Variant CSS class updates
  - HTML structure simplified (Bootstrap elements removed)

Quotation
  - Base CSS class updates
  - HTML structure changed (See Quote -> Storybook preview -> 'Docs' for usage guide)

Stage
  - Base CSS class updates (`container` -> `stage-container`)

Stage Banner
  - HTML & CSS classes simplified
  - See within Stage Banner Storybook preview -> 'Docs' for usage guide

Stage Carousel
  - HTML improvements. Aria tags added.
  - See within Stage Carousel Storybook preview -> 'Docs' for usage guide

Tables:
  - Variant CSS classes updated
  - See within Tables Storybook preview -> 'Docs' for usage guide

Teaser:
  - HTML structure & CSS classes updated for Image/picto variants
  - Carousel: HTML structure updated

## 1.8.1 - 2022-04-27
### Changed
- Forms - Datepicker
  - vanillajs-datepicker removed from scripts bundle - must now be manually imported by end-users
  - data-language configuration added for all supported vanillajs-datepicker locales

## 1.8.0 - 2022-04-19
### Added
- Stage carousel component
- Tooltip component
- Pictogram dark variants
- text-sm & icon-sm css utilities
- text-success & text-error utilities
- checkbox: checkbox--centered alignment variant

### Bug fixes
- Breadcrumb: colors & inverted variant issues
- Button: active, focus & disabled states fixed
- Download slider: button focus fixed
- Datepicker: focus fixes
- Dropdown select: top-opened alignment fixes

### Changed
- Accessibility:
  - Accordion: button added to accordion headers
  - Header: aria labels added to button toggle
  - Tabs: tab-header buttons added. Aria labels added to headers and content
  - Range slider: aria labels
  - Loader: aria labels
  - Inpage navigation: buttons & aria labels added
  - Breaker: converted to use aside element 
  - Download teaser list: aria labels added
  - Datepicker: aria labels added
- Footer: social bar updated


## 1.7.1 - 2022-01-27
### Changed
- DSM storybook ID updates (card, badge & sidebar)


## 1.7.0 - 2022-01-26
### Added
- Card component
  - Blank, Article & Action cards
  - Card carousel & grid
- Table
  - Complex table styles
- Tag
  - 'tag--block' variant
- Button
  - 'btn--block' variant
- Utilities
  - text alignment and float helper classes
- Accessibility
  - "visually-hidden" class for hidden screen-reader labels

### Bug fixes
- Stage
  - Mobile inverted colour fixes
- Button
  - 'btn--sm' variant font-size reduced
  - Disabled styles corrected

### Changed
- Accessibility
  - Tabs: tabindex attribute added
  - Teaser Download: "visually-hidden" span added with SR-only label
  - Teaser Carousel: aria-labels added
  - Download: aria-labels added
  - Social: aria-labels added
  - Quote: paragraph tag replaced with blockquote tag
  - Pagination: aria-labels added


## Hotfix 1.6.1 - 2021-12-17
### Bug fixes
- Removed bundled animate.css due to Gulp issues.


## 1.6.0 - 2021-12-15
### Added
- Promise / Social label component
- Tag label component (small tags)
- Zcroller animations (with animate.css included)
- Sass variables (fonts and colours) 

### Changed
- Select
  - Dropdown orientation defaulted to automatic
  - Configuration options added via new data-* attributes
  - "slim-select" class renamed to "dropdown-select"
  - "select-helper-message" class renamed to "dropdown-select-message"
  - "long-list" class depreciated
- Button
  - Primary Dark  & Icon Shap Dark variants

### Bug fixes
- Select
  - Issues with dropdown styling when open above input
- Accordion
  - Hover and active style fixes


## 1.5.3 - 2021-11-18
### Bug fixes
- Breadcrumbs: colour fixes
- Stage: inverted text colour fixes on tablet down 

### Changed
- Accessibility
  - Header: menu-icon span tag converted to button
  - Accordion: heading titles wrapped in H3 tag
  - Teaser carousel: hidden span title added to download buttons
- Datepicker
  - Configuration data-attributes added
- Tabs
  - Disabled auto-scroll to tab on focus / pageload. Now activated via data-attribute


## 1.5.2 - 2021-10-15
### Bug fixes
-  Select - fixed issue with reinitialization of component in Angular context


## 1.5.1 - 2021-10-13
### Changed
- Renamed all Ogg and ZurichSans fonts with "_woff, _tff" suffixes for Sitecore compatibility
- Added global ZWS object to window global
  - Contains init & initAll methods for all JS components
  - Enables JS components to be use & manually reinitialized when dynamically added to the DOM (Angular for example)


## 1.5.0 - 2021-08-26
### Added
- Teaser Carousel with Pictogram
- Teaser Grid

### Changed
##### IMPORTANT: Converted class names to kebab-case
- Class names changed from snake-case (e.g. "teaser__carousel") to kebab-case ("teaser-carousel") to the following components:
  - Breaker (including any embedded Teasers)
  - Newsletter (checkboxes)
  - Quote (author element)
  - Range Slider (multiple elements)
  - Safespace (circle)
  - Shape Decoration (multiple elements)
  - Stage Banner (content)
  - Forms (multiple elements)
    - Textfield
    - Select
    - Checkboxes
    - Toggle

### Bug fixes
-  Badge - Copy out of center on iOS


## 1.4.0 - 2021-08-13
### Added
- Badge component
- Complete ESLint rules (including eslint:recommended)
- Added hidden inputs to range-slider
- Additional pictograms added
- Installations guides added to public README

### Changed
- Removed Bootstrap grid CSS from main bundle - now needs to be manually installed by developers
- Removed snake-case class names from Footer, Breaker, Download, Promo, Tabs and Divider components
- Simplified Footer HTML markup structure