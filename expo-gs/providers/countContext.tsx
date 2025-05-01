import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

const CountContext = createContext<{
  count: number;
  increase: () => void;
  decrease: () => void;
}>({
  count: 0,
  increase: () => null,
  decrease: () => null,
});

export const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CountContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCounter = () => useContext(CountContext);
