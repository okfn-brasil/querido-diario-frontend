# Plan: Angular to VueJS Refactoring - Querido Diário Frontend

## TL;DR

Refactor the Querido Diário frontend from Angular 11 to Vue 3 with Composition API, maintaining all existing features while modernizing the tech stack. The project consists of ~40+ pages, 20+ reusable components, multiple services for API integration, authentication system, internationalization (PT/EN), and both public-facing and education-specific areas. The migration will be done incrementally to minimize disruption.

## Requirements

### Technical Stack

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety (maintaining existing interfaces)
- **Vue Router 4** for routing
- **Pinia** for global state management (replacing Angular services/Akita)
- **Provide/Inject** for feature-scoped state sharing
- **Local component state** with `ref()`/`reactive()` for UI state
- **Vite** for build tooling (replacing Angular CLI/Webpack)
- **Build Target**: ES2020+ for modern browsers only
- **Axios** for HTTP requests (replacing Angular HttpClient)
- **Day.js** for date/time manipulation (replacing Moment.js)
- **Maska** for input masking (replacing ngx-mask)
- **vue3-carousel** for carousel/slider components (replacing angular-responsive-carousel)
- **TailwindCSS** (already in use - keep configuration)
- **Vue I18n** for internationalization (replacing @ngx-translate)

### UI Component Libraries (to replace Angular Material)

- **Radix Vue** for accessible, unstyled UI primitives (30+ components)
- **VueUse** for common composables and utilities
- Custom components for domain-specific features (cards, carousel, content renderers)

**Rationale**: Radix Vue provides the best balance between comprehensiveness and flexibility. It offers 30+ accessible components (Dialog, Combobox, Select, DatePicker, Toast, Tooltip, etc.) as unstyled primitives that integrate seamlessly with our existing TailwindCSS setup, while allowing full design control. This hybrid approach saves 2-3 weeks of development time compared to building everything custom, while maintaining our design system consistency.

### Development Environment

- Node.js 18+ (upgrade from 16.2.0)
- npm 9+ or pnpm 8+
- Vite 5+
- Vue 3.4+

### State Management Strategy

The application will use a **hybrid approach** combining multiple state management patterns based on scope and use case:

**1. Pinia Stores (Global State)** - 4 stores for application-wide state:
- `useAuthStore`: User authentication, JWT tokens, user profile
- `useSearchStore`: Recent searches cache, saved filters, search history
- `useContentStore`: CMS content caching (blog posts, static pages)
- `useAlertsStore`: User alert subscriptions and management (education area)

**2. Provide/Inject (Feature-Scoped State)** - For component tree state:
- Education search context (filters, results, loading states)
- Gazette search context (filters, results, pagination)
- Multi-step form wizards (shared form state across steps)

**3. Local Component State** - For UI-specific state:
- Modal/dialog visibility
- Form inputs and validation
- Loading spinners and hover states
- Carousel current slide
- Dropdown open/close

**4. Composables (Reusable Logic)** - For shared stateful logic:
- Pagination logic (`usePagination`)
- API calls with loading/error states
- CSV export functionality
- Form validation
- Browser API interactions

**Rationale**: This approach keeps global state minimal and focused, prevents prop drilling in complex features, maintains clear boundaries, and makes testing easier. Each pattern is used where it provides the most benefit: Pinia for cross-route state, Provide/Inject for feature modules, local state for UI, and composables for reusable logic.

### Testing

- **Vitest** for unit testing (replacing Karma/Jasmine)
- **Cypress** or **Playwright** for E2E testing (replacing Protractor)

### Deployment

- Keep current Docker deployment strategy
- Update build scripts in package.json
- Maintain Express server.js for production serving

---

## Features to be Ported

### 1. Pages (Public Area)

- Home (`/`)
- About (`/sobre`, `/en-US/sobre`)
- Technology (`/tecnologia`, `/en-US/tecnologia`)
- Support (`/apoie`)
- Universities (`/universidades`)
- Privacy Policy (`/privacidade`, `/en-US/privacidade`)
- Complaint/Information (`/informacoes`)
- Access Levels (`/acesso`)
- Suggestion (`/sugestao`)
- Glossary (`/glossario`)
- Search Tutorial (`/tecnologia/busca-avancada`)
- Available Cities (`/cidades-disponiveis`)
- Gazette Search (`/pesquisa`)
- Aggregate Data/Statistics (`/dados`)

### 2. Pages (Blog)

- Blog List (`/blog`, `/blog/:id`)
- Blog Post Detail (`/blog/post/:id`)

