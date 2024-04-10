<<<<<<< HEAD
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { COLORS } from '../constrants/theme'

const PageContainer = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: COLORS.white,
            }}
        >
            {props.children}
        </KeyboardAvoidingView>
    )
}

export default PageContainer
=======
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { COLORS } from '../constrants/theme'

const PageContainer = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: COLORS.white,
            }}
        >
            {props.children}
        </KeyboardAvoidingView>
    )
}

export default PageContainer
>>>>>>> b22fb74c6eb6513ba9b45c65c60c800e9b3e4ed1
