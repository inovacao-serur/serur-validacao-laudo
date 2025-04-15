import { NextRequest } from "next/server";

const jsonHandler = async (req: NextRequest) => {
  try {
    return await req.json();
  } catch {
    return null;
  }
};

export { jsonHandler };
