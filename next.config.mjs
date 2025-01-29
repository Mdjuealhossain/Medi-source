/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: '"medisourcebd.com"',
            },
        ],
    },
};

export default nextConfig;
