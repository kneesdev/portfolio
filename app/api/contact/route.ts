import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    let sent = false

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            secure: false,
            auth: {
                user: "apikey",
                pass: process.env.SMTP_PASS,
            },
        })

        const mailOptions = {
            from: "lee's Portfolio <noreply@secton.org>",
            to: "kneesdev@naver.com",
            subject: `New Contact Form Submission`,
            html: `
            <p>There's a new contact form submission!</p>
            <h2>Contact Details</h2>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
            <h2>Message:</h2>
            <p>${message}</p>
            `,
            pool: true,
            maxConnections: 5,
            maxMessages: 10,
            rateLimit: 5,
        }

        await transporter.sendMail(mailOptions)
        sent = true
    } catch (error) {
        console.error("Email error:", error)
        return NextResponse.json({
            status: 500,
            sent,
            message: "Failed to deliver message :(",
        })
    }

    return NextResponse.json({
        status: 200,
        sent,
        message: "Delivered message :)",
    })
}