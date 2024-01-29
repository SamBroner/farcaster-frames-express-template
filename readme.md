# Farcaster/Warpcast Frames with Express

Simple express app to post frames.

Test your frames with the [warpcast embed page](https://warpcast.com/~/developers/embeds)
- You cannot test the redirect (loading a new frame via button click) in the embed, you have to tweet

## Frames Quirks
- Frames don't like to render if the route is "/", so target e.g. "/frame"
- Frames require ```<meta property="og:image" content="<exampleimage>" />```
- Frames don't like to render at port 3000?
