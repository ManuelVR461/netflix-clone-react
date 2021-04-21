import React, {useState} from 'react'
import {HeaderContainer} from '../containers/header'
import {Form} from '../components'

export default function SignIn(){

    const [error, useError] = useState('')

    return (
        
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error> }
            </Form>
        </HeaderContainer>
    )
}