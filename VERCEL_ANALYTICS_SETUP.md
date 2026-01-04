# Vercel Web Analytics Setup Guide

This project has Vercel Web Analytics integrated and configured. This guide explains the setup and how to work with it.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. Install it using:

```bash
npm i -g vercel
```

Or use your preferred package manager:

```bash
# Using pnpm
pnpm i -g vercel

# Using yarn
yarn global add vercel

# Using bun
bun add -g vercel
```

## Current Setup

### 1. ✅ Package Installation

The `@vercel/analytics` package is already installed in this project. You can verify this by checking `package.json`:

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.6.1"
  }
}
```

If you need to add it to a fresh project, run:

```bash
npm i @vercel/analytics
```

### 2. ✅ Analytics Component Integration

The Analytics component is already integrated in the main App component (`src/App.tsx`):

```tsx
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Routes */}
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

The `<Analytics />` component is placed at the root level of the app to track all page views and user interactions across your application.

## Enabling Web Analytics in Vercel Dashboard

To start tracking data, you need to enable Web Analytics on your Vercel project:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

## Deployment

Deploy your app to Vercel using:

```bash
vercel deploy
```

Or if you've connected your Git repository, simply push to your main branch and Vercel will automatically deploy:

```bash
git push origin main
```

> **Tip:** Connect your project's Git repository to enable automatic deployments. This allows Vercel to deploy your latest commits without needing terminal commands.

## Viewing Your Analytics Data

Once your app is deployed and Web Analytics is enabled:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab

You'll be able to see:
- Visitor count and page views
- Top pages
- Top referrers
- Device and browser information

After a few days of traffic, you can start exploring your data by viewing and filtering the panels.

## Testing Analytics Integration

To verify that Web Analytics is working correctly:

1. Deploy your app to Vercel (or access it if already deployed)
2. Visit any page on your site
3. Open your browser's Developer Tools (F12 or Cmd+Option+I)
4. Go to the **Network** tab
5. Look for requests to `/_vercel/insights/script.js` and `/_vercel/insights/view`

If you can see these requests, Web Analytics is working correctly.

## Custom Events (Pro/Enterprise Only)

If you're on a Vercel Pro or Enterprise plan, you can track custom events like button clicks, form submissions, or purchases.

To add custom events, import and use the `track` function:

```tsx
import { track } from "@vercel/analytics";

// In your button click handler or event handler
const handlePurchase = () => {
  track("purchase", {
    itemId: "123",
    price: 99.99,
  });
};
```

## Framework-Specific Notes

This project uses **React with Vite**. The Analytics component is properly configured for React:

- Routes are automatically detected and tracked
- Page views are captured on route changes
- Web vitals are automatically measured

## Troubleshooting

### Analytics not showing data

1. **Verify deployment**: Make sure your app is deployed to Vercel
2. **Check for network requests**: Look in DevTools Network tab for `/_vercel/insights/` requests
3. **Wait for data**: It can take a few minutes for data to appear in the dashboard after enabling
4. **Enable in dashboard**: Make sure Web Analytics is enabled in your Vercel project settings

### Network requests not showing

1. Verify that Web Analytics is enabled in your Vercel dashboard
2. Check that you're viewing the deployed version (not localhost)
3. Reload the page and check again

## Next Steps

- Learn more about [privacy and compliance with Web Analytics](https://docs.vercel.com/analytics/privacy-policy)
- Explore [filtering and analyzing your data](https://docs.vercel.com/analytics/filtering)
- Set up [custom events](https://docs.vercel.com/analytics/custom-events) (Pro/Enterprise)
- Check [pricing and limits](https://docs.vercel.com/analytics/limits-and-pricing)
- Review [troubleshooting guide](https://docs.vercel.com/analytics/troubleshooting)

## Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [@vercel/analytics Package](https://www.npmjs.com/package/@vercel/analytics)
- [Vercel Dashboard](https://vercel.com/dashboard)
