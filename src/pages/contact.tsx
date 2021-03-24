import React, { useState } from "react"

import {
  Form,
  Label,
  TextInput,
  TextArea,
  Button,
  Group,
  Title,
  SubTitle
} from "../components"
import { PageLayout } from "../layouts"

const Page: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    message: ""
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [event.target.name]: event.target.value })

  return (
    <PageLayout title="contact">
      <h2>Get in touch</h2>
      <Form
        data-netlify="true"
        name="Contact Form"
        method="post"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <Group>
          <Label>
            <Title>Your name</Title>
            <SubTitle>How should I call you?</SubTitle>
            <TextInput
              name="name"
              value={form.name}
              onChange={handleChange}
            ></TextInput>
          </Label>
        </Group>
        <Group>
          <Label>
            <Title>Your eMail</Title>
            <SubTitle>You won't get spam from me... I promise</SubTitle>
            <TextInput
              name="mail"
              type="email"
              value={form.mail}
              onChange={handleChange}
            ></TextInput>
          </Label>
        </Group>
        <Group>
          <Label>
            <Title>Your message</Title>
            <SubTitle>What's on your mind... tell me.</SubTitle>
            <TextArea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></TextArea>
          </Label>
        </Group>
        <Group>
          <Button type="submit">Send me</Button>
        </Group>
      </Form>
    </PageLayout>
  )
}

export default Page
