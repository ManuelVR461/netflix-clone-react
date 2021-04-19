import React from 'react'

import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faq'
import { HeaderContainer } from '../containers/header'
import { Features, OptForm } from '../components'

export default function Home () {
    return(
        <>
            <HeaderContainer>
                <Features>
                    <Features.Title>Unlimited films, TV programmes and more.</Features.Title>
                    <Features.Subtitle>Watch anywhere. Cancel at any time.</Features.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="email address" />
                        <OptForm.Button >Try it now</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break/>
                    </OptForm>
                </Features>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}