/* =====================================================================
   CONFIG — EDIT EVERYTHING YOU NEED TO CHANGE IN THIS ONE FILE
   Files go in assets/images and assets/videos. If a file is missing, a placeholder shows.
   ===================================================================== */
const CONFIG = {
  // Owner WhatsApp number: country code + number, digits only (91 = India)
  whatsappNumber: "918722363471",            // <-- REPLACE with owner's number

  // Hero background: direct .mp4 link of a drone spraying a real farm
  heroVideo: "assets/videos/drone2.mp4",       // put your video in assets/videos/
  heroPoster: "",

  founder: {
    name: "Maharaj Bahaddurdesai",                       // <-- REPLACE
    role: "Owner",
    image: "assets/images/pilot.png",       // <-- founder photo
    bio: "Certified by the DGCA to fly agricultural drones, personally leading every spraying mission across Karnataka."
  },

  drones: [
  { name: "Drone Model Name 1", tag: "DGCA Certified · 13 L tank",
    image: "assets/images/drone1.jpg",
    video: "assets/videos/drone9.mp4" },

  { name: "Drone Model Name 2", tag: "DGCA Certified · 16 L tank",
    image: "assets/images/drone1.jpg",
    video: "assets/videos/drone8.mp4" }
  ],

  // type "image": shows photo.
  // type "video": use  video:"assets/videos/x.mp4"  (plays in a popup)  OR  link:"https://youtu.be/..." (opens YouTube).
  // "image" is the thumbnail for both.
  gallery: [
    { crop: "Paddy",     type: "video", video: "assets/videos/drone1.mp4" },
    { crop: "Sugarcane", type: "image", image: "assets/images/drone1.jpg" },
    { crop: "Cotton",    type: "video", video: "assets/videos/drone2.mp4" },
    { crop: "Maize",     type: "image", image: "assets/images/drone2.png" },
    { crop: "Areca",     type: "video", video: "assets/videos/drone3.mp4" },
    { crop: "Groundnut", type: "image", image: "assets/images/drone3.jpeg" },
    { crop: "Tur dal",   type: "video", video: "assets/videos/drone4.mp4" },
    { crop: "Ragi",      type: "image", image: "assets/images/drone4.jpeg" },
    { crop: "Paddy",     type: "video", video: "assets/videos/drone5.mp4" },
    { crop: "Sugarcane", type: "image", image: "assets/images/drone2.png" },
    { crop: "Cotton",    type: "video", video: "assets/videos/drone6.mp4" },
    { crop: "Maize",     type: "video", video: "assets/videos/drone7.mp4", link: "https://www.instagram.com/reel/DT76PD1EekV/" }
  ],

  stats: [
    { value: 60, suffix: "+", label: "Acres served daily" },
    { value: 16, suffix: "+", label: "Districts covered across Karnataka" }
  ],

  contact: {
    phone: "+91 8722363471",                 // <-- REPLACE
    email: "hello@eagleeyeagri.in",           // <-- REPLACE
    instagram: "https://www.instagram.com/vm_drone_sprey_76/",  // <-- profile link
    youtube: " https://youtube.com/@eagleeye_drones?si=YekQ5kydEPpA6OJ0"       // <-- channel link
  },

  partner: {
    name: "Eagle Eye Drones Pvt Ltd",
    logo: "assets/images/EagleEyeLogo.jpg",    // <-- partner logo
    about: "Our equipment partner, manufacturing the agricultural drones we fly and supporting them with service and spares.",
    website: "https://eagleeyedrones.in/about-eagleeye-drones/"
  }
};