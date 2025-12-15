# **Freelance Web Project Estimation Framework**

_By Adam Moore — Web Developer & Team Lead_

## **Overview**

This document outlines how I structure estimates for freelance web projects based on two core factors:

1. **Infrastructure ownership and maintenance model**
2. **Project complexity and technical scope**

The goal is to create clear expectations upfront — for both the client and myself — around deliverables, costs, and ongoing responsibilities.

---

## **1. Engagement Model Options**

### **Option 1: Client-Owned Infrastructure**

- **Summary:** The client owns and manages their hosting, domain, and infrastructure (e.g., AWS, DigitalOcean, GoDaddy, etc.).
- **Billing Model:** Flat fee for development work.
- **Includes:**

  - Building and deploying to the client’s infrastructure.
  - Support for configuration or CI/CD setup as part of project scope.

- **Considerations:**

  - Requires access and coordination with the client’s systems.
  - Integration complexity may increase time and cost.
  - Ongoing maintenance is the client’s responsibility unless otherwise agreed upon.

### **Option 2: Developer-Owned Infrastructure**

- **Summary:** I own and maintain the hosting, domain, and infrastructure.
- **Billing Model:** Monthly retainer that covers:

  - Hosting and infrastructure costs.
  - Ongoing maintenance, updates, and support.
  - Incremental feature or content updates as agreed upon.

- **Benefits for the client:**

  - No technical overhead or system management.
  - Streamlined updates and faster turnarounds.

- **Considerations:**

  - The site or app remains hosted under my infrastructure and management.
  - Ownership transfer or migration can be quoted separately if needed.

---

## **2. Project Type and Complexity**

| **Project Type**              | **Description**                                                                                                                                      | **Estimated Complexity** | **Typical Starting Cost**                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------- |
| **Static Marketing Page**     | Single-page or small multi-page site with no backend or database. Ideal for product launches, portfolios, or event sites.                            | ★☆☆☆☆                    | $500–$1,500                                 |
| **Corporate / Brochure Site** | Multi-page site with reusable templates, light integrations (contact form, email service), possibly leveraging an existing platform (e.g., FlexHub). | ★★☆☆☆                    | $1,500–$3,500                               |
| **Dynamic Site with Backend** | Custom backend with CRUD functionality, authentication, and dashboards. Hosted database and deployment pipeline required.                            | ★★★☆☆                    | $3,500–$8,000                               |
| **Full SaaS / Web App**       | Multi-service architecture, multiple databases or servers, API integrations, or multi-tenant setup.                                                  | ★★★★★                    | $8,000+ plus monthly or ongoing maintenance |

> 💡 _Projects that use existing internal platforms (like FlexHub) benefit from lower setup costs and faster delivery._

---

## **3. Key Estimation Factors**

When creating an estimate, I consider:

- **Hosting & Infrastructure:** Who owns and manages it (client vs. me).
- **Authentication:** Basic auth (Resend, Auth0, etc.) or custom logic.
- **Database Requirements:** Number of databases, data volume, and expected growth.
- **Integrations:** APIs, third-party tools, or automation systems.
- **Design & UX:** Provided by client vs. created by me.
- **CMS or Admin Tools:** Need for content editing, dashboards, or management panels.
- **Deployment & CI/CD:** Simple static deploy vs. containerized or multi-environment setup.
- **Maintenance:** Is the client expecting post-launch updates or ongoing improvements?

---

## **4. Example Scenarios**

### **A. Startup Landing Page**

- **Type:** Static Marketing Page
- **Infrastructure:** Developer-owned
- **Stack:** Next.js + Tailwind, hosted on DigitalOcean
- **Estimated Cost:** $800 + $25/month hosting

### **B. Company Website**

- **Type:** Corporate Site
- **Infrastructure:** Client-owned (GoDaddy or similar)
- **Stack:** Next.js + Resend (contact form), FlexHub base
- **Estimated Cost:** $2,500 flat fee

### **C. Full Product Platform**

- **Type:** Web App with Backend
- **Infrastructure:** Developer-owned (DigitalOcean App Platform + Managed DB)
- **Stack:** Next.js, Prisma, PostgreSQL, Resend
- **Estimated Cost:** $7,500 setup + $100–$300/month (hosting + maintenance)

---

## **5. Optional Add-Ons**

- **Domain management:** +$15/year
- **Email setup (Resend, Google Workspace):** +$50–$150
- **Design system or branding:** +$300–$1,000
- **Admin panel or CMS integration:** +$500+
- **Analytics & SEO setup:** +$150+

---

## **6. Notes**

- Every project starts with a discovery call and written proposal outlining scope and deliverables.
- I provide itemized estimates before any contract is signed.
- All prices are starting points and subject to adjustment based on timeline, revisions, and complexity.

## **7. Project Planning Workflow**

Use this systematic approach when planning a new project to determine timeline, pricing, and technical requirements.

### **Step 1: Project Type Classification**

Determine the project category based on complexity and requirements:

- **Static Marketing Page** - Single-page or small multi-page site, no backend
- **Corporate / Brochure Site** - Multi-page with light integrations (contact forms, email)
- **Dynamic Site with Backend** - Custom backend, authentication, dashboards, database
- **Full SaaS / Web App** - Multi-service architecture, multi-tenant, complex integrations

