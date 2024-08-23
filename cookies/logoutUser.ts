"use server";

import { cookies } from "next/headers";

export async function ck_logoutUser() {
  const all = cookies().getAll();
  all.forEach((a) => cookies().delete(a.name));
}

