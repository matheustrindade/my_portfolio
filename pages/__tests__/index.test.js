import { render } from '@testing-library/react'
import AppProvider from '../../src/components/app-provider'
import Home from '../index'
import ptBR from '../../src/locales/pt.json'
import en from '../../src/locales/en.json'

describe('home tests', () => {

    let home = null

    beforeAll(() => {
        const { container } = render(
            <AppProvider>
                <Home />
            </AppProvider>
        )
        const [wholeHomeScreen] = container.getElementsByClassName('home')
        home = wholeHomeScreen
    })

    it(`check if it's rendering`, () => {
        expect(home).toBeInTheDocument()
    })

    describe(`check if all home elements's been displayed`, () => {

        it('background image has been on screen', () => {
            const [imgContainer] = home.getElementsByClassName('home__img-bg')
            const img = imgContainer.querySelector('img')
            expect(img.nodeName?.toLowerCase()).toEqual('img')
        })

        it(`author's name should be on screen`, () => {
            const [imgContainer] = home.getElementsByClassName('home__name')
            expect(imgContainer).toBeTruthy()
        })

        it(`author's name should be the same as the configured one`, () => {
            const [authorNameNode] = home.getElementsByClassName('home__name')
            const authorName = authorNameNode.textContent
            expect(authorName?.toLowerCase()).toEqual('matheus trindade')
        })

        it(`author's job title should be the same as the configured one`, () => {
            const [jobTitleNode] = home.getElementsByClassName('home__role')
            const jobTitle = jobTitleNode.textContent
            expect(`${ptBR['MAIN_JOB_TITLE_TEXT']}`.toLowerCase() || `${en['MAIN_JOB_TITLE_TEXT']}`.toLowerCase())
                .toEqual(jobTitle.toLowerCase())
        })
    })
})