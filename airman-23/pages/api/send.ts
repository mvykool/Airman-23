import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey('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')

type Data = {
    success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if(req.method === 'POST') {
        const { name, email, message}: { name: string, email: string, message: string} = req.body
        const msg = {
            to: 'maykolandres4@gmail.com',
            from: 'maykolandres4@gmail.com',
            suject: `${name.toUpperCase()} sent you a message`,
            text: `Email => ${email}`,
            html: `<strong>${message}</strong>`,
        }
        try {
            await sgMail.send(msg)
            res.status(200).json({success: true})
        }catch(err) {
            res.status(200).json({success: false})
        }
    }
}