/**
 * ============================================================================
 * DEPRECATED - NOT LOADED BY THE BUILD
 * ----------------------------------------------------------------------------
 * Tailwind CSS v4 no longer auto-loads JavaScript config files. Without an
 * explicit `@config` directive in `app/globals.css` this file has NO effect
 * on the build.
 *
 * Because it was silently ignored, 32 utility classes (including
 * `bg-bright-magenta`, `border-light-pink` and the `shadow-neo-*` family)
 * never compiled into the CSS bundle.
 *
 * The design tokens have been migrated to a CSS-first `@theme` block in
 * `app/globals.css`. THIS FILE IS RETAINED FOR REFERENCE ONLY - do not add
 * or change tokens here. Add them to the `@theme` block in
 * `app/globals.css` instead.
 * ============================================================================
 */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-magenta': '#CD0179',
      'bright-magenta': '#DB0183',
      'light-pink': '#F1A4D9',
      'dark-magenta': '#B01171',
      'medium-pink': '#D362AA',
      'muted-pink': '#B05490',
      'off-white': '#FDF1FC',
      'deep-purple': '#7A2D61',
      'ipm-yellow': '#FFC700',
      'ipm-dark': '#0F172A',
      'ipm-bg': '#FDF1FC',
      'slate-dark': '#1a2332',
      white: '#FFFFFF',
      transparent: 'transparent',
      gray: {
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '600': '#4b5563',
        '700': '#374151',
        '900': '#111827',
      },
      red: {
        '100': '#fee2e2',
        '300': '#fca5a5',
        '700': '#b91c1c',
      },
      yellow: {
        '100': '#fef3c7',
        '700': '#b45309',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)'],
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px #0F172A',
        'neo-md': '3px 3px 0px #0F172A',
        'neo-lg': '4px 4px 0px #0F172A',
        'neo-xl': '6px 6px 0px #0F172A',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #CD0179 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-lg': '30px 30px',
      },
    },
  },
  plugins: [],
}
export default config


