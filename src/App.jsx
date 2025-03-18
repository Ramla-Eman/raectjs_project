import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);
  return (
    <div>
      <Header
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
      />
      <Hero myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
};

export default App;
