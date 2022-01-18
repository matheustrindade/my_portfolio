import React, { createContext, useCallback, useMemo } from 'react'
import ptBRTags from '../../locales/pt.json'
import enTags from '../../locales/pt.json'

export const InternacionalizationContext = createContext({})

const Internacionalization = ({ children }) => {

    const defaultLocale = useMemo(() => {
        const localeStr = new Intl.NumberFormat().resolvedOptions().locale
        return localeStr.substring(0, localeStr.indexOf('-'))
    }, [])

    const translate = useCallback(tag => {
        if (defaultLocale.toLowerCase() === 'pt') {
            return ptBRTags[tag]
        } else if (defaultLocale.toLowerCase() === 'en') {
            return enTags[tag]
        } else {
            return tag
        }
    }, [defaultLocale])

    return <InternacionalizationContext.Provider
        value={{ translate }}
    >
        {children}
    </InternacionalizationContext.Provider>
}

export default Internacionalization