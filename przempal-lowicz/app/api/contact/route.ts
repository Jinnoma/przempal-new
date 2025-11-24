import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, message } = body;

        // Basic validation
        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: 'Wypełnij wymagane pola (Imię, Telefon, Wiadomość)' },
                { status: 400 }
            );
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email credentials');
            return NextResponse.json(
                { error: 'Konfiguracja serwera jest niekompletna (brak danych logowania email).' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'przempal@op.pl', // Target email from the contact info
            subject: `Nowa wiadomość z formularza: ${name}`,
            text: `
        Imię i nazwisko: ${name}
        Telefon: ${phone}
        Email: ${email || 'Nie podano'}
        
        Wiadomość:
        ${message}
      `,
            html: `
        <h3>Nowa wiadomość ze strony Przempal</h3>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Nie podano'}</p>
        <br>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Wiadomość została wysłana!' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.' },
            { status: 500 }
        );
    }
}
