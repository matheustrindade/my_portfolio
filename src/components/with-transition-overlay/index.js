import { useRouter } from "next/router"
import { createContext, useContext, useEffect, useState } from "react"
import TransitionOverlayStyle from './TransitionOverlay.module.css'

const TransitionOverlayContext = createContext({})

export const withTransitionOverlay = Component => props => {

    const router = useRouter()
    const { setShowTransition } = useContext(TransitionOverlayContext)

    useEffect(() => {
        const { pathname } = router ?? {}

        if (pathname !== '/') {
            //show up fade overlay
            setShowTransition(true)
        }

        return () => {
            //remove fade overlay
            setShowTransition(false)
        }
    }, [router, setShowTransition])

    return <Component {...props} />
}

export default ({ children }) => {

    const [showTransition, setShowTransition] = useState(false)

    return <TransitionOverlayContext.Provider
        value={{ setShowTransition }}
    >
        <div className={TransitionOverlayStyle['transition-screen__container']}>
            {children}
        </div>
        <div className={`
        ${TransitionOverlayStyle['transition-screen__overlay']}
        ${showTransition ? TransitionOverlayStyle['transition-screen__overlay--show'] : ''}
        `} />
    </TransitionOverlayContext.Provider>
}