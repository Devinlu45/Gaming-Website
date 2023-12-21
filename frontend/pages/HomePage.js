import React from 'react';

function HomePage() {
    return (
       <>
            <h2>Home Page</h2>
            <article>
                <h3>Career Goals: </h3>
                <p>
                    My career goals are to hopefully find a job as a software engineer. But the first thing I would need to achieve that goal would be to
                    find an internship first. If I can't get a job as a software engineer, I would probably try to go for a backup option like data scientist.
                    Once I am a software engineer, I would try and stay as long as I can and continue to get promoted to a senior engineer or a manager. Ideally,
                    I would like to be a manager in charge of a team, I think I would do really well in that regard. 
                </p>
            </article>
            <article>
                <ol>
                    <strong>Technologies used in this website.</strong> 
                    <li>React - This will allow me to convert html/css into a more efficient loading experience.</li>
                    <li>Express JS - This will help me manage the routes between the pages.</li>
                    <li>HTML - Helps me create the skeleton of the website. It will display the information in the order I want.</li>
                    <li>CSS - Helps me stylize the website.</li>
                    <li>MongoDB - This helps me create the database which will store the information that I will consume and use to display in a table in my website.</li>
                    <li>Mongoose - Mongoose helps me create the schema that will help store the information in the order I want. </li>
                </ol>
            </article>
        </>
    );
}
export default HomePage;