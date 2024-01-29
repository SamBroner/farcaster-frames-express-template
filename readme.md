# Farcaster Frames Express

Simple express app to post frames

## Frames Quirks
- Frames don't like to render if the route is "/", so target e.g. "/frame"
- Frames require <meta property="og:image" content="<exampleimage>" />
- Frames don't like to render at port 3000?


I'm pretty sure this commit worked:
https://github.com/SamBroner/frames-express/commit/7e0e43f95b8887ea38bad0fe81fa96e9d6992e33