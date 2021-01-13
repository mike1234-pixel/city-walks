import React from 'react'
import renderer from 'react-test-renderer'
import { WalksContextProvider } from "../../context/WalksContext"
import { LoginContextProvider } from "../../context/LoginContext"
import Walk from './Walk'

// snapshot test
it('Walk renders correctly', () => {  

  const tree = renderer
    .create(
        <WalksContextProvider>
            <LoginContextProvider>
                <Walk match={{params: {id: 1}, isExact: true, path: "", url: "/walks/edmonton-green"}}/>
            </LoginContextProvider>
        </WalksContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});