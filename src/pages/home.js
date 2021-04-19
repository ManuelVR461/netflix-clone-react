import React from 'react'

import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faq'
import { HeaderContainer } from '../containers/header'
import { OptForm } from '../components'

export default function Home () {
    return(
        <>
            <HeaderContainer>   
                <OptForm>
                    <OptForm.Input placeholder="email address" />
                    <OptForm.Button >Try it now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart
                    your membership.</OptForm.Text>
                    <OptForm.Break/>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}