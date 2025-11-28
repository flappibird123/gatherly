"use server";

import prisma from '@/lib/db'

export async function createEvent(title: string, description: string) {
    await prisma.event.create({
        data: {
            title: title,
            description: description,
        }
    });
}