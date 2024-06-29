import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ msg: "Hello from server" });
}
export async function POST(request: Request) {
  const { user_message, user_email } = await request.json();
  const method = request.method;
  console.log("method", method);
  console.log("message", user_email);
  return NextResponse.json("hello");
}