### 3. Pages (Education Area)

- Education Home (`/educacao`)
- Education Search (`/educacao/busca`)
- About Education (`/educacao/sobre`)
- Start Search (`/educacao/comece`)
- CNPJ Detail (`/educacao/cnpj/:id`)
- Report Detail (`/educacao/relatorio/:id`, `/educacao/caso/:id`)
- Alerts (`/educacao/alertas`)
- Signup (`/educacao/cadastrar`)
- Password Reset (`/educacao/redefinir-senha`)
- Request Analysis Form (`/educacao/pedido-analise`)

### 4. Core Components (20+)

- Header (with navigation, language switcher)
- Footer
- Card
- Carousel
- Icon
- Modal/Dialog
- Video Modal
- Search Form
- Date Picker Range
- Period Picker
- Autocomplete
- Notifications/Snackbar
- Section
- Content renderer
- List/List Item
- Goals
- Infos
- Form Sent confirmation

### 5. Education-Specific Components

- Education Filters (Themes, Period, City)
- Education Item
- Education Pagination
- Alert Modal
- Alert Item
- Edit Email Modal
- Advanced Search Modal
- Reset Password Modal

### 6. Services (API Integration)

- **Gazette Service**: Search, fetch, download gazettes
- **Cities Service**: Get cities, territories
- **Content Service**: Fetch CMS content for pages
- **Territory Service**: State/city hierarchies
- **Blog Service**: Fetch blog posts and categories
- **Aggregate Service**: Statistics and aggregate data
- **Suggestion Service**: Submit suggestions
- **Alerts Service**: Manage user alerts (education area)
- **Education Gazettes Service**: Education-specific gazette searches
- **CNPJ Service**: Company information lookup
- **Reports Service**: Education reports
- **Authentication Service**: Login, signup, token management
- **Education Quotation Service**: Request analysis quotations

### 7. Core Features

- **Multi-language support** (PT-BR, EN-US)
- **Authentication system** with JWT tokens
- **HTTP interceptor** for auth headers
- **Content Management** integration
- **CSV Export** functionality
- **Pagination** across multiple views
- **Advanced search** with filters
- **Responsive design** with mobile support
- **SEO** (meta tags, sitemap, robots.txt)
- **Icons** system (SVG registration)

### 8. State Management Needs

- User authentication state
- Search filters and results
- Selected cities/territories
- Language preference
- Alert subscriptions
- Form states

---

## Plan for the Refactor

### Phase 1: Project Setup & Infrastructure (2-3 weeks)

**Goal**: Establish Vue 3 project foundation alongside existing Angular app

1. **Initialize Vue 3 project** in a new branch or subdirectory
   - Set up Vite with TypeScript
   - Configure build target for ES2020+ (modern browsers only)
   - Configure TailwindCSS (port existing config)
   - Install Radix Vue: `npm install radix-vue`
   - Install VueUse: `npm install @vueuse/core`
   - Install Maska: `npm install maska`
   - Install vue3-carousel: `npm install vue3-carousel`
   - Set up folder structure: `src/components/`, `src/pages/`, `src/composables/`, `src/stores/`, `src/services/`, `src/types/`

2. **Port TypeScript interfaces** from `src/app/interfaces/`
   - Copy all `.ts` interface files to `src/types/`
   - Adjust imports and export patterns for Vue

3. **Set up routing** with Vue Router
   - Create `src/router/index.ts` with all routes from `app-routing.module.ts`
   - Implement route guards for authentication
   - Set up lazy loading for route-based code splitting

4. **Configure internationalization** with Vue I18n
   - Port translation files from Angular i18n
   - Create language switcher composable
   - Set up locale persistence

5. **Set up API layer**
   - Create Axios instance with base configuration
   - Implement request/response interceptors (port from `interceptor.ts`)
   - Configure API endpoints (maintain `constants.ts` and `utils/index.ts`)

6. **Configure Day.js**
   - Install Day.js: `npm install dayjs`
   - Set up plugins (UTC, timezone, customParseFormat, relativeTime, localeData)
   - Create date utility helpers to replace Moment.js patterns
   - Configure PT-BR and EN locales

7. **Initialize Pinia stores** (Global State)
   - `useAuthStore`: User authentication (token, user profile, isAuthenticated, login(), logout(), refreshToken())
   - `useSearchStore`: Search caching (recentSearches, savedFilters, searchHistory, addSearch(), clearHistory())
   - `useContentStore`: CMS content caching (pages, posts, fetchPage(), clearCache())
   - `useAlertsStore`: User alerts (alerts, subscriptions, createAlert(), deleteAlert(), updateAlert())
   - Configure Pinia plugins for localStorage persistence (auth token, language preference)

