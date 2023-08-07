/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
            "images.unsplash.com",
            "tailus.io"
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
