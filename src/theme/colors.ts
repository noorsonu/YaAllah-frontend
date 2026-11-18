/**
 * YAALLAH OFFICIAL BRAND COLOR SYSTEM
 * Strict compliance with the YaAllah Design Specification
 * 
 * Official Color Palette:
 * - Royal Burgundy: #650D25
 * - Deep Burgundy: #50091D
 * - Champagne Gold: #D9A441
 * - Soft Gold: #E8C78D
 * - Warm Ivory Cream: #FAF4E9
 * - Pure White: #FFFFFF
 * - Deep Brown Text: #392A25
 * - Light Border: #E8D8C0
 */

export const brandPalette = {
  royalBurgundy: '#650D25',
  deepBurgundy: '#50091D',
  champagneGold: '#D9A441',
  softGold: '#E8C78D',
  warmIvoryCream: '#FAF4E9',
  pureWhite: '#FFFFFF',
  deepBrown: '#392A25',
  lightBorder: '#E8D8C0',
} as const;

export const brandTokens = {
  // Surfaces & Backgrounds
  background: {
    main: brandPalette.warmIvoryCream, // #FAF4E9
    navbar: brandPalette.pureWhite,     // #FFFFFF
    card: brandPalette.pureWhite,       // #FFFFFF
    footer: brandPalette.deepBurgundy,  // #50091D
    accent: brandPalette.royalBurgundy, // #650D25
    soft: '#F4ECE1',
  },

  // Headings & Text
  typography: {
    heading: brandPalette.royalBurgundy, // #650D25
    body: brandPalette.deepBrown,        // #392A25
    muted: '#6E5D57',
    gold: brandPalette.champagneGold,    // #D9A441
    onDark: brandPalette.warmIvoryCream, // #FAF4E9
    onDarkMuted: '#E8C78D',
  },

  // Borders & Dividers
  borders: {
    light: brandPalette.lightBorder,     // #E8D8C0
    gold: brandPalette.champagneGold,    // #D9A441
    burgundy: brandPalette.royalBurgundy,// #650D25
  },

  // Buttons & CTAs
  buttons: {
    primary: {
      bg: brandPalette.royalBurgundy,
      hoverBg: brandPalette.deepBurgundy,
      text: brandPalette.pureWhite,
    },
    secondary: {
      border: brandPalette.royalBurgundy,
      text: brandPalette.royalBurgundy,
      hoverBg: '#F3E4E8',
    },
    gold: {
      bg: brandPalette.champagneGold,
      hoverBg: '#C59132',
      text: '#2A1808',
    },
  },
} as const;
