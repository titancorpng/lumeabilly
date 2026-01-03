# Getting started with Vercel Web Analytics

This guide helps you get started with using Vercel Web Analytics on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
npm install vercel
```

or with your preferred package manager:

```bash
# using pnpm
pnpm install vercel

# using yarn
yarn add vercel

# using bun
bun add vercel
```

## Setup Steps

### 1. Enable Web Analytics in Vercel

On the [Vercel dashboard](https://vercel.com/dashboard), select your Project and then click the **Analytics** tab and click **Enable** from the dialog.

> **💡 Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### 2. Install `@vercel/analytics`

The `@vercel/analytics` package is already included in this project. If you need to reinstall or update it, use your package manager:

```bash
npm install @vercel/analytics
```

or:

```bash
# using pnpm
pnpm install @vercel/analytics

# using yarn
yarn add @vercel/analytics

# using bun
bun add @vercel/analytics
```

### 3. Integration in React App

The Analytics component has already been integrated into your app. In `src/App.tsx`, you'll find:

```tsx
import { Analytics } from "@vercel/analytics/react";

// ... in your component
<Analytics />
```

The `Analytics` component is a wrapper around the tracking script, offering seamless integration with React. It automatically tracks page views and route changes.

**Note:** When using the plain React implementation with Vite, there is no automatic route support. The component tracks page loads, but if you're using React Router (as this project does), route changes should be tracked automatically.

### 4. Deploy your app to Vercel

Deploy your app using the Vercel CLI:

```bash
vercel deploy
```

If you haven't already, we recommend [connecting your project's Git repository](https://vercel.com/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest commits to main without terminal commands.

Once your app is deployed, it will start tracking visitors and page views.

> **💡 Note:** If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page.

### 5. View your data in the dashboard

Once your app is deployed and users have visited your site, you can view your data in the dashboard.

To do so, go to your [Vercel dashboard](https://vercel.com/dashboard), select your project, and click the **Analytics** tab.

After a few days of visitors, you'll be able to start exploring your data by viewing and filtering the panels.

Users on Pro and Enterprise plans can also add [custom events](/docs/analytics/custom-events) to track user interactions such as button clicks, form submissions, or purchases.

## Learn More

Now that you have Vercel Web Analytics set up, you can explore the following topics:

- [Learn how to use the `@vercel/analytics` package](https://vercel.com/docs/analytics/package)
- [Learn how to set custom events](https://vercel.com/docs/analytics/custom-events)
- [Learn about filtering data](https://vercel.com/docs/analytics/filtering)
- [Read about privacy and compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Explore pricing](https://vercel.com/docs/analytics/limits-and-pricing)
- [Troubleshooting](https://vercel.com/docs/analytics/troubleshooting)

## Current Implementation

This project uses:
- **Framework:** Vite + React with TypeScript
- **Analytics Package:** @vercel/analytics@1.6.1
- **Integration:** React component in `src/App.tsx`

The Analytics component is placed inside the main app container and will track all page views and user interactions automatically.
