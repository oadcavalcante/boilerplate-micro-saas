import Stripe from "stripe";
import { prisma } from "./prisma";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
});

export async function createCheckoutSession(userId: string, priceId: string) {
    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: (await prisma.user.findUnique({ where: { id: userId } }))?.email,
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?canceled=true`,
    });
    return session;
}