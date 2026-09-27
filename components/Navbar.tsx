'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

type SubLink = { href: string; label: string }

const PROFILE_LINKS: SubLink[] = [
  { href: '/profile/sejarah', label: 'Sejarah IPM' },
  { href: '/profile/sulteng', label: 'Profil IPM Sulteng' },
]

const DIRECTORY_LINKS: SubLink[] = [
  { href: '/directory/mars-ipm', label: 'Mars IPM' },
  { href: '/directory/pedoman-ipm', label: 'Pedoman IPM' },
  { href: '/directory/materi-ipm', label: 'Materi IPM' },
  { href: '/directory/materi-sulteng', label: 'Materi IPM SulTeng' },
]

/* -------------------------------------------------------------------------
 * Class builders.
 * Active states are selected from mutually exclusive branches so that no
 * specificity or !important overrides are ever required.
 * ---------------------------------------------------------------------- */

// Shared underline treatment for desktop top-level items.
const UNDERLINE =
  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-light-pink after:transition-transform after:duration-200"

// Active/inactive branches are shared by every desktop item so the colour and
// underline treatment can never drift apart between two nav entries.
const DESKTOP_ACTIVE = 'text-off-white after:scale-x-100'
const DESKTOP_IDLE = 'text-white hover:text-off-white hover:after:scale-x-100'

/** Plain text item: "Beranda", "Administrasi", "Berita". */
const desktopLinkClass = (active: boolean) =>
  [
    'relative px-1 py-2 font-medium transition-colors duration-200',
    UNDERLINE,
    active ? DESKTOP_ACTIVE : DESKTOP_IDLE,
  ].join(' ')

/**
 * Dropdown trigger (label + chevron), used by BOTH "Profil" and "Direktori".
 *
 * The `flex items-center gap-1` is load-bearing, not decoration: without it the
 * inline <svg> falls back to baseline alignment (the chevron renders visibly
 * lower than the text) and the spacing degenerates into a JSX whitespace text
 * node of unpredictable width. `shrink-0` is likewise a no-op outside a flex
 * container. Keeping one builder for both triggers makes that regression
 * impossible to reintroduce on a single item.
 */
const desktopDropdownTriggerClass = (active: boolean) =>
  [
    'relative flex items-center gap-1 px-1 py-2 font-medium transition-colors duration-200',
    UNDERLINE,
    active ? DESKTOP_ACTIVE : DESKTOP_IDLE,
  ].join(' ')

/** Chevron inside a desktop dropdown trigger; rotates with the trigger. */
const desktopChevronClass =
  'shrink-0 transition-transform duration-200 group-hover:rotate-180'

// `invisible` (a valid v4 name) replaces the invalid `visibility-hidden` class.
// `group-focus-within` keeps the panel reachable by keyboard.
const DROPDOWN_WRAPPER =
  'invisible absolute left-0 top-full z-20 w-48 pt-2 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100'

/**
 * Inner card. `overflow-hidden` is required for the rounded corners, which is
 * also why the hover bridge lives on the outer wrapper: a `::before` bridge
 * placed on the card itself would be clipped away by that overflow.
 */
const DROPDOWN_PANEL =
  'w-full overflow-hidden rounded-lg border-2 border-primary-magenta bg-white shadow-neo-lg'

const DROPDOWN_ITEM =
  'flex min-h-[44px] items-center border-b border-gray-200 px-4 py-2 font-medium text-ipm-dark transition-colors duration-200 last:border-b-0 hover:bg-off-white hover:text-primary-magenta'

// Mobile drawer links: 44px minimum touch target plus a persistent left bar,
// so the active route is obvious on touch devices (hover styles are compiled
// out of touch UAs by Tailwind's `@media (hover: hover)` wrapper).
const drawerLinkClass = (active: boolean) =>
  [
    'flex min-h-[44px] w-full items-center rounded-lg border-l-4 py-2 pl-3 pr-2 text-left font-medium transition-colors duration-200',
    active
      ? 'border-l-light-pink bg-off-white/15 font-semibold text-off-white'
      : 'border-l-transparent text-white hover:border-l-light-pink hover:bg-off-white/10',
  ].join(' ')

const drawerSubLinkClass = (active: boolean) =>
  [
    'flex min-h-[44px] w-full items-center rounded-lg border-l-4 py-2 pl-3 pr-2 text-left text-sm font-medium transition-colors duration-200',
    active
      ? 'border-l-light-pink bg-off-white/10 font-semibold text-off-white'
      : 'border-l-transparent text-white/90 hover:border-l-light-pink hover:bg-off-white/10 hover:text-white',
  ].join(' ')
/** Chevron-only accordion toggle in the mobile drawer (both sections). */
const drawerToggleClass =
  'flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-off-white/10'