### Phase 2: Core Services & Composables (2-3 weeks)

**Goal**: Port all Angular services to Vue composables/stores

1. **Port authentication system** (Pinia Store)
   - Convert `login.service.ts` to `useAuthStore` in Pinia
   - Implement JWT token handling with localStorage persistence
   - Add auth interceptor to Axios instance
   - Create route guards for protected routes

2. **Port API services to composables** (Reusable Logic)
   - `useGazettes()` - from `gazette.service.ts` (calls API, optionally updates search store)
   - `useCities()` - from `cities.service.ts` (fetches/caches city lists)
   - `useContent()` - from `content.service.ts` (wrapper for content store)
   - `useBlog()` - from blog service (fetches blog posts with loading/error states)
   - `useTerritory()` - from `territory.service.ts` (state/city hierarchies)
   - `useAlerts()` - from alerts service (wrapper for alerts store)
   - `useCnpj()` - from `cnpj.service.ts` (CNPJ lookup with loading states)
   - `useReports()` - from reports service (education reports with loading states)
   - `useAggregate()` - from aggregate service (statistics data)

3. **Create utility composables** (Reusable Logic)
   - `useDownloadCSV()` - port CSV export functionality (independent state)
   - `useNotification()` - replace MatSnackBar (local notification queue)
   - `useModal()` - dialog management (local modal state)
   - `usePagination()` - pagination logic (independent pagination state per usage)
   - `useMask()` - wrapper for Maska with Brazilian formats (CPF, CNPJ, phone, CEP)

### Phase 3: Shared Components (3-4 weeks)

**Goal**: Build reusable Vue components using Radix Vue primitives and custom implementations

1. **Radix Vue Wrapper Components** (styled with Tailwind) - *Local State*
   - `Modal.vue` - wrap Radix Dialog/AlertDialog (replaces MatDialog) - local `isOpen` state
   - `Select.vue` - wrap Radix Select (replaces MatSelect) - local `selectedValue` state
   - `Autocomplete.vue` - wrap Radix Combobox (replaces MatAutocomplete) - local search/filter state
   - `DatePickerRange.vue` - wrap Radix Calendar/DateRangePicker (port logic from `date-picker-range.component.ts`) - local date selection state
   - `PeriodPicker.vue` - wrap Radix Calendar (port from `period-picker.component.ts`) - local period state
   - `NotificationToast.vue` - wrap Radix Toast (replaces MatSnackBar) - uses `useNotification()` composable
   - `Tooltip.vue` - wrap Radix Tooltip - local visibility state
   - `Dropdown.vue` - wrap Radix DropdownMenu - local `isOpen` state
   - `Tabs.vue` - wrap Radix Tabs (if needed) - local `activeTab` state

2. **Custom UI Components** (built from scratch with Tailwind) - *Local State*
   - `Icon.vue` - port from `icon.component.ts` (stateless)
   - `Card.vue` - port from `card.component.ts` (stateless)
   - `Button.vue` - styled button component - local loading/disabled state
   - `Input.vue` - form input with validation and Maska integration - local value/error/focus state
   - `Carousel.vue` - wrap vue3-carousel with Tailwind styling (port logic from `carousel.component.ts`) - local `currentSlide`, `isAutoPlaying` state

3. **Layout Components** - *Global + Local State*
   - `Header.vue` - port from `header.component.ts` with navigation and language switcher - uses `useAuthStore` (global), local mobile menu state
   - `Footer.vue` - port from `footer.component.ts` (mostly stateless)
   - `Section.vue` - content sections (stateless)

4. **Form Components**
   - `SearchForm.vue` - gazette search
   - `FormSent.vue` - success confirmation

5. **Content Components**
   - `Content.vue` - dynamic content renderer
   - `List.vue` & `ListItem.vue`
   - `Goals.vue`
   - `Infos.vue`

### Phase 4: Public Pages (3-4 weeks)

**Goal**: Port all public-facing pages

1. **Main Pages** - *Content Store + Local State*
   - `Home.vue` - port from `home.component.ts` - uses `useContentStore` for CMS content, local loading state
   - `About.vue` (PT + EN) - port from about components - uses `useContentStore`, local state for section visibility
   - `Tech.vue` (PT + EN) - port from tech components - uses `useContentStore`
   - `Support.vue` - port from `support.component.ts` - uses `useContentStore` for contributors/sponsors
   - `PrivacyPolicy.vue` (PT + EN) - uses `useContentStore`

