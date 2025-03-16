import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from 'stripe';

export async function POST(req: Request) {
    const sig = req.headers.get("stripe-signature")!;
    const body = await req.text();

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
    }

    if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.created") {
        const subscription = event.data.object as Stripe.Subscription;

        await prisma.subscription.upsert({
            where: { stripeId: subscription.id },
            update: {
                status: subscription.status,
                plan: subscription.items.data[0].price.id,
            },
            create: {
                stripeId: subscription.id,
                userId: subscription.metadata.userId,
                status: subscription.status,
                plan: subscription.items.data[0].price.id,
            },
        });
    }

    return NextResponse.json({ received: true });
}