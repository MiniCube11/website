import Script from "next/script";

export default function Head() {
    return (
        <>
            <title>Ching Lam Lau</title>
            <meta content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        </>
    )
}