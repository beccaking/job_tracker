# Job Tracker
A tracking application for job seekers, built by software engineering students Wincy Law and Becca King
[Live site]
(http://job-tracker-phpreact.herokuapp.com/job_tracker/build/index.html)

## Technologies Used
* PHP
* SQL
* React
* Heroku

<<<<<<< HEAD
=======
## WireFraming
![wire framing](img/wireFraming.jpg)

>>>>>>> 8c64eb5736180a617afbd92383df601f7f3752e0
## Our Approach
We began our work by creating a SQL-based API written in PHP and creating a front end environment for the data with React.
We then integrated the two components, first using a locally hosted SQL database and then using an online postgres database that we deployed through Heroku.

<<<<<<< HEAD
=======
## App.js JSX structure
```html
1  <div className = "container">
2  
3      <header></header>
4
5      <div className = "addForm">
6         {this.state.view ? <Different Form /> : null}
7      </div>
8     
9      <div className = "box-container">
10         <Listings />
11         <Applied />
12         <Interview />
13         <TryAgain />
14     </div>
15
16  </div>
```
## Code Structure
![flow chart](img/flowChart.jpg)

>>>>>>> 8c64eb5736180a617afbd92383df601f7f3752e0
## Unsolved Problems
We encountered access issues when deploying our fully integrated site through Heroku, which we were able to circumvent, but which makes updating the site a complicated multi-step process non-ideal for production.

## Notes
After using an npm run build command, we are able to create the files necessary to host the fully integrated site at the link listed above, but only after using a search and replace function to redirect all scripts in job_tracker/job_tracker/build/index.html that start with /static to instead start with job_tracker/build/static. Every time the site is updated, the npm run build command and script adjustments must be performed again.
