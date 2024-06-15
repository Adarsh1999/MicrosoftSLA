import React, { useState, useEffect } from "react";

const Education = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section className={`light ${isLoading ? "loading" : ""}`} id="education">
      <h2>Education</h2>
      <div>
        <h3>College</h3>
        <p>Northeastern University</p>
      </div>
      <div>
        <h3>Profession</h3>
        <p>Software Developer Engineer</p>
      </div>
    </section>
  );
};

export default Education;
