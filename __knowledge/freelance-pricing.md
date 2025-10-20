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
