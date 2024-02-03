import { ReactNode, createContext, useContext, useState } from "react";

interface LoadingSpinnerContextType {
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingSpinnerContext = createContext<LoadingSpinnerContextType>({
    isLoading: false,
    setLoading: () => {},
});

type LoadingSpinnerProps = {
    children: ReactNode;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({children}) => {
    const [isLoading, setLoading] = useState(false);

    return (
        <LoadingSpinnerContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingSpinnerContext.Provider>
    )
}

export default LoadingSpinner

export const useLoadingSpinner = () => {
    return useContext(LoadingSpinnerContext);
};