import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const getManifest = async (hash: string) => {
  const url = `http://localhost:8000/hash/${hash}`;
  return await fetch(url, { cache: "no-store" }).then((res) => res.json());
};

export async function GET() {
  const url = `http://localhost:8000/hash/1`;
  const manifest = await fetch(url, { cache: "no-store" }).then((res) =>
    res.json()
  );
  console.log("manifest desde route:", manifest);

  return NextResponse.json(manifest);
}
