import { generateJwt } from "@/_helper/jwt";
import { NextResponse } from "next/server";

export async function GET(request) {
    const generatedToken = generateJwt();
    return NextResponse.json({ token: generatedToken }, { status: 200 });
}