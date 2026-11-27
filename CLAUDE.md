# Workflow

- Always merge finished work into `main` (push the branch, open a PR, merge it). Vercel deploys production from `main`.
- The site is password-protected (`src/proxy.ts`). The password is `SITE_PASSWORD` on Vercel, falling back to the default in `src/lib/site-auth.ts`.
