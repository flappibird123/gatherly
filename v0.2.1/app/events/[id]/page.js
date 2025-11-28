import prisma from '@/lib/db.ts';

export default async function Event({ params }) {
    //resolve id
    const resolvedParams = await params;
    const { id } = resolvedParams;

    // handle undefined id
    if (!id) return <p>No event ID provided</p>;

    //get the post
    const post = await prisma.event.findUnique({
        where: { id },
    });
    

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    );
}
