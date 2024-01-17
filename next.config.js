/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: 'loremflickr.com',
                protocol: 'https'
            },
        ]
    }
}

module.exports = nextConfig
