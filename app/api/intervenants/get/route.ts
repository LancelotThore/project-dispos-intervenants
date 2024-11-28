import { fetchIntervenants } from '@/app/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const intervenants = await fetchIntervenants();
    return NextResponse.json(intervenants);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}