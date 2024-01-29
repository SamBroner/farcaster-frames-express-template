import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

const port = 8080;

interface IFrameProps {
    frame?: string;
    imageUrl: string;
    buttons?: string[];
    postUrl?: string;
}

function generateFarcasterFrameMetaTag({ frame, imageUrl, postUrl, buttons }: IFrameProps): string {
    // Default to vNext
    if (!frame) {
        frame = "vNext"
    }
    // Ensure there are at most four buttons
    if (buttons && buttons.length > 4) {
        throw new Error("Maximum of four buttons are allowed per frame.");
    }

    // Generate Open Graph tags for image, redirect, and buttons
    let metaTag = `<meta property="fc:frame" content="${frame ? frame : "vNext"}" />\n`;
    metaTag += `<meta property="fc:frame:image" content="${imageUrl}" />\n`;

    if (buttons) {
        buttons.forEach((button, index) => {
            metaTag += `<meta property="fc:frame:button:${index + 1}" content="${button}" />\n`;
        });
    }

    // post URL if exists
    if (postUrl) {
        metaTag += `<meta property="fc:frame:post_url" content="${postUrl}" /> \n`
    }

    return metaTag;
}

function frameGenerator(frameProps: IFrameProps): string {

    const metaTag = generateFarcasterFrameMetaTag(frameProps);

    const html = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Farcaster x Express Frame template</title>
                <meta property="og:title" content="Sam Broner's express farcaster frame template" />
                <meta property="og:image" content="https://example.com/img.png" />
                ${metaTag}
            </head>
        </html>
    `;
    return html;
}

app.get('/frame', (req, res) => {

    const frameProps: IFrameProps = {
        imageUrl: 'https://i.imgur.com/osEKmhB.png',
        buttons: ['get', 'button2'],
    };

    res.status(200).send(frameGenerator(frameProps));
});

app.post('/frame', (req, res) => {

    console.log(req.body)

    const frameProps: IFrameProps = {
        imageUrl:  'https://i.imgur.com/osEKmhB.png',
        buttons: ['post', 'button2'],

    };
    
    res.status(200).send(frameGenerator(frameProps));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
