import React from "react";
import "./Index.css";

const Index = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-main">
      <footer>
        <h4>Copyright &copy; {year} || Doodle.keep.co.in</h4>
      </footer>
    </div>
  );
};

export default Index;
