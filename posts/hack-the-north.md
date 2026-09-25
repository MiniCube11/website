---
title: "Building platforms at Canada’s biggest hackathon"
date: "2026-09-25"
---

I still remember attending Hack the North for the first time in high school and being blown away by the energy of the event and how smoothly everything seemed to run.

As a hacker, 2 things stood out to me the most:
- 1\. I was really impressed by how polished and beautiful the sites and platforms were, especially hackthenorth.com.
- 2\. I was really curious about how Hack the North operated behind the scenes, in order to pull off an event that was so well-ran.

In the past year, I got to experience the other side of Hack the North as a frontend organizer! I helped build some of the same sites and platforms that had impressed me as a hacker, while also getting to help with everything else that goes into bringing Hack the North to life.

## museum.hackthenorth.com

![museum](/images/writing/hack-the-north/museum.gif)

This was our first project of the year! Museum is a website that showcases all our past winners’ projects over the years in a nicely packaged interface. It was not only a new initiative this year, but it also allowed all the frontend developers to get onboarded quickly onto the tech stack and tools we use at Hack the North. For this project, I worked on the hero section.

Interesting parts of the hero section were making the transition when swapping out thumbnails smooth and adding the duotone filter for each project image.

For the gallery images, project images are swapped out after a set amount of time to allow the gallery to gradually rotate the projects being shown. To swap out an image smoothly, we had two images stacked on top of each other: the image being swapped out and the image being swapped in. During the transition, the top image fades out, while the bottom image fades in, creating a crossfade.

For the duotone filter, we used an SVG filter on top of the image, taking the colour information of each pixel and mapping it to a gradient between the highlight and shadow colours based on the colour’s brightness.

While we couldn’t immediately see the impact when the site first launched, I think Museum, along with its [marketing campaign](https://www.instagram.com/reel/DbBvXaAD8pB/), was a project that helped inspire hackers to build more fun and cool projects at the event.

## hackthenorth.com

This was definitely my favourite project of the year! The static site is often someone’s first impression of Hack the North for the year, and we wanted to make that experience as delightful as possible, and also keep raising the bar from past years.

![about](/images/writing/hack-the-north/about.gif)

I worked on part of the about section, including the vinyl player, rotating vinyl collection, and gameboy. I really enjoyed building the fun interactions in this section, and it was really satisfying seeing everything come to life :) Big shout out to the design team for creating these beautiful assets 🤩

One of the biggest challenges was making the section look great on all screen sizes (try viewing the about section in different screen sizes!). Even though there were Figma designs for mobile, tablet, desktop, and wide desktop sizes, there were still many cases in between to cover. This required lots of testing on different screen sizes and devices, and fixing small details until the section looked perfect. I also needed to make sure that the section was consistent with the sections above and below my section.

Another interesting bug I ran into was that the text would flicker on the first interaction of any component, such as the first time clicking the vinyl. Putting this bug into Cursor, I tried many suggested solutions, but the LLM-suggested solutions still didn’t fix the bug. Trying to find the bug myself, I opened DevTools and started recording the website as I interacted with elements on the page. Looking at when the text flickered, I noticed that the fonts were being loaded on the interaction, rather than on page load. This led me to discover that we weren’t pre-loading the fonts correctly, and fixing this solved the issue.

After launching our static site, we got a lot of positive feedback that visitors loved our website and how delightful and beautiful each of the sections were. I’m really proud that I was part of the team that pulled this website off, and it definitely wouldn’t have been possible without the amount of care and attention-to-detail everyone involved put into making the site.

## apply.hackthenorth.com

The applications portal is where students wrote and submitted their application, for a chance to attend Hack the North. We also had a goal of making the application process an immersive and intuitive experience, and not just a form that applicants filled out. In the application, we had a music maker where applicants could choose a beat, chord, and melody, and would have one of three hacker pals follow them throughout their responses.

<video controls>
  <source src="/images/writing/hack-the-north/hacker-applications.mp4" type="video/mp4">
</video>
<br>

For the hacker applications portal, I worked on the long answer section. The first part was figuring out how to work on this in parallel with the short answer section, which Belinda worked on, as we shared the same application background and layout. I ended up taking the background section and layout, while Belinda took the navigation bar and adding the hacker pal.

While the section was visually less complex than hackthenorth.com, we had to make sure everything worked well functionally, as thousands of applicants depended on this platform for submitting their application.

One of the most difficult parts of this project was handling all the possible error states a user could have while filling out their application. For example, a user could have filled out all inputs but have invalid data, or have empty fields in the form, or have lost wifi connection when trying to submit their application. We needed to make sure that each error state had descriptive feedback given to the user, so they could easily correct the error and proceed with their application. There were a lot of new edge cases that were found as we kept testing the platform, but eventually we launched a polished platform that 5k+ applicants used and loved. It was rewarding to see social media posts sharing that they applied, or sharing that they were delighted by the application process.

## RSVP

![RSVP](/images/writing/hack-the-north/rsvp.png)

After finishing our 2 major projects for the year, I was tasked with updating the RSVP portal for this year. The RSVP portal allowed accepted hackers to submit additional information for the event, sign their waiver, confirm their attendance, and new to this year, customize a shareable "I got in!" social media graphic.

For me, this included: updating event-related information for this year, updating or adding different fields to the RSVP form, and coordinating across logistics and sponsorship teams. Unlike previous projects, working on RSVP exposed me to Hack the North’s APIs and GraphQL. While the tasks I worked on weren’t particularly difficult, I found the most challenging part of this project was onboarding myself onto HackerAPI in a short amount of time, to make sure we met the launch deadline.

Getting the RSVP portal launched within the tight deadline was a true team effort, and I was glad to see that my LinkedIn feed was filled with the social media graphics from hackers sharing that they would be attending Hack the North in September!

![RSVP social media posts](/images/writing/hack-the-north/rsvp-socials.png)

## Finishing thoughts

Overall, it was rewarding to see the websites and products I worked on launch to many users, and receive positive feedback on how polished everything was. It was also satisfying to finally see everything come together on the event weekend, and see the impact we had on our hackers, after months of hard work.

Aside from working on products, I was also involved in other aspects of the event, such as working on the application process and overseeing the second round judging for semifinalists at the event. Earlier in the year, we would have team-wide brainstorming sessions that would decide the direction of different aspects of the hackathon. One thing I really enjoyed about Hack the North was the open culture for sharing ideas, and everyone could have a say in different aspects of the hackathon, from the event branding, to the activities and the hacker swag.

Later in the year, I had the opportunity to attend Hackcon in New York, along with several other Hack the North organizers. During the weekend, I met many other hackathon organizers from different countries, and bonded over our shared enthusiasm for hackathons. I also got closer to other organizers on the team, through our late night yaps and NYC adventures.

![Hackcon](/images/writing/hack-the-north/hackcon.jpeg)

Finally, the organizing year wouldn’t nearly have been as fun without the team I worked with. I’m so glad I got to meet and become friends with many organizers on the team :)

![Hack the North team](/images/writing/hack-the-north/htn-team.png)

*Shout out to Aayush, Amanda, Angela, Belinda, Benny, Max for being a goated frontend team 🤩*