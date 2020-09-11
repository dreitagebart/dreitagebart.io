import { Box } from "@dreitagebart/box"
import React, { useState } from "react"
import styled from "styled-components"

import { PageLayout } from "../layouts"

const _Label = styled.label`
  cursor: pointer;
  display: block;
  margin-bottom: 20px;
`

const _Title = styled.div`
  color: #666;
  font-size: 16px;
`

const _Submit = styled.button.attrs(() => ({ type: "submit" }))`
  color: #efefef;
  background: #222;
  outline: 0;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 8px 8px;
  width: 420px;
`

const _Input = styled.input.attrs(({ type }) => ({
  type: type ? type : "text"
}))`
  display: inline-block;
  width: 420px;
  outline: 0;
  line-height: 1.5;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #afafaf;
`

const _Text = styled.textarea`
  width: 100%;
  outline: 0;
  line-height: 1.5;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #afafaf;
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
      <form
        data-netlify="true"
        name="contact"
        method="post"
        onSubmit={handleSubmit}
      >
        <Box>
          <_Label>
            <_Title>Your name</_Title>
            <_Input
              name="name"
              value={form.name}
              onChange={handleChange}
            ></_Input>
          </_Label>
          <_Label>
            <_Title>Your eMail</_Title>
            <_Input
              name="mail"
              type="email"
              value={form.mail}
              onChange={handleChange}
            ></_Input>
          </_Label>
          <_Label>
            <_Title>Your message</_Title>
            <_Text
              name="message"
              value={form.message}
              onChange={handleChange}
            ></_Text>
          </_Label>
          <_Submit>Drop me the lines</_Submit>
        </Box>
      </form>
    </PageLayout>
  )
}

export default Page