2. **Information Pages** - *Content Store + Local State*
   - `Universities.vue` - uses `useContentStore`, local filter state
   - `AccessLevels.vue` - port from `access-levels.component.ts` - uses `useContentStore`
   - `Glossary.vue` - port from `glossary.component.ts` - uses `useContentStore`, local search/filter state
   - `Complaint.vue` - local form state, API call via composable
   - `Suggestion.vue` - local form state, uses `useSuggestion()` composable

3. **Search & Data Pages** - *Provide/Inject + Local State*
   - `Search.vue` - gazette search page - **provides** `gazetteSearchContext` (filters, results, loading), uses `useSearchStore` for cache
   - `SearchTutorial.vue` - advanced search guide - uses `useContentStore`
   - `AvailableCities.vue` - uses `useCities()` composable, local loading/filter state
   - `Aggregate.vue` - statistics page - uses `useAggregate()` composable, local state
   - `AggregateSearch.vue` - local form/filter state, uses `useAggregate()` composable

4. **Blog Pages** - *Content Store + Local State*
   - `BlogList.vue` - uses `useBlog()` composable, local pagination with `usePagination()`
   - `BlogPostDetail.vue` - uses `useBlog()` composable, local loading state

### Phase 5: Education Area (3-4 weeks)

**Goal**: Port education-specific features and pages

1. **Authentication Pages** - *Auth Store + Local State*
   - `Signup.vue` - port from signup component - local form state, calls `useAuthStore.signup()`
   - `PassReset.vue` - password reset flow - local form state, uses `useAuth()` composable

2. **Education Pages** - *Provide/Inject + Alerts Store + Local State*
   - `HomeEducacao.vue` - education area home - uses `useContentStore`, uses `useAuthStore` for user state
   - `SearchEducation.vue` - education gazette search - **provides** `educationSearchContext` (theme/period/city filters, results, loading)
   - `AboutEducation.vue` - uses `useContentStore`
   - `StartSearch.vue` - uses `useContentStore`, local state
   - `Alerts.vue` - alert management - uses `useAlertsStore` (global), local UI state for modals
   - `CnpjDetail.vue` - company information - uses `useCnpj()` composable, local loading state
   - `ReportDetail.vue` - report/case details - uses `useReports()` composable, local loading state
   - `RequestAnalysisForm.vue` - request analysis - **provides** `formWizardContext` (multi-step form state), local validation

3. **Education Components** - *Inject Context + Local State*
   - `EducationFilters.vue` (Themes, Period, City filters) - **injects** `educationSearchContext`, local filter UI state
   - `ItemEducation.vue` - search result item - receives props, local expand/collapse state
   - `EduPagination.vue` - **injects** `educationSearchContext` for pagination, uses `usePagination()` composable
   - `AlertModal.vue` - local modal state, calls `useAlertsStore` actions
   - `AlertItem.vue` - receives props, local UI state (expanded, editing)
   - `EditEmailModal.vue` - local form state, calls `useAuthStore` to update email
   - `AdvancedModal.vue` - **injects** `educationSearchContext`, local modal visibility

### Phase 6: Testing & Quality Assurance (2-3 weeks)

**Goal**: Ensure feature parity and stability

1. **Unit Tests**
   - Test all composables with Vitest
   - Test stores (Pinia)
   - Test utility functions
   - Component testing with Vue Test Utils

2. **E2E Tests**
   - Critical user flows: search, authentication, alerts
   - Multi-language navigation
   - Form submissions
   - CSV exports

3. **Visual Testing**
   - Compare screenshots between Angular and Vue versions
   - Responsive design verification
   - Cross-browser testing

4. **Performance Testing**
   - Lighthouse audits
   - Bundle size comparison
   - Load time metrics
   - Core Web Vitals

### Phase 7: Migration & Deployment (1-2 weeks)

**Goal**: Switch to Vue app in production

1. **Update deployment configuration**
   - Update `Dockerfile.dev` for Vue/Vite
   - Update build scripts in `package.json`
   - Configure Express `server.js` for Vue SPA
   - Update environment variable handling

2. **Documentation**
   - Update README with new setup instructions
   - Document new architecture and patterns
   - Create migration guide for contributors
   - Update CONTRIBUTING.md

3. **Deployment Strategy**
   - Deploy Vue version to staging environment
   - Run parallel testing (Angular vs Vue)
   - Gradual rollout with feature flags (if applicable)
   - Monitor error rates and performance

