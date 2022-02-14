import { render } from '@testing-library/react'
import AppProvider from '../../app-provider'
import Navbar from '../index'

describe('navbar tests', () => {
    it('it should render navabar', () => {
        const { container } = render(
            <AppProvider>
                <Navbar />
            </AppProvider>
        )
        const [navbar] = container.getElementsByClassName('navbar')
        expect(navbar).toBeInTheDocument()
    })

    it('it should render the home icon', () => {
        
    })
    
    describe('check navbar options', () => {
        it(`it should check whether the menu options have been rendered`, () => {

        })

        it(`it should check whether the menu options have the same text as the configured one`, () => {

        })
    })
})