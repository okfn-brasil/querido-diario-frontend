# Plan: Angular to VueJS Refactoring - Querido Diário Frontend

## TL;DR

Refactor the Querido Diário frontend from Angular 11 to Vue 3 with Composition API, maintaining all existing features while modernizing the tech stack. The project consists of ~40+ pages, 20+ reusable components, multiple services for API integration, authentication system, internationalization (PT/EN), and both public-facing and education-specific areas. The migration will be done incrementally to minimize disruption.

## Requirements

### Technical Stack

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety (maintaining existing interfaces)
- **Vue Router 4** for routing
- **Pinia** for state management (replacing Angular services/Akita)
- **Vite** for build tooling (replacing Angular CLI/Webpack)
- **Axios** for HTTP requests (replacing Angular HttpClient)
- **TailwindCSS** (already in use - keep configuration)
- **Vue I18n** for internationalization (replacing @ngx-translate)

### UI Component Libraries (to replace Angular Material)

- **Headless UI** or **Radix Vue** for accessible components
- **VueUse** for common composables
- Custom components for specific Material UI features (dialogs, snackbars, autocomplete, date pickers)

### Development Environment

- Node.js 18+ (upgrade from 16.2.0)
- npm 9+ or pnpm 8+
- Vite 5+
- Vue 3.4+

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
   - Configure TailwindCSS (port existing config)
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

6. **Initialize Pinia stores**
   - `useAuthStore`: User authentication, token management
   - `useSearchStore`: Search filters and results
   - `useContentStore`: CMS content caching
   - `useAlertsStore`: User alerts management

### Phase 2: Core Services & Composables (2-3 weeks)

**Goal**: Port all Angular services to Vue composables/stores

1. **Port authentication system**
   - Convert `login.service.ts` to Pinia store
   - Implement JWT token handling
   - Create `useAuth()` composable for components

2. **Port API services** to composables pattern
   - `useGazettes()` - from `gazette.service.ts`
   - `useCities()` - from `cities.service.ts`
   - `useContent()` - from `content.service.ts`
   - `useBlog()` - from blog service
   - `useTerritory()` - from `territory.service.ts`
   - `useAlerts()` - from alerts service
   - `useCnpj()` - from `cnpj.service.ts`
   - `useReports()` - from reports service
   - `useAggregate()` - from aggregate service

3. **Create utility composables**
   - `useDownloadCSV()` - port CSV export functionality
   - `useNotification()` - replace MatSnackBar
   - `useModal()` - dialog management
   - `usePagination()` - pagination logic

### Phase 3: Shared Components (3-4 weeks)

**Goal**: Build reusable Vue components to replace Angular Material and custom components

1. **Core UI Components**
   - `Icon.vue` - port from `icon.component.ts`
   - `Card.vue` - port from `card.component.ts`
   - `Modal.vue` - replace MatDialog
   - `Button.vue` - styled button component
   - `Input.vue` - form input with validation
   - `Select.vue` - dropdown component
   - `Autocomplete.vue` - replace MatAutocomplete

2. **Date/Time Components**
   - `DatePickerRange.vue` - port from `date-picker-range.component.ts`
   - `PeriodPicker.vue` - port from `period-picker.component.ts`

3. **Layout Components**
   - `Header.vue` - port from `header.component.ts` with navigation and language switcher
   - `Footer.vue` - port from `footer.component.ts`
   - `Section.vue` - content sections
   - `Carousel.vue` - port from `carousel.component.ts`

4. **Form Components**
   - `SearchForm.vue` - gazette search
   - `FormSent.vue` - success confirmation
   - `NotificationToast.vue` - replace MatSnackBar

5. **Content Components**
   - `Content.vue` - dynamic content renderer
   - `List.vue` & `ListItem.vue`
   - `Goals.vue`
   - `Infos.vue`

### Phase 4: Public Pages (3-4 weeks)

**Goal**: Port all public-facing pages

1. **Main Pages**
   - `Home.vue` - port from `home.component.ts`
   - `About.vue` (PT + EN) - port from about components
   - `Tech.vue` (PT + EN) - port from tech components
   - `Support.vue` - port from `support.component.ts`
   - `PrivacyPolicy.vue` (PT + EN)

2. **Information Pages**
   - `Universities.vue`
   - `AccessLevels.vue` - port from `access-levels.component.ts`
   - `Glossary.vue` - port from `glossary.component.ts`
   - `Complaint.vue`
   - `Suggestion.vue`

3. **Search & Data Pages**
   - `Search.vue` - gazette search page
   - `SearchTutorial.vue` - advanced search guide
   - `AvailableCities.vue`
   - `Aggregate.vue` - statistics page
   - `AggregateSearch.vue`

4. **Blog Pages**
   - `BlogList.vue`
   - `BlogPostDetail.vue`

### Phase 5: Education Area (3-4 weeks)

**Goal**: Port education-specific features and pages

1. **Authentication Pages**
   - `Signup.vue` - port from signup component
   - `PassReset.vue` - password reset flow

2. **Education Pages**
   - `HomeEducacao.vue` - education area home
   - `SearchEducation.vue` - education gazette search
   - `AboutEducation.vue`
   - `StartSearch.vue`
   - `Alerts.vue` - alert management
   - `CnpjDetail.vue` - company information
   - `ReportDetail.vue` - report/case details
   - `RequestAnalysisForm.vue` - request analysis

3. **Education Components**
   - `EducationFilters.vue` (Themes, Period, City filters)
   - `ItemEducation.vue` - search result item
   - `EduPagination.vue`
   - `AlertModal.vue`
   - `AlertItem.vue`
   - `EditEmailModal.vue`
   - `AdvancedModal.vue`

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

1. **Content Management System**: What CMS is being used for dynamic content (via `ContentService`)? Do we need to update API contracts?

2. **UI Component Library**: Should we use Headless UI, Radix Vue, PrimeVue, or build custom components? Trade-off between development speed and customization.

3. **Migration Strategy**: Should we migrate incrementally (micro-frontend approach with module federation) or do a full rewrite in a separate branch? Incremental allows safer rollback but adds complexity.

4. **State Management**: Should we use Pinia for all state or keep some as local component state with `provide/inject`? Current Angular app uses both services (global) and component state.

5. **Date Library**: Continue with Moment.js (deprecated) or switch to Day.js/date-fns during migration?

6. **Build Target**: Should we optimize for modern browsers only (ES2020+) or maintain broader compatibility similar to Angular config?

7. **Mask Library**: Port `ngx-mask` functionality - use `v-mask` or `maska` for Vue, or custom implementation?

8. **Carousel Library**: Replace `angular-responsive-carousel` with Vue equivalent - `vue3-carousel`, `swiper`, or custom?

---

## Estimated Timeline

**Total: 16-23 weeks (4-6 months)**

This assumes 1-2 full-time developers working on the migration while maintaining the current Angular version for critical bug fixes.
