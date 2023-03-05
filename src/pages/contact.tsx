import { Button, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { NextPage } from 'next'
import { ChangeEvent, FC, useCallback } from 'react'
import { Send } from 'tabler-icons-react'

import { Layout, PageTitle, Pod, SEO, SubTitle } from '../components'

const Page: FC<NextPage> = () => {
  const { values, setFieldValue, onSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFieldValue(event.target.name, event.target.value)
    },
    [setFieldValue]
  )

  const handleSubmit = useCallback((formValues: typeof values) => {}, [])

  return (
    <Layout title='Contact'>
      <SEO
        openGraph={{
          siteName: 'dreitagebart.io',
          title: 'Contact',
          description: 'This is a simple demo site',
          url: 'https://dreitagebart.io/selfexplained'
        }}
      ></SEO>
      <Pod>
        <PageTitle>Contact</PageTitle>
        <SubTitle>
          Hey, I don&apos;t know if you&apos;ve heard this, but the Internet
          just decided that you need to send a message to me. I mean, who am I
          to contradict the Internet? So come on, let&apos;s communicate!
        </SubTitle>
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack spacing='xl'>
            <TextInput
              size='lg'
              placeholder='Your name'
              name='name'
              onChange={handleChange}
              value={values.name}
            ></TextInput>
            <TextInput
              size='lg'
              placeholder='you@mail.me'
              name='email'
              onChange={handleChange}
              value={values.email}
            ></TextInput>
            <TextInput
              size='lg'
              placeholder='Your subject'
              name='subject'
              onChange={handleChange}
              value={values.subject}
            ></TextInput>
            <Textarea
              size='lg'
              placeholder='Your message...'
              name='message'
              onChange={handleChange}
              value={values.message}
            ></Textarea>
            <Button size='lg' leftIcon={<Send></Send>}>
              Send
            </Button>
          </Stack>
        </form>
      </Pod>
    </Layout>
  )
}

export default Page
