import styled from "styled-components"

import avatar from "../../assets/images/avatar.jpg"

export const _Sidebar = styled.div`
  display: flex;
  flex-direction: row;
`

export const _Me = styled.div`
  position: sticky;
  /* display: flex; */
  /* flex-grow: 1; */
  /* width: 100%; */
  width: 280px;
  margin-right: 40px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const _Content = styled.div`
  /* display: flex; */
  width: 100%;
  /* flex-grow: 1; */
`

export const _List = styled.ul`
  font-size: 16px;
  margin: 20px 0;
  padding: 0;
  list-style-type: none;
`

export const _Item = styled.li`
  margin-bottom: 8px;
`

export const _Avatar = styled.div`
  border: 1px solid #ccc;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-position: center;
  background-size: 100%;
  background-image: url(${avatar});
`

export const _Description = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: lighter;
`
