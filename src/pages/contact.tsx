import Axios from 'axios'
import Image from 'next/image'
import {
  Button,
  Center,
  Group,
  Stack,
  Notification,
  Textarea,
  TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { NextPage } from 'next'
import { ChangeEvent, FC, useCallback } from 'react'
import { Send } from 'tabler-icons-react'

import profile from '../assets/images/annoyed.png'
import { Layout, PageTitle, Pod, SubTitle } from '../components'

const Page: FC<NextPage> = () => {
  const { values, setFieldValue, onSubmit } = useForm({
    initialValues: {
      sent: false,
      success: false,
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

  const handleSubmit = useCallback(
    (formValues: typeof values) => {
      const { name, email, subject, message } = formValues

      Axios.post('/api/contact', {
        name,
        email,
        subject,
        message
      })
        .then((response) => {
          setFieldValue('sent', true)

          if (response.data.success) {
            return setFieldValue('success', true)
          }

          setFieldValue('success', false)
        })
        .catch((error) => {
          setFieldValue('sent', true)
          setFieldValue('success', false)
          console.error(error)
        })
    },
    [setFieldValue]
  )

  return (
    <Layout title='Contact'>
      <Pod>
        <PageTitle>Contact</PageTitle>
        <SubTitle>
          Hey, I don&apos;t know if you&apos;ve heard this, but the Internet
          just decided that you need to send a message to me. I mean, who am I
          to contradict the Internet? So come on, let&apos;s communicate!
        </SubTitle>
        <form onSubmit={onSubmit(handleSubmit)}>
          <Group grow spacing='xl'>
            <Stack spacing='xl'>
              {values.sent &&
                (values.success ? (
                  <Notification
                    color='teal'
                    title='Yay'
                    onClose={() => setFieldValue('sent', false)}
                  >
                    Message successfully sent
                  </Notification>
                ) : (
                  <Notification
                    color='red'
                    title='Error'
                    onClose={() => setFieldValue('sent', false)}
                  >
                    Could not send message
                  </Notification>
                ))}
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
              <Button type='submit' size='lg' leftIcon={<Send></Send>}>
                Send
              </Button>
            </Stack>
            <Center>
              <Image
                src={profile}
                alt=''
                style={{ borderRadius: '100%' }}
                width={280}
              ></Image>
            </Center>
          </Group>
        </form>
      </Pod>
    </Layout>
  )
}

export default Page
