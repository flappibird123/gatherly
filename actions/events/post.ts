"use server";

import prisma from '@/lib/db'
import { mergeDateTime, objDateTime } from '@/lib/time/time';

export async function createEvent(title: string, description: string, date: string, time: string, location: string) {
    await prisma.event.create({
        data: {
            title: title,
            description: description,
            date: objDateTime(mergeDateTime(date, time)),
            location: location,
        }
    });
}