// Configuration for the application
// In production, these should come from environment variables or a secure configuration service

export const APP_CONFIG = {
  // Contact information - should be moved to environment variables in production
  contact: {
    email: process.env.NODE_ENV === 'production' ? 'your-email@domain.com' : 'contact@example.com',
    phone: process.env.NODE_ENV === 'production' ? '+33 X XX XX XX XX' : '+33 1 23 45 67 89',
    location: process.env.NODE_ENV === 'production' ? 'Your City, Country' : 'Paris, France',
    linkedin: process.env.NODE_ENV === 'production' ? 'https://linkedin.com/in/yourprofile' : 'https://linkedin.com/in/example',
    github: process.env.NODE_ENV === 'production' ? 'https://github.com/yourusername' : 'https://github.com/example'
  },
  
  // Application settings
  app: {
    name: 'Mail Reach Notify',
    description: 'Service de notifications email intelligent',
    copyright: new Date().getFullYear()
  },
  
  // Rate limiting (in milliseconds)
  rateLimits: {
    contactForm: 60000, // 1 minute between submissions
    newsletter: 30000   // 30 seconds between subscriptions
  }
} as const;

export type AppConfig = typeof APP_CONFIG;