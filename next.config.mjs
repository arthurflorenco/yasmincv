import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Suporte para arquivos MDX
  experimental: {
    mdxRs: true, // Habilita o uso do novo parser para MDX
  },
  webpack(config, { dev, isServer }) {
    // Adiciona configuração para processar CSS
    if (!isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Usando style-loader e css-loader para CSS
      });
    }

    return config;
  },
};

export default withContentlayer(nextConfig);
