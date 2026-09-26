import { subscribeToMailingList } from "@/app/writing/actions";

export async function POST(request: Request) {
    const result = await subscribeToMailingList(await request.formData());
    return new Response(JSON.stringify(result), {
        status: result.error ? 400 : 200,
        headers: { "Content-Type": "application/json" },
    });
}
