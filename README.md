This is a [Next.js (ver 15.2.4)](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


------------------------------ Testing the project ------------------------
This project is divided in two main sections:
- the stats section, which provides information about patterns found in the lottery.
- the system section, where the user can produce a reduced/smart system.

The system section has not been fully implemented yet, and as such, the smart system is not produced. However, these features of the sysetm section can be tested:
- once you have selected a "spike" number, you can not select the same number in the remaining dropdowns.
- you must select all three spikes, in order to proceed (click on the "Skapa system" button to test).

Other things you can test:
1. Responsiveness. The application has been designed with responsiveness in mind, although the best experience will be on desktop screen sizes, where all the table data from winnings can be viewed on a single page, without scrolling. The breakpoint for smaller screens is at 780 pixels, where the burger menu appears. Clicking on the burger icon toggles the menu on and off. For readability reasons, I prevented the table data to wrap, when the screen size is getting smaller.
2. Accessibility. The site is also somewhat accessible for people using screen readers:
- hovering over a menu option inverts the colors and creates a small animation, scaling up the font size for a short time.
- when using the tab key to go through the site menus, a border appears around the active menu/link. Note: The "Statistik" menu is skipped for some reason. I need to address that issue. 

Other information:
I will continue to develop this project until completed, with a full range of stats, system creation, log-in functiolality and deployment on Vercel. But it will happen in a "private" setting.

I also want to extend a genuine "Thank you", to my two teachers, Robert Hedblad and Maja Gedda, who allowed me to start on this project. It bugged me for many years, not being able to have the proper interface to my "thoughts about random patterns in the swedish lottery".
-----------------------------------------------------------------------------------------------

---- Project diary ---
01-April-2025
Added two keys to the .env.local file (related to the uploadthing module/library).
(I did not use it though. Not yet, anyway.)

03-April-2025
1. Routes created
2. JSON file created and uploaded to uploadthing cloud
3. Figuring out how to read the JSON file contents in my application.
4. I actually did not need the uploadthing module since I am only interested in READING data from a local JSON file.
5. Test successfull. Now we have JSON data we can process.
6. While stuck, I started to work on the menus, styling them with basic css.
7. Basic styling "Top menu" and "Statistik sub menu" done.

04-April-2025
1. Adjusted responsivity (a bit) for small displays
2. Worked on my sprint planning

07-April-2025
1. Finnished sprint planning for first week
2. Gathered information about the winnings for a couple of weeks and mapped it to the JSON file "underlag-utdelningar.json" (see the data folder). In time I will add more data, but at the moment, it should be enough to create interesting information about the winnings such as:
- What was the biggest win?
- What was the average winning for 7-rätt?
- What was the average winning for 6-rätt?
- Number of weeks without a 7-rätt win (the more weeks without a win, the bigger the wining pot in the next round)
etc.
This data could be filtered for a certain period of time with a start date and an end date.

08-April-2025
1. Today we are going to add information about "tilläggsnummer" to our application. Best aproach would be to create this information in the JSON file "latest1000drawings.json".
2. For practical reasons, as a temporary solution, I chose to create a separate JSON file (see "additionalnumbers.json" in the data folder) with information about these additional 4 numbers.
I just need to add more data, manually. At the moment the file only includes information from 1-jan-2025.
For some reason, the date is missing. I need to investigate further, since I need the date info to be part of every JSON object.
3. Fixed the date problem.
4. Closing this issue.

09-April-2025
1. Started on the presentation page for the "winnings page". This is actually a new page I am introducing. It was not planned from the start, but I find it interesting to create and present as it might be interesting to see for other people as well.
2. So, a new route for the page, new layout using tables and new fonts.
3. I had some problems with the average calculations (shown at the bottom of the page) but I got it working now. So, let's move on to another statistic page.

10-April-2025
1. Started on the presentation page for the "Statistik för enskilda nummer".
2. Got some of the calculations wrong. Need more debugging.
3. I fixed the error now. Need to compute the pattern for the last 100 drawings
and make a dropdown menu to select the number. Then make the numbers on the page change acording to the number selected in the dropdown.

11-April-2025
1. Working on storing the absence pattern for a certain number. 
2. The pattern for a certain number is now shown. But it would have been much cooler to show a diagram instead of a long series of numbers. Adding that feature as a new issue.

12-April-2025
1. I just installed Chart.js along with its React wrapper, react-chartjs-2 in order to produce a bar chart from the numbers I produce. I hope it is simple enough to use.
2. A bar chart is now implemented and styled using the Chart.js component (wrapped by react-chartjs-2). It worked well enough.
3. I stil need to add a dropbox where the user selects the number he wants to see the stats for. But I will get to it later.
4. Dropdown functionality implemented!

13-April-2025
1. Updated the JSON files. No need to make a new branch for this.
2. I will add to the information for the stats page (how it should be used).
3. Some information and design added. More remains to be filled for completion.
4. I also corrected 1 error. The last value in the chart was not computed at all. Now
it is calculated and added as the last number to the string array.
5. The general information in the stats page is detailed enough now. Closing this issue.

14-April-2025
1. I am working on stats for groups of numbers. The purpose is to see how often the numbers are bunched up together (or not).
2. It turned out I had more information to share on the stats page, so I just went with the flow (and let the inspiration guide me). :P
3. Fixed some layout issues with the winnings table(s). I prevented the contents from wrapping and also prevented the footer from covering the bottom table.
4. Started with the grouping stats.

15-April-2025
1. Grouping functionality implemented. Strange that I could not trim properly the comma at the end.
I tried in vain.
2. Working with the animation on the starting page now (the animation bootcamp gave me some ideas).
3. Done with the animation. Looks pretty cool if you ask me. Not so responsive though. :)

16-April-2025
1. Added more responsiveness to starting page
2. Starting on system page. This will be the core page of the site. Creating a reduced/smart system is the key for future success.
3. Added some instructions and 3 dropdowns on the page
4. Added a Submit button with fake functionality (does nothing much at the moment)
5. Added an alert message in case one of the otions are not selected
6. Added functionality so that the 3 numbers are UNIQUE.
7. Expanding the data input from the user to a full blown form, where we make a new sections, called "Filters" with a dropdown and in input field. The "Create system" button will collect all necessary data for processing.
8. All data seems to be collected correctly. Remains to write the actual code for creating the smart system using this data.

17-April-2025
1. Added same style for all form elements, on all pages.
2. Adjusted and styled some more. Button color, centered contents of the grouping stats page.
3. Added more text to intro page. Changed the text and font of dropdowns.
4. Changed the text of some instructions a bit, for clarity.
5. Updated the JSON-files with the latest lottery data.
6. After updating the JSON files, I got this weird message that "Module should match the data in "filename". After testing I found that I need to restart my application, so that the "new" JSON files are "processed".
7. Added some color variables to the globals.css file so I can reuse throughout the application. I changed the affected modules to use these variables.
8. Testing pull request
9. Changed some text (explaining better some of the concepts).

18-April-2025
1. After a heated debate with chatGPT, we both agreed upon some common ground. The result is a functional, responsive menu system implemented with accessibility in mind. Well, not all aspects of accessibility, but some (i.e. hover effects with changing colors and animations).
2. Fixed a bug related to the burger menu not closing after a menu selection was made.
3. I optimized the width of the dropdown container for smaller screens.