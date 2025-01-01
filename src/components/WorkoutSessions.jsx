import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Looking to push your limits and achieve maximum results? Our Ultimate Fitness Routine is designed to deliver a high-intensity workout experience that will challenge every muscle in your body
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Our Features Bootcamp is an intensive, results-driven program designed to transform your fitness journey. With a blend of strength training, cardio exercises, and functional movements,
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp.</h4>
            <p>
            The Strength & Conditioning Bootcamp is perfect for those looking to develop both power and performance.Focused on building core strength,functional movement, and explosive power.
            </p>
          </div>
          <div>
            <h4>Core & Cardio Bootcamp.</h4>
            <p>
            Our Core & Cardio Bootcamp combines high-intensity interval training with targeted core exercises to sculpt your midsection while enhancing cardiovascular endurance. Through a series of dynamic movements like mountain climbers, burpees, and planks
            </p>
          </div>
          <div>
            <h4>Outdoor Adventure Bootcamp.</h4>
            <p>
            For those who enjoy the great outdoors, our Outdoor Adventure Bootcamp brings fitness training to nature. This bootcamp incorporates hiking, trail running, obstacle courses, and functional exercises in a dynamic outdoor setting
            </p>
          </div>
          <div>
            <h4>Dynamic Bootcamp Experience.</h4>
            <p>
            Our Dynamic Bootcamp offers a fast-paced, ever-changing workout environment designed to keep you on your toes. With a mix of circuit training, HIIT, and team challenges, you'll never experience the same session twice. This program is built to improve cardiovascular fitness, build muscle endurance, and boost metabolism
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