type DrawerSectionProps = {
  /** DOM id suffix, e.g. "profile" -> drawer-profile-submenu. */
  id: string
  href: string
  label: string
  links: SubLink[]
  active: boolean
  open: boolean
  onToggle: () => void
  onNavigate: () => void
  isActive: (href: string) => boolean
}

/**
 * Mobile-drawer section with a sub-menu (Profil / Direktori).
 *
 * Extracted so the two sections are byte-identical in structure and styling.
 * Previously "Direktori" drifted from "Profil": its label was a <button> that
 * only toggled (so /directory was unreachable) and it carried a second,
 * duplicate onClick/aria-expanded/aria-controls pair.
 *
 * The label is a <Link> that navigates to the section index and closes the
 * drawer; the adjacent chevron is a separate toggle-only button. That keeps
 * one tap per intent and avoids the ambiguous "button that navigates" and
 * "button that toggles" mix-ups.
 */
function DrawerSection({
  id,
  href,
  label,
  links,
  active,
  open,
  onToggle,
  onNavigate,
  isActive,
}: DrawerSectionProps) {
  return (
    <div className="rounded-lg transition-colors duration-200">
      <div className="flex items-stretch">
        <Link
          href={href}
          onClick={onNavigate}
          aria-current={active ? 'page' : undefined}
          className={drawerLinkClass(active)}
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`drawer-${id}-submenu`}
          aria-label={
            open ? `Sembunyikan submenu ${label}` : `Tampilkan submenu ${label}`
          }
          className={drawerToggleClass}
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              open ? 'rotate-180 text-light-pink' : ''
            }`}
          />
        </button>
      </div>
      {open && (
        <div
          id={`drawer-${id}-submenu`}
          className="ml-3 mt-1 space-y-1 border-l-2 border-light-pink pl-3"
        >
          {links.map((link) => {
            const linkActive = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                aria-current={linkActive ? 'page' : undefined}
                className={drawerSubLinkClass(linkActive)}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  /** Active-route matching: exact for `/`, prefix for nested sections. */
  const isActive = useCallback(
    (href: string) =>
      href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  )

  /*
   * Route flags are derived *before* the accordion state so both the initial
   * render and the sync effect below read from a single source of truth.
   */
  const homeActive = isActive('/')
  const profileActive = isActive('/profile')
  const directoryActive = isActive('/directory')
  const administrationActive = isActive('/administration')
  const newsActive = isActive('/news')

  /**
   * Seed the accordions from the *section* route (not from the sub-links) so
   * the active section is already expanded on the first paint and in the
   * server-rendered HTML. Seeding from the sub-links left the section index
   * itself (`/profile`, `/directory`) highlighted as current while its
   * sub-menu stayed closed.
   */
  const [isProfileOpen, setIsProfileOpen] = useState(() => profileActive)
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(
    () => directoryActive,
  )

  const closeMenu = useCallback(() => setIsOpen(false), [])

  /*
   * Single route-sync effect. It replaces the previous pair of effects, where
   * the first unconditionally forced both accordions shut on every route
   * change (and on mount, undoing the lazy initialisers) while the second
   * immediately re-opened one of them again.
   *
   * Now the drawer always closes on navigation, and each accordion simply
   * tracks whether its own section owns the current route - so navigating
   * *within* a section keeps it open, leaving the section closes it, and a
   * deliberate manual collapse survives unrelated re-renders (this effect
   * only re-runs when a route flag actually flips).
   */
  useEffect(() => {
    setIsOpen(false)
    setIsProfileOpen(profileActive)
    setIsDirectoryOpen(directoryActive)
  }, [profileActive, directoryActive])

  // 3. Lock body scroll while the drawer is open so the page behind the
  //    overlay cannot scroll.
  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // 4. Escape closes the drawer and returns focus to the button that opened
  //    it, so keyboard users are never dropped at the top of the document.
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const submitSearch = () => {
    const query = searchQuery.trim()
    if (!query) return
    setIsOpen(false)
    router.push(`/news?search=${encodeURIComponent(query)}`)
  }

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-dark-magenta bg-primary-magenta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          {/* Branding - the org name is now visible on phones (< 640px) too. */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-2 font-bold sm:gap-3"
          >
            <div className="flex shrink-0 items-center">
              <Image
                src="/Logo_Kabinet.jpeg"
                alt="Logo PW IPM Sulawesi Tengah"
                height={40}
                width={40}
                className="h-9 w-auto object-contain md:h-10"
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="truncate text-[11px] font-bold leading-tight text-white sm:text-xs md:text-sm">
                Ikatan Pelajar Muhammadiyah
              </p>
              <p className="truncate text-[10px] font-semibold uppercase leading-tight tracking-wider text-off-white/90 sm:text-[11px] md:text-xs">
                Sulawesi Tengah
              </p>
            </div>
          </Link>

          {/* Desktop Navigation (>= 768px) */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className={desktopLinkClass(homeActive)}
              aria-current={homeActive ? 'page' : undefined}
            >
              Beranda
            </Link>

            {/* Profile Dropdown */}
            <div className="group relative">
              <Link
                href="/profile"
                className={desktopDropdownTriggerClass(profileActive)}
                aria-current={profileActive ? 'page' : undefined}
                aria-haspopup="true"
              >
                Profil
                <ChevronDown size={18} className={desktopChevronClass} />
              </Link>
              <div className={DROPDOWN_WRAPPER}>
                <div className={DROPDOWN_PANEL}>
                  {PROFILE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={DROPDOWN_ITEM}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Directory Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={desktopDropdownTriggerClass(directoryActive)}
                aria-current={directoryActive ? 'page' : undefined}
                aria-haspopup="true"
              >
                Direktori
                <ChevronDown size={18} className={desktopChevronClass} />
              </button>
              <div className={DROPDOWN_WRAPPER}>
                <div className={DROPDOWN_PANEL}>
                  {DIRECTORY_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={DROPDOWN_ITEM}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/administration"
              className={desktopLinkClass(administrationActive)}
              aria-current={administrationActive ? 'page' : undefined}
            >
              Administrasi
            </Link>
            <Link
              href="/news"
              className={desktopLinkClass(newsActive)}
              aria-current={newsActive ? 'page' : undefined}
            >
              Berita
            </Link>

            {/* Expandable Search (hover or focus to reveal) */}
            <div className="group relative flex items-center gap-1">
              <input
                type="search"
                placeholder="Cari warta / materi..."
                aria-label="Cari warta atau materi"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') submitSearch()
                }}
                className="w-0 overflow-hidden border-2 border-white bg-white px-3 py-1.5 text-xs opacity-0 transition-all duration-300 ease-in-out placeholder-gray-400 focus:border-light-pink focus:outline-none focus:ring-2 focus:ring-light-pink group-focus-within:w-48 group-focus-within:opacity-100 group-hover:w-48 group-hover:opacity-100"
              />
              <button
                type="button"
                onClick={submitSearch}
                aria-label="Cari warta atau materi"
                className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md p-2 text-white transition-colors duration-200 hover:text-light-pink"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-off-white/10 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer - fixed overlay with backdrop blur. `invisible` also
          removes the closed panel from the tab order so its links stay
          unfocusable while off-screen. */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen
            ? 'visible pointer-events-auto'
            : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className={`absolute inset-0 bg-deep-purple/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col border-r-4 border-deep-purple bg-bright-magenta shadow-neo-xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex shrink-0 items-center justify-between gap-2 border-b-2 border-deep-purple px-4 py-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-off-white">
              Menu Navigasi
            </p>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Tutup menu navigasi"
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-off-white/10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Panel body */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
            <nav className="space-y-1.5" aria-label="Navigasi utama seluler">
              <Link
                href="/"
                onClick={closeMenu}
                aria-current={homeActive ? 'page' : undefined}
                className={drawerLinkClass(homeActive)}
              >
                Beranda
              </Link>

              {/* Profile accordion */}
              <DrawerSection
                id="profile"
                href="/profile"
                label="Profil"
                links={PROFILE_LINKS}
                active={profileActive}
                open={isProfileOpen}
                onToggle={() => setIsProfileOpen((open) => !open)}
                onNavigate={closeMenu}
                isActive={isActive}
              />

              {/* Directory accordion */}
              <DrawerSection
                id="directory"
                href="/directory"
                label="Direktori"
                links={DIRECTORY_LINKS}
                active={directoryActive}
                open={isDirectoryOpen}
                onToggle={() => setIsDirectoryOpen((open) => !open)}
                onNavigate={closeMenu}
                isActive={isActive}
              />

              <Link
                href="/administration"
                onClick={closeMenu}
                aria-current={administrationActive ? 'page' : undefined}
                className={drawerLinkClass(administrationActive)}
              >
                Administrasi
              </Link>
              <Link
                href="/news"
                onClick={closeMenu}
                aria-current={newsActive ? 'page' : undefined}
                className={drawerLinkClass(newsActive)}
              >
                Berita
              </Link>
            </nav>

            {/* Search */}
            <div className="mt-5 border-t border-off-white/20 pt-4">
              <label htmlFor="drawer-search" className="sr-only">
                Cari warta atau materi
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="drawer-search"
                  type="search"
                  placeholder="Cari warta / materi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') submitSearch()
                  }}
                  className="min-h-[44px] min-w-0 flex-1 rounded-md border-2 border-white bg-white px-3 py-2 text-sm text-ipm-dark placeholder-gray-400 transition-colors focus:border-light-pink focus:outline-none focus:ring-2 focus:ring-light-pink"
                />
                <button
                  type="button"
                  onClick={submitSearch}
                  aria-label="Cari warta atau materi"
                  className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md border-2 border-deep-purple bg-off-white text-primary-magenta transition-colors duration-200 hover:bg-light-pink"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}