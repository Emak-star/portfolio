export const siteConfig = {
  name: 'Emaks',
  role: 'Frontend Developer',
  tagline: 'React · TypeScript · Tailwind · AI integrations',
  email: 'emakenemiprosper@gmail.com',
  location: 'Lagos, Nigeria · Remote',
  experience: '~3 years frontend',
  github: 'https://github.com/Emak-star',
  linkedin: 'https://www.linkedin.com/in/samuel-emakenemi-866730191/',
  upwork: 'https://www.upwork.com/freelancers/~01856b29d91161af8a?mp_source=share',
  cv: '/cv.pdf',
}

export const projects = [
  {
    id: 'ai-dashboard',
    title: 'AI content dashboard',
    image: '/projects/ai-dashboard.png', 
    description:
      'A SaaS-style web app where users generate, manage, and export AI-written content. Built with Next.js App Router, Vercel AI SDK for streaming responses, and localStorage for persistence. Features real-time output, tone selector, content history, and dark mode.',
    // thumb: 'AI SaaS Dashboard · Next.js',
    // thumbClass: 'thumb-blue',
    // thumbIcon: '⚡',
    badges: ['Next.js 14', 'TypeScript', 'Claude API', 'Tailwind'],
    metrics: [
      { label: 'Streaming', value: 'responses' },
      { label: 'Claude API', value: 'integrated' },
      { label: '5 days', value: 'to build' },
    ],
    demo: '#',
    github: '#',
    caseStudy: '#',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce storefront',
    image: '/projects/lumiere.png',
    description:
      'A fully responsive product listing, cart, and checkout flow. Focus on performance — 98 Lighthouse score, accessible, mobile-first.',
    // thumb: 'E-commerce UI · React',
    // thumbClass: 'thumb-teal',
    // thumbIcon: '🛒',
    badges: ['React', 'TypeScript', 'Tailwind'],
    metrics: [
      { label: '98', value: 'Lighthouse' },
      { label: 'Mobile', value: 'first' },
    ],
    demo: 'https://lumiere-storefront-gamma.vercel.app',
    github: 'https://github.com/Emak-star/lumiere-storefront',
    caseStudy: '#',
    featured: false,
  },
  {
    id: 'ai-chat',
    title: 'AI chat interface',
    image: '/projects/ai-chat.png',
    description:
      'A clean, streaming chat UI built on Next.js. Supports markdown rendering, conversation history, and custom system prompts.',
    // thumb: 'AI Chat UI · Next.js',
    // thumbClass: 'thumb-purple',
    // thumbIcon: '💬',
    badges: ['Next.js', 'Tailwind', 'Vercel AI SDK'],
    metrics: [
      { label: 'Streaming', value: 'responses' },
      { label: 'Vercel', value: 'AI SDK' },
    ],
    demo: 'https://synth-ai-chat.vercel.app/chat',
    github: 'https://github.com/Emak-star/synth-ai-chat',
    caseStudy: '#',
    featured: false,
  },
]

export const testimonials = [
  {
    quote:
      'Built our landing page in 3 days and it looked better than we imagined. Clean code, no back-and-forth needed. We\'ll definitely work together again.',
    name: 'Ade Okafor',
    role: 'Founder, Zenvoy',
    initials: 'AO',
    color: 'blue',
  },
  {
    quote:
      'Really impressive React skills for someone at this stage. The TypeScript was clean, the components were well-structured, and they asked the right questions upfront.',
    name: 'Kemi Martins',
    role: 'Senior Engineer, Flutterwave',
    initials: 'KM',
    color: 'green',
  },
  {
    quote:
      'Worked together on a dashboard project. Delivered on time, communicated clearly, and the final product was exactly what we needed.',
    name: 'Tunde Nwachukwu',
    role: 'Product Manager, Paystack',
    initials: 'TN',
    color: 'amber',
  },
]

export const skills = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'TypeScript', pct: 80 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'AI integrations', pct: 72 },
]

export const aiTools = ['Cursor', 'v0.dev', 'Claude API', 'Vercel AI SDK', 'GitHub Copilot']

export const values = [
  'Clean, readable code',
  'Fast load times',
  'Honest communication',
  'Shipping on time',
]
