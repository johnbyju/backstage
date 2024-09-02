import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const publicRoutes = createRouteMatcher([
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
]);

// Define ignored routes
const ignoredRoutes = createRouteMatcher([
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
]);

export default clerkMiddleware( {});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
