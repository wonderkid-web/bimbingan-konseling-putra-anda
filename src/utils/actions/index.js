"use server";

import { revalidatePath } from "next/cache";

export const addSiswa = async (payload) => {
  try {
    const ISOType = new Date();
    const waktu_terjadi = ISOType.toISOString();
    const raw = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/history`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({...payload, waktu_terjadi, waktu_selesai: '-'}),
    });

    if (raw.ok) {
      revalidatePath("/guru/history");
      revalidatePath("/siswa/history");
      return raw.json();
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const addHistory = async (payload, id) => {
  try {
    const raw = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/history/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (raw.ok) {
      revalidatePath("/guru/history");
      revalidatePath("/siswa/history");
      revalidatePath("/guru/history/" + id);
      revalidatePath("/siswa/history/" + id);
      return raw.json();
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const updateHistory = async (payload, id) => {
  try {
    const raw = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/history/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    
    if (raw.ok) {
      revalidatePath("/guru/history");
      revalidatePath("/siswa/history");
      revalidatePath("/guru/history/" + id);
      revalidatePath("/siswa/history/" + id);
      return raw.json();
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteHistory = async (id) => {
  try {
    const raw = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/history/${id}`,
      {
        method: "DELETE",
      }
    );

    if (raw.ok) {
      revalidatePath("/guru/history");
      revalidatePath("/siswa/history");
      revalidatePath("/guru/history/" + id);
      revalidatePath("/siswa/history/" + id);
      return raw.json();
    }
  } catch (e) {
    console.log(e.message);
  }
};



export const deleteOnServer = async (id) => {
  try {
    const raw = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/rules/${id}`,
      {
        method: "DELETE",
      }
    );

    if (raw.ok) {
      revalidatePath("/guru/tatib");
      return raw.json();
    }
  } catch (e) {
    console.log(e.message);
  }
};


