import { PrismaClient } from '@/lib/generated/prisma/client';

declare global {
  var prismaGlobal: PrismaClient | undefined;
}