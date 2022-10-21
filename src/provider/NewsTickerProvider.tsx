import React, {createContext, useState} from "react";

export type NewsTickerContextType = {
    isVisible: boolean,
    setIsVisible: (value: boolean) => void,
}

export const NewsTickerContext = createContext<NewsTickerContextType>({
    isVisible: true,
    setIsVisible: () => true,
})

export const NewsTickerProvider = ({children}: any) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    return <NewsTickerContext.Provider value={{isVisible, setIsVisible}}>
        {children}
    </NewsTickerContext.Provider>
}
