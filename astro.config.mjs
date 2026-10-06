import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isProjectPage = Boolean(owner && repository && repository !== owner + '.github.io');

export default defineConfig({
  site: owner ? 'https://' + owner + '.github.io' : 'https://example.github.io',
  base: isProjectPage ? '/' + repository : '/',
  markdown: {
    shikiConfig: {
      theme: {
        name: 'ctf-terminal',
        type: 'dark',
        colors: {
          'editor.background': '#0a0b0e',
          'editor.foreground': '#dedee5',
        },
        tokenColors: [
          { scope: ['comment'], settings: { foreground: '#7f818d' } },
          { scope: ['string', 'constant.other.symbol'], settings: { foreground: '#dfb577' } },
          { scope: ['keyword', 'storage'], settings: { foreground: '#bbb6da' } },
          { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#d0ad8b' } },
          { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#e4e4e7' } },
          { scope: ['variable', 'entity.name.type', 'support.type'], settings: { foreground: '#c5c6d0' } },
          { scope: ['punctuation'], settings: { foreground: '#a3a5af' } },
        ],
      },
    },
  },
});
