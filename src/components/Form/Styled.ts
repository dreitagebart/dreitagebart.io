import styled from "styled-components"

export const _Form = styled.form`
  width: 100%;
`

export const _Group = styled.div`
  max-width: 420px;
  width: 100%;
  margin-bottom: 20px;
`

export const _Label = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 100%;
`

export const _TextArea = styled.textarea`
  transition: all 300ms ease-in;
  width: 100%;
  outline: 0;
  line-height: 1.5;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #afafaf;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    border: 1px solid #6fa5f2;
  }

  &:focus {
    border: 1px solid #6fa5f2;
  }
`

export const _TextInput = styled.input.attrs(({ type }) => ({
  type: type ? type : "text"
}))`
  transition: all 300ms ease-in;
  width: 100%;
  outline: 0;
  line-height: 1.5;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #afafaf;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    border: 1px solid #6fa5f2;
  }

  &:focus {
    border: 1px solid #6fa5f2;
  }
`

export const _Title = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 20px;
  color: #666;
`

export const _SubTitle = styled.div`
  font-weight: lighter;
  font-size: 16px;
`
