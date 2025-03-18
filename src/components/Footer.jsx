import React from "react";

const Footer = ({ myTheme }) => {
  return (
    <footer
      data-theme={myTheme}
      className="text-[var(--background)] bg-[var(--foreground)] flex items-center justify-center h-[10vh]"
    >
      <p>Copyright &copy; 2025</p>
    </footer>
  );
};

export default Footer;