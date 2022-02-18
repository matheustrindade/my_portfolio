import { render, waitFor } from '@testing-library/react'
import AppProvider from '../../app-provider'
import Navbar from '../index'
import ptBR from '../../../locales/pt.json'
import en from '../../../locales/en.json'

describe('navbar tests', () => {

    let navbar = null
    beforeAll(() => {
        const { container } = render(
            <AppProvider>
                <Navbar />
            </AppProvider>
        )
        const [navElem] = container.getElementsByClassName('navbar')
        navbar = navElem
    })

    it('it should render navabar', () => {
        expect(navbar).toBeInTheDocument()
    })

    it('it should render the home icon', () => {
        const homeIcon = navbar.querySelector('.home-icon')
        waitFor(() => expect(homeIcon).toBeInTheDocument())
    })

    describe('check navbar options', () => {
        it(`it should check whether the menu options have been rendered`, () => {
            const nav = navbar.querySelector('.navbar__container')
            waitFor(() => expect(nav).toBeInTheDocument())
        })

        it(`it should check whether the menu options have the same text as the configured one`, () => {
            const navContainer = navbar.querySelector('.navbar__navigation')
            const navOptionsQtt = Array.from(navContainer.childNodes).length
            let qttTitlesFound = 0
            const ptBRWords = Object.values(ptBR)
            const enWords = Object.values(en)
            for (const node of navContainer.childNodes) {
                const link = node.querySelector('a')
                const displayedLinkText = link.text
                if (ptBRWords.length) {
                    if (ptBRWords.includes(displayedLinkText)) {
                        qttTitlesFound++
                        continue
                    }
                }

                if (enWords.length) {
                    if (enWords.includes(displayedLinkText)) {
                        qttTitlesFound++
                        continue
                    }
                }
            }
            expect(navOptionsQtt).toEqual(qttTitlesFound)
        })
    })
})