4. **Cleanup**
   - Remove Angular dependencies
   - Archive Angular codebase
   - Remove unused files

---

## Open Questions

1. **Content Management System**: ✅ **RESOLVED** - The project does **NOT use a traditional CMS**. Content is managed through static JSON files stored in `src/assets/pages/` (23+ files including home.json, about.json, blog.json, etc.). The `ContentService` simply fetches these local files via HTTP GET requests. For Vue 3 migration, this approach will be maintained using `fetch()` or Axios in the `useContent()` composable pattern. The Pinia `useContentStore` will implement caching for better performance. No external API contracts need to be updated. This file-based approach provides offline-first capability and simplifies deployment.

2. **UI Component Library**: ✅ **RESOLVED** - Using **Radix Vue** as the primary component library. Radix Vue offers 30+ accessible, unstyled primitives (Dialog, Combobox, Select, Calendar, Toast, etc.) that integrate seamlessly with TailwindCSS. This provides the best balance between development speed, accessibility, and design flexibility. Custom components will be built for domain-specific needs (Card, Carousel, Content renderers).

3. **Migration Strategy**: Should we migrate incrementally (micro-frontend approach with module federation) or do a full rewrite in a separate branch? Incremental allows safer rollback but adds complexity.

4. **State Management**: ✅ **RESOLVED** - Using a **hybrid approach** with four patterns: **(1) Pinia stores** for global state (4 stores: auth, search cache, content cache, alerts), **(2) Provide/Inject** for feature-scoped state (education search context, gazette search context, form wizards), **(3) Local component state** for UI (modals, inputs, loading states), and **(4) Composables** for reusable logic (pagination, API calls, CSV export). This keeps global state minimal, prevents prop drilling, maintains clear boundaries, and improves testability. Rule of thumb: global across routes → Pinia, shared within feature → Provide/Inject, component UI → local state, reusable logic → composables.

5. **Date Library**: ✅ **RESOLVED** - Migrating to **Day.js**. Moment.js is deprecated and has a large bundle size (~70KB). Day.js is a modern, lightweight alternative (~2KB) with a similar API, making the migration straightforward. It has excellent i18n support (needed for PT-BR/EN), immutability, and all necessary plugins (UTC, timezone, parsing, relative time). Date-fns was considered but Day.js's API similarity to Moment.js reduces migration effort.

6. **Build Target**: ✅ **RESOLVED** - Targeting **modern browsers only (ES2020+)**. This decision enables smaller bundle sizes, faster builds, and the ability to use modern JavaScript features (optional chaining, nullish coalescing, BigInt, Promise.allSettled, etc.) without transpilation. Browser support includes Chrome 80+, Firefox 72+, Safari 13.1+, Edge 80+ (released 2020+). Legacy browser users (< 2% market share in 2025) will see an upgrade notice. This aligns with modern web development best practices and reduces build complexity.

7. **Mask Library**: ✅ **RESOLVED** - Using **Maska**. Maska is a modern, lightweight (~2KB) masking library built specifically for Vue 3 with full TypeScript support. It offers dynamic masks (essential for CPF/CNPJ switching based on input length), composable API, and built-in number formatting for Brazilian currency. Key features: `v-maska` directive similar to `ngx-mask`, support for arrays of masks `['###.###.###-##', '##.###.###/####-##']`, and ability to extract both masked and unmasked values. More capable than v-mask, lighter than IMask, and better maintained than alternatives.

8. **Carousel Library**: ✅ **RESOLVED** - Using **vue3-carousel**. vue3-carousel is a modern, lightweight (~15KB) carousel component built specifically for Vue 3 with TypeScript support. It provides the perfect balance for the project's needs: responsive breakpoints (essential for mobile-to-desktop layouts), touch/swipe support, autoplay, customizable navigation/pagination, and easy Tailwind integration. It's a natural migration path from `angular-responsive-carousel` with similar feature set but Vue 3 native. More suitable than Swiper (overkill for content carousels, 40KB), Embla (smaller community), or custom implementation (unnecessary 2-4 days investment). Migration effort: ~1-2 days to port all carousel instances.

---

## Estimated Timeline

**Total: 16-23 weeks (4-6 months)**

This assumes 1-2 full-time developers working on the migration while maintaining the current Angular version for critical bug fixes.

**Note**: The modern browser target (ES2020+) may require a browser upgrade notice for users on legacy browsers (< 2% of traffic). This can be implemented as a simple detection script with a friendly upgrade message.
