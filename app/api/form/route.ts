import { NextResponse } from "next/server";

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID!;
const FORM_GUID = process.env.HUBSPOT_FORM_GUID!;

export async function POST(req: Request) {

  const { firstName, surname, email, message } = await req.json();

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
            { objectTypeId: "0-1", name: "first-name", value: firstName },
            { objectTypeId: "0-1", name: "surname", value: surname },
            { objectTypeId: "0-1", name: "email", value: email },
            { objectTypeId: "0-1", name: "message", value: message },
        ],
        context: { pageUri: req.headers.get("referer") ?? "", pageName: "Contact" },
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("HubSpot error:", res.status, text);
    return NextResponse.json({ error: await res.text() }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}