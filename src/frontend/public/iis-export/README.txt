RAJPRABHA ASSOCIATES - STATIC WEBSITE FOR IIS
==============================================

FOLDER STRUCTURE
  index.html, about.html, projects.html
  project-1.html to project-4.html
  testimonials.html, contact.html
  web.config
  css/styles.css
  images/ (10 image files)

IIS DEPLOYMENT
1. Copy all contents to: C:\inetpub\wwwroot\rajprabha\
2. IIS Manager > Add Website > point to that folder
3. Application Pool: Set .NET CLR to "No Managed Code"
4. Browse to http://localhost or your domain