### **Step 2: Infrastructure Ownership Decision**

**Option A: Client-Owned Infrastructure**

- Client manages hosting, domain, and infrastructure
- Flat fee for development work
- Client handles ongoing maintenance

**Option B: Developer-Owned Infrastructure**

- We manage all hosting and infrastructure
- Monthly retainer covers hosting + maintenance
- Faster updates and streamlined management

### **Step 3: Infrastructure Cost Calculation (Developer-Owned Only)**

If we're hosting, calculate monthly infrastructure costs:

**Core Hosting:**

- Static Site: $5/month
- Corporate Site: $10/month
- Dynamic Site: $12/month
- Full App: $50/month

**Additional Services:**

- Image Hosting (DigitalOcean Spaces): $5/month
- Database (DigitalOcean Managed DB): $20/month
- Email Hosting (Zoho): $3/month
- Email Sending (Resend): $5/month
- Domain Registration: $2/month
- **FlexHub CMS**: $5/month (if applicable)

**Total Monthly Infrastructure Cost:**

- Static: $5 + $5 (images) + $2 (domain) = **$12/month**
- Corporate: $10 + $5 + $3 + $5 + $2 = **$25/month**
- Dynamic: $12 + $5 + $20 + $3 + $5 + $2 = **$47/month**
- Full App: $50 + $5 + $20 + $3 + $5 + $2 = **$85/month**

### **Step 4: Development Planning**

**User Stories & Time Estimates:**

Create a detailed breakdown of features and estimated development time:

**Example for Corporate Site:**

- Home page design & development: 8 hours
- About page with team section: 4 hours
- Services page with feature cards: 6 hours
- Contact page with form integration: 4 hours
- Blog system setup: 8 hours
- SEO optimization: 3 hours
- Testing & refinement: 4 hours
- **Total: 37 hours**

**Timeline Calculation:**

- Development time ÷ 6 hours per day = Days needed
- Add 20% buffer for revisions and testing
- Example: 37 hours ÷ 6 = 6.2 days + 20% = **8 days**

### **Step 5: Final Pricing Calculation**

**Development Cost:** Hours × Hourly Rate
**Infrastructure Cost:** Monthly hosting (if developer-owned)
**Add-ons:** Domain management, email setup, design system, etc.

**Example Quote:**

- Corporate site development: 37 hours × $75/hour = $2,775
- Monthly hosting: $25/month
- Domain management: +$15/year
- **Total: $2,775 + $25/month + $15/year**

### **Step 6: Risk Assessment**

Identify potential project risks and mitigation strategies:

**High-Risk Factors:**

- **Unclear Requirements** - Client doesn't know what they want
- **Tight Deadlines** - Unrealistic timeline expectations
- **Budget Constraints** - Project scope exceeds available budget
- **Technical Complexity** - Unproven technologies or integrations
- **Stakeholder Changes** - Multiple decision makers with conflicting opinions

**Risk Mitigation Strategies:**

- **Discovery Phase** - Comprehensive requirements gathering before pricing
- **Phased Approach** - Break large projects into smaller, manageable phases
- **Change Control** - Clear process for handling scope changes
- **Regular Check-ins** - Weekly progress updates and feedback loops
- **Documentation** - Written agreements for all decisions and changes

**Red Flags to Watch For:**

- "We'll figure it out as we go"
- "This should be simple, right?"
- "We have a tight budget but big dreams"
- "We need it done yesterday"
- "Can you just add this one small thing?"

### **Step 7: Scope Creep Prevention**

Establish clear boundaries and change management processes:

**Scope Definition:**

- **Included Features** - Detailed list of what's covered in the base price
- **Excluded Features** - Clear list of what's NOT included
- **Assumptions** - Document all assumptions about requirements
- **Dependencies** - External factors that could impact timeline/cost

**Change Management Process:**

1. **Change Request** - Client submits written request for changes
2. **Impact Assessment** - Evaluate time/cost impact of the change
3. **Client Approval** - Written approval before proceeding
4. **Updated Timeline** - Adjust schedule if necessary
5. **Additional Billing** - Charge for changes outside original scope

**Common Scope Creep Areas:**

- **Design Revisions** - "Can we try a different color scheme?"
- **Feature Additions** - "While you're at it, can you add..."
- **Content Changes** - "Actually, we want to change all the copy"
- **Integration Requests** - "Can you connect it to our CRM?"
- **Performance Expectations** - "It needs to be faster"

**Prevention Strategies:**

- **Detailed Contracts** - Specific deliverables and exclusions
- **Change Request Forms** - Formal process for all modifications
- **Regular Reviews** - Weekly check-ins to catch scope drift early
- **Clear Communication** - Document all conversations and decisions
- **Stakeholder Alignment** - Ensure all decision makers are on the same page

### **Step 8: Proposal Structure**

1. **Project Overview** - What we're building and why
2. **Technical Approach** - Stack, infrastructure, and methodology
3. **Timeline** - Development phases and milestones
4. **Investment** - Development cost + ongoing costs
5. **Risk Assessment** - Identified risks and mitigation strategies
6. **Scope Definition** - What's included and excluded
7. **Change Management** - Process for handling scope changes
8. **Next Steps** - How to get started
