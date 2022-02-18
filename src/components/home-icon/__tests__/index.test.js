import { render, waitFor } from '@testing-library/react'
import AppProviver from '../../app-provider'
import HomeIcon from '../index'

describe('home icon tests', () => {

    let icon = null
    beforeAll(() => {
        const { container } = render(
            <AppProviver>
                <HomeIcon />
            </AppProviver>
        )
        const [homeElem] = container.getElementsByClassName('home-icon')
        icon = homeElem
    })


    it('it should be on screen', () => {
        expect(icon).toBeInTheDocument()
    })

    it('it should have a roof', () => {
        const roof = icon.querySelector('.home-icon__roof')
        waitFor(() => expect(roof).toBeInTheDocument())
    })

    it('it should have walls', () => {
        const wall = icon.querySelector('.home-icon__wall')
        waitFor(() => expect(wall).toBeInTheDocument())
    })
    
})