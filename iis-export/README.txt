RAJPRABHA ASSOCIATES - IIS DEPLOYMENT GUIDE
============================================

FOLDER STRUCTURE:
  index.html          - Home page
  about.html          - About Us
  projects.html       - Projects listing
  project-1.html      - Rajprabha Heights
  project-2.html      - Rajprabha Garden Villas
  project-3.html      - Rajprabha Skyline
  project-4.html      - Rajprabha Green Valley
  testimonials.html   - Testimonials
  contact.html        - Contact Us
  web.config          - IIS configuration
  css/styles.css      - All styles
  images/             - Place your images here

IIS DEPLOYMENT STEPS:
1. Copy ALL files from this folder to: C:\inetpub\wwwroot\rajprabha\
2. Open IIS Manager (Start > IIS Manager)
3. Right-click "Sites" > "Add Website"
4. Site name: Rajprabha
5. Physical path: C:\inetpub\wwwroot\rajprabha
6. Port: 80 (or your preferred port)
7. Set Application Pool to "No Managed Code" (.NET CLR Version: No Managed Code)
8. Click OK and Start the site

ADDING REAL IMAGES:
- hero-1.jpg, hero-2.jpg, hero-3.jpg  (Home carousel - 1200x520px)
- project-1.jpg, project-2.jpg, project-3.jpg, project-4.jpg  (Project thumbnails - 600x400px)
- about-team.jpg  (About page - 600x400px)
- logo.png  (Logo - transparent background, ~200x60px)

Support: Contact Rajprabha Associates IT team
