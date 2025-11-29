import { auth } from '@/lib/auth/auth';
import { headers } from 'next/headers';

export async function getUserSession() {
    return await auth.api.getSession({
            headers: await headers(),
    });
}