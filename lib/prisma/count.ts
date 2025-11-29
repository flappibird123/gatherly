import prisma from "@/lib/db";

export async function getEventCount(): Promise<number> {
    return await prisma.event.count();
}