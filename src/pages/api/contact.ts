import fs from 'fs'
import mjml from 'mjml'
import mailer from 'nodemailer'
import { join } from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

const templatePath = join(process.cwd(), 'src/assets/mjml')

const mailTemplate = fs.readFileSync(join(templatePath, 'mail.mjml'), 'utf8')
const confirmationTemplate = fs.readFileSync(
  join(templatePath, 'confirmation.mjml'),
  'utf8'
)

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const transport = mailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const { name, email, subject, message } = req.body

  mailTemplate
    .replace('${name}', name)
    .replace('${email}', email)
    .replace('${message}', message)

  const mail = await transport.sendMail({
    from: 'stefan.buechold@gmail.com',
    to: 'stefan.buechold@gmail.com',
    html: mjml(mailTemplate).html
  })

  if (!mail) {
    return res.status(200).json({ success: false })
  }

  return res.status(200).json({ success: true })

  // const confirmation = await transport.sendMail({
  //   from: 'stefan.buechold@gmail.com',
  //   to: 'stefan.buechold@gmail.com',
  //   html: ''
  // })
}

export default handler
