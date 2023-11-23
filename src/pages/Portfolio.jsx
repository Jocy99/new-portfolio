import React from 'react'
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio </h1>
      <Projects title="Book Search Engine" subtitle="MERN Stack" text="This project is a fully functioning book search engine that leverages the Google Books API. Originally built as a RESTful API using the MERN stack (MongoDB, Express.js, React, and Node.js), it has been refactored to utilize GraphQL with Apollo Server for enhanced performance and flexibility." url="https://github.com/Jocy99/book-search-engine" websiteUrl=""/>
      <Projects title="Social Network App" subtitle="MongoDB, Express, & Node" text="This application provides an API for managing users, thoughts, and friends in a social network context. It's built using Express.js for routing, MongoDB for the database, and the Mongoose ODM." url="https://github.com/Jocy99/My-Social-Network" websiteUrl=""/>
      <Projects title="Harmony Hub" subtitle="HTML, CSS, Node, Express, & MySql" text="Try out the top 10 Songs & Playlist Creator website. This web application allows users to explore and listen to the top 10 rated songs in different countries and allows users to create their own playlists by registering an account." url="https://github.com/Jocy99/Harmony-Hub" websiteUrl="https://salty-reaches-51385-c76877b9c210.herokuapp.com/"/>
      <Projects title="Coding Quiz" subtitle="HTML, CSS, & Javacrsipt" text="Code Quiz is designed to test your coding knowledge. It features a timer that deducts ten seconds from the allotted time every time you select an incorrect choice. At the end of the quiz, you have the option to insert your initials to submit your high scores." url="https://github.com/Jocy99/CodingQuiz" websiteUrl="https://jocy99.github.io/CodingQuiz/"/>
      <Projects title="Password Generator" subtitle="HTML, CSS, & Javascript" text="This is a simple website that generates strong and secure passwords based on the users preferences. It aims to provide users with a convinient and reliable tool for creating passwords that are difficult to guess and highly secure." url="https://github.com/Jocy99/PasswordGenerator/blob/main/README.md" websiteUrl="https://jocy99.github.io/PasswordGenerator/"/>
      <Projects title="Cool Dice" subtitle="MERN Stack" text="This is a web-based dice game application that allows users to log in and compete with the computer to roll two dice, aiming to achieve the highest possible rolled number. The game keeps track of user wins and losses, saving this information in a MongoDB database. This README provides information on how to set up, run, and use the application." url="https://github.com/Jocy99/cool-dice-game" websiteUrl="https://cool-dice-game-9c029df8dfbf.herokuapp.com/"/>
    </div>
  )
}

export default Portfolio
