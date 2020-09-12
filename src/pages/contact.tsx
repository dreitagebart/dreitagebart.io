import React, { useState } from "react"
import styled from "styled-components"

import { Form, Label, TextInput, TextArea, Submit, Group } from "../components"
import { PageLayout } from "../layouts"

const _Title = styled.div`
  color: #666;
  font-size: 16px;
`

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Page: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    message: ""
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    event.preventDefault()
  }

  return (
    <PageLayout title="contact">
      <h1>Contact</h1>
      <Form
        data-netlify="true"
        name="contact"
        method="post"
        onSubmit={handleSubmit}
      >
        <Group>
          <Label>
            <_Title>Your name</_Title>
            <TextInput
              name="name"
              value={form.name}
              onChange={handleChange}
            ></TextInput>
          </Label>
        </Group>
        <Group>
          <Label>
            <_Title>Your eMail</_Title>
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
            <_Title>Your message</_Title>
            <TextArea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></TextArea>
          </Label>
        </Group>
        <Group>
          <Submit>Send me</Submit>
        </Group>
      </Form>
    </PageLayout>
  )
}

export default Page
