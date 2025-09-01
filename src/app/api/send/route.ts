import { Resend } from "resend"
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend("re_ARreMvSk_JiDcQpmB4mEGWitmLGvvXhFN")

export async function POST(req: Request) {
    try {
        const dataForm = await req.json();
        try {
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: ['wm0803687@gmail.com'],
                subject: 'Portfolio Contact Form Submission',
                react: await EmailTemplate({
                    name: dataForm.name,
                    email: dataForm.email,
                    message: dataForm.message,
                }),
                text: "WilliamsDev"
            })
            return Response.json({ data })
        } catch (error) {
            return Response.json({ error})
        }
        
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ error: "Internal server error" })
    }
}