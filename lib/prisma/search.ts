import prisma from '@/lib/db'

export async function searchById(id: string): Promise<Event | null> {
    return await prisma.event.findUnique({
        where: { id },
    });
}

export async function getAllEvents(): Promise<Event[]> {
    return await prisma.event.findMany();
}