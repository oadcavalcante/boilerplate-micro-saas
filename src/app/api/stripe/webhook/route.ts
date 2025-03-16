import { prisma } from '@/lib/prisma';
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from 'stripe';

export async function POST(req: Request) {
    const sig = req.headers.get("stripe-signature")!;
    const body = await req.text();

    let event;
    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
        return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
    }

    if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.created") {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata.userId;

        if (!userId) {
            return NextResponse.json({ error: "UserId not found in metadata" }, { status: 400 });
        }

        await prisma.subscription.upsert({
            where: { stripeId: subscription.id },
            update: {
                status: subscription.status,
                plan: subscription.items.data[0].price.id,
            },
            create: {
                stripeId: subscription.id,
                userId: userId,
                status: subscription.status,
                plan: subscription.items.data[0].price.id,
            },
        });
    }

    return NextResponse.json({ received: true });
}