import { next } from '@vercel/edge';

export const config = {
  // Match all paths except those starting with api, _vercel, assets, or containing a dot (files).
  matcher: ['/((?!api|_vercel|assets|.*\\..*).*)'],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const accept = request.headers.get('Accept') || '';
  
  // Define valid application routes
  const validRoutes = [
    '/', '/pos-iama', '/pos-iama/',
    '/lista-de-espera', '/lista-de-espera/', '/pos-iama/lista-de-espera', '/pos-iama/lista-de-espera/',
    '/about', '/about/', '/pos-iama/about', '/pos-iama/about/',
    '/contact', '/contact/', '/pos-iama/contact', '/pos-iama/contact/',
    '/privacy', '/privacy/', '/pos-iama/privacy', '/pos-iama/privacy/'
  ];
  
  const is404 = !validRoutes.includes(url.pathname);
  
  if (accept.includes('text/markdown')) {
    if (is404) {
      return new Response('# 404 Not Found\n\nThe requested page could not be found. Please check our documentation or return to the homepage.\n\n[Read our LLMs.txt for more info](/llms.txt)', {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown',
          'Vary': 'Accept'
        }
      });
    }
    
    // For homepage
    if (url.pathname === '/' || url.pathname === '/pos-iama' || url.pathname === '/pos-iama/') {
      return new Response('# Pós-Graduação em Inteligência Artificial Aplicada ao Meio Ambiente\n\nWelcome to the Pós IA.MA. Find more info in our [llms.txt](/llms.txt).', {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown',
          'Vary': 'Accept'
        }
      });
    }
  }

  // Ensure that HTML requests also get 404 status code if not a valid route
  // The original behavior successfully returned 404, so we will just pass through for non-markdown requests.
  return next();
}
