# Eagle Eye Agri Services – Website

## Folder structure
```
eagle-eye-agri/
├── index.html          (page structure)
├── css/style.css       (styles + animations)
├── js/config.js        (EDIT THIS: numbers, names, file paths)
├── js/main.js          (animations, WhatsApp form, video popup)
└── assets/
    ├── images/         (your photos)
    └── videos/         (your videos)
```

## Run in VS Code
1. File > Open Folder > select `eagle-eye-agri`
2. Extensions > install **Live Server** (Ritwick Dey)
3. Right-click `index.html` > **Open with Live Server**
(Internet is needed for Tailwind and Google Fonts.)

## Add your own files
Copy files into assets/ using these exact names, or change the paths in `js/config.js`:

images: hero-poster.jpg, founder.jpg, drone-1.jpg, drone-2.jpg, partner-logo.png,
paddy.jpg, sugarcane.jpg, cotton.jpg, maize.jpg, areca.jpg, groundnut.jpg, tur-dal.jpg, ragi.jpg
videos: hero.mp4, paddy.mp4, groundnut.mp4

Tips: hero video under ~10 MB, MP4 (H.264), 1080p or lower. Photos under 500 KB each (use .jpg/.webp).

## Must change in js/config.js
- whatsappNumber (91 + 10 digits, no spaces or +)
- founder name, drone model names, phone, email, Instagram/YouTube links, partner website

## Deploy
Upload the whole folder to Netlify, Vercel or GitHub Pages.
