import { auth } from "@/auth.api";
import { ApiResponse } from "@/app/api/api-definitions";

export const GET = auth((req) => {
  return Response.json({ user: req.auth?.user });
}) as ApiResponse;
