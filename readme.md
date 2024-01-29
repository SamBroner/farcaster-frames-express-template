# Farcaster Frames Express

Simple express app to post frames.

Test your frames with the [warpcast embed page](https://warpcast.com/~/developers/embeds)

## Frames Quirks
- Frames don't like to render if the route is "/", so target e.g. "/frame"
- Frames require ```<meta property="og:image" content="<exampleimage>" />```
- Frames don't like to render at port 3000?
