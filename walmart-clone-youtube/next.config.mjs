/** @type {import('next').NextConfig} */
const nextConfig = {
  
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i5.walmartimages.com',
              port: '',
              // pathname: 'dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg',
            },
            {
              protocol: 'https',
              hostname: 'links.papareact.com',
              port: '',
              // pathname: '/',
            },
          ],
        },

};
// https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg
export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     // domains: ['links.papareact.com'], // Add the domain here
//     // You can also configure other domains if needed
//     // For example:
//     domains: ['links.papareact.com', 'i5.walmartimages.com'],
//   },
// };

// export default nextConfig;