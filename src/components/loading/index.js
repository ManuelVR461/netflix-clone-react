import React from 'react'
import {LockBody, Spinner, Releasebody, Picture} from './styles/loading'

export default function Loading ({ src, ...restProps }){
    return (<Spinner {...restProps}>
                <LockBody/>
                <Picture src={`/images/users/${src}.png`} />
            </Spinner>)
}


Loading.Releasebody = function LoadingReleasebody() {
    return <Releasebody />
}