// next.config.mjs
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // GitHub Pages가 보통 /<repo>/ 경로라서 production에서만 basePath 적용
  basePath: isProd && repo ? `/${repo}` : '',
  assetPrefix: isProd && repo ? `/${repo}/` : '',
};

export default nextConfig;
