"use server"

import prisma from '@/lib/db'
import { Event as PrismaEvent } from '@/lib/generated/prisma/client'

export async function searchById(id: string): Promise<PrismaEvent | null> {
    return await prisma.event.findUnique({
        where: { id },
    });
}

export async function getAllEvents(): Promise<PrismaEvent[]> {
    return await prisma.event.findMany();
}
