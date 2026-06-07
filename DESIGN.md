# Design System: MauricioDMO Portfolio
**Project ID:** local-portfolio

## 1. Visual Theme & Atmosphere

The MauricioDMO Portfolio embodies a **restrained, technical sanctuary** that merges the precision of developer tooling with the warmth of a personal home on the internet. The interface feels **sober and purposeful**, prioritizing clarity and utility over decorative aesthetics. The design philosophy is understated and honest—showing real software, real impact, and real technical criteria.

The overall mood is **dark minimalist with forest-green accents**, creating an atmosphere that feels technical without being a hacker cliché, professional without being corporate-cold, and human without being informal. The atmosphere evokes a well-organized workspace where everything has its place and purpose.

**Key Characteristics:**
- Dark, low-contrast foundation creating comfortable extended viewing
- Forest-green accents providing organic warmth within the technical environment
- Monospace typography used sparingly for technical labels and metrics
- Generous but intentional whitespace
- Subtle elevation through borders rather than heavy shadows
- Direct, honest communication without marketing fluff

## 2. Color Palette & Roles

### Primary Foundation
- **Deep Forest Night** (#0d1210) – Primary background. Creates a deep, comfortable canvas that reduces eye strain during extended reading sessions.
- **Soft Moss Dark** (#111a15) – Secondary surface for content blocks and sections. Provides subtle layering without harsh contrast.
- **Card Canopy** (#16211b) – Card backgrounds. Creates contained, elevated surfaces for discrete content areas.

### Accent & Interactive
- **Forest Deep** (#1f5e3b) – Primary accent color. Used for borders on hover states, interactive highlights, and strategic emphasis. Evokes organic growth within the technical landscape.
- **Sage Highlight** (#5faf7b) – Secondary accent for data highlights, key metrics, and attention-grabbing elements. Softer, more readable variant for important information.

### Typography & Text Hierarchy
- **Pale Mint** (#e8eee9) – Primary text color. High contrast for comfortable reading while softer than pure white.
- **Muted Sage** (#9baaa0) – Secondary text for supporting content, descriptions, and less critical information.
- **Whisper Border** (#26352c) – Hairline borders for subtle definition. Nearly invisible unless closely examined.

### Colors to Avoid
- Light blue, bright red, neon green, purple gradients, and particle backgrounds

## 3. Typography Rules

**Primary Font Family:** Modern sans-serif (Inter or similar geometric sans)
**Character:** Clean, highly readable geometric forms with excellent screen rendering. Prioritizes legibility and comfortable long-form reading.

**Monospace Font:** JetBrains Mono or similar coding font
**Character:** Used exclusively for technical labels, technology tags, metrics, and small details. Never for paragraphs.

### Hierarchy & Weights
- **Display (H1):** Semi-bold weight (600), 2.5-3rem size. Hero headline "Software práctico para procesos reales."
- **Section Headers (H2):** Semi-bold weight (600), 1.75-2rem size. Creates clear content zones.
- **Subsection Headers (H3):** Medium weight (500), 1.25-1.5rem size. Project titles and card headers.
- **Body Text:** Regular weight (400), relaxed line-height (1.6-1.7), 1rem size. Prioritizes comfortable reading.
- **Technical Labels:** Monospace, 0.75-0.875rem size, semi-bold. Technology tags, metrics, code references.
- **CTA Buttons:** Medium weight (500), subtle letter-spacing, 1rem size.

### Spacing Principles
- Body text maintains generous line-height (1.7) for effortless reading
- Headlines use tighter letter-spacing for modern, compact appearance
- Vertical rhythm based on 8px/16px/24px spacing units
- Section separation of 4-6rem for clear content demarcation

## 4. Component Stylings

### Buttons
- **Shape:** Subtly rounded corners (4-6px radius) – contained and professional without being playful
- **Primary CTA:** Forest Deep (#1f5e3b) background with Pale Mint text, comfortable padding (0.75rem vertical, 1.5rem horizontal)
- **Hover State:** Border transitions to Sage Highlight (#5faf7b), subtle background shift, 2px lift effect, 160-220ms transition
- **Secondary CTA:** Outlined style with Whisper Border, transparent background, hover fills with soft green tint
- **Focus State:** Visible focus ring in Sage Highlight for keyboard navigation

### Cards & Containers
- **Corner Style:** Contained, not overly rounded (4-6px radius) – professional and focused
- **Background:** Card Canopy (#16211b) for discrete elevation
- **Shadow Strategy:** Very soft shadows, relying primarily on border and background color for contrast
- **Border:** Hairline Whisper Border (#26352c) for subtle definition
- **Internal Padding:** Generous 1.5-2rem for comfortable content breathing room
- **Hover Behavior:** Border shifts to Forest Deep, subtle 2px lift, fine background lightening

### Navigation
- **Style:** Minimal horizontal layout with comfortable spacing (1.5-2rem between items)
- **Typography:** Regular to medium weight, clean sans-serif
- **Default State:** Pale Mint text
- **Hover State:** Sage Highlight color transition, 160-200ms
- **Mobile:** Collapses to simple hamburger or remains horizontal with overflow

### Inputs & Forms
- **Stroke Style:** 1px solid Whisper Border (#26352c), transitioning to Forest Deep on focus
- **Background:** Deep Forest Night (#0d1210) with subtle soft background on focus
- **Corner Style:** Subtle rounding matching buttons (4-6px) for visual consistency
- **Padding:** Comfortable 0.75rem vertical, 1rem horizontal
- **Placeholder Text:** Muted Sage, elegant and unobtrusive

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** 1200px for optimal readability on standard displays
- **Grid System:** Responsive grid with comfortable gutters (24-32px)
- **Content Grid:** 2-3 columns for projects on desktop, single column on mobile
- **Breakpoints:**
  - Mobile: <640px
  - Tablet: 640-1024px
  - Desktop: >1024px

### Whitespace Strategy
- **Base Unit:** 8px for micro-spacing, 16px for component spacing, 24-32px for section gaps
- **Vertical Rhythm:** Consistent spacing between related elements
- **Section Margins:** 4-6rem between major sections creating clear content zones
- **Edge Padding:** 1.5rem mobile, 2-3rem desktop for comfortable framing
- **Card Internal:** 1.5-2rem padding

### Alignment & Visual Balance
- **Text Alignment:** Left-aligned for body text (optimal readability), centered for headlines when appropriate
- **Content Hierarchy:** Clear top-to-bottom flow with intentional focal points
- **Project Cards:** Problem, impact, stack, and link clearly structured with visual hierarchy
- **Reading Flow:** Direct, scannable sections without decorative interruptions

### Responsive Behavior
- **Mobile-First:** Core experience designed for mobile, enhancements for larger screens
- **Touch Targets:** Minimum 44x44px for interactive elements
- **Collapsing Strategy:** Grid reduces columns, spacing scales proportionally, navigation adapts
- **Content Priority:** Essential content remains accessible at all breakpoints

## 6. Content Principles

### Tone & Voice
- Direct, close, technical yet human
- Avoid generic phrases like "passionate developer" or "innovative solutions"
- Prefer concrete descriptions of impact and utility

**Instead of:**
> "I am a passionate developer with great enthusiasm for creating innovative solutions."

**Prefer:**
> "I build web systems that convert repetitive processes into useful, clear, and maintainable tools."

### Positioning
MauricioDMO is a Full-Stack Developer focused on internal systems, automation, and useful web experiences.

Key differentiator: Real production projects, business understanding, technical criteria, and focus on user experience.

### Project Presentation
Each project card should show: Problem, impact, stack, and link to case study. Stack should not replace project context.

### Case Study Structure
1. Summary
2. Problem
3. Solution
4. Role
5. Key functionalities
6. User experience
7. Technical stack
8. Impact
9. Learnings

### How I Work Process
1. Understand
2. Reason
3. Plan
4. Implement
5. Improve

This section should show criteria, not just technologies.

### AI Mention (if applicable)
> "I use AI tools as professional support for technical documentation, debugging, architecture review, test generation, and solution analysis. Not as a replacement for technical criteria, but as one more tool in the process."

## 7. Design Anti-Patterns (What NOT to D

- No skill progress bars
- No technology percentages
- No cards without context
- No giant technology icons
- No neon hacker aesthetic
- No particle backgrounds
- No long texts without hierarchy
