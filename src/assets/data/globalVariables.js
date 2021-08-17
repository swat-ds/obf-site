 
 /**
  * This objects contains the VALID and EXISTING pages that are navigable
  * Each of this page can be found under the 'pages' folder, a direct child of the 'src'
  */

 export const globalVariables = {
   //Local links
   about: "/about-project/about",
   doc: "/about-project/documentation",
   contact: "/contact",
   error: "/404",
   home: "/",
   journals: "/journals",
   network: "/network",
   people: "/people",
   timeline: "/background/about-author/timeline",
   essay: "/background/about-author/essay",
   background: "/background/background",
   bibliography: "/background/about-author/bibliography",
   quaker_glossary: "/background/quakers/quaker_glossary",
   quaker_meeting_structure: "/background/quakers/quaker_meeting_structure",

   //External links
   swat: "https://www.swarthmore.edu/",
   fhl: "https://www.swarthmore.edu/friends-historical-library",
   lib: "https://www.swarthmore.edu/libraries",
   tricoLib:
     "https://digitalcollections.tricolib.brynmawr.edu/institution/swarthmore-college",
   swatAddressMap: "https://goo.gl/maps/xmThPZhXkFwh9e2b9",
 };

 export const contacts = {
   swat: {
     address: "500 College Ave, Swarthmore, PA 19081",
     phone: " (610) 328-8000",
     email: "admissions@swarthmore.edu",
   },
   fhl: {
     address: "500 College Ave, Swarthmore, PA 19081",
     phone: " (610) 328-8496",
     email: "friends@swarthmore.edu",
   },
   library: {
     address: "500 College Ave, Swarthmore, PA 19081",
     phone: " (610) 328-8477",
     email: "circ@swarthmore.edu",
   },
 };

 export const months = [
    { name: "January", abbr: "Jan" },
    { name: "Febuary", abbr: "Feb" },
    { name: "March", abbr: "Mar" },
    { name: "April", abbr: "Apr" },
    { name: "May", abbr: "May" },
    { name: "June", abbr: "Jun" },
    { name: "July", abbr: "Jul" },
    { name: "August", abbr: "Aug" },
    { name: "September", abbr: "Sep" },
    { name: "October", abbr: "Oct" },
    { name: "November", abbr: "Nov" },
    { name: "December", abbr: "Dec" },
 ];
