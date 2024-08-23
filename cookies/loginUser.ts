"use server";

import { cookies } from "next/headers";

export async function ck_loginUser(data: any) {
  cookies().set("user", data);
}
