# NASA API Photo of the day - React + TypeScript + Vite

I stumbled upon this React project tutorial on [youtube](https://youtu.be/82PXenL4MGg?t=2646) and, as a big fan of astronomy, I thought this would be a nice little project to follow along and allow myself to learn some more about React. I have also taken the opportunity to deploy this app on my Raspberry Pi, with nginx, so that I can have a daily glance at the marvels of our universe before I start my daily work.\
This app is based on the [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) website that displays a new photo or video about astronomy everyday with a brief description of what you're looking at. This website is supported by their open API which allows you to retrieve that same daily image/video via REST.

I took the opportunity to use the Vite build tool for the first time, instead of the traditional CRA / Webpack.\
Initially the app was only prepared to receive and display a photo URL but I noticed that the API can respond with an embed video URL from youtube. To support this I created an additional [YoutubeEmbed](/src/components/YoutubeEmbed.tsx) component to allow displaying the videos as well.

# Live development and Build

Ensure that you run 'npm install', first of all.\
The project can be executed and edited live simply by using the Vite command 'npm run dev'.\
As for the build, 'npm run build' will generate all the necessary assets in the 'dist/' folder.

# NASA API Key

If you want to run or deploy this app for yourself, don't forget to create an API key [here](https://api.nasa.gov/)\
After that you will need to create a '.env' file on the root folder of the project and put your API key inside like this:

VITE_NASA_API_KEY={YOUR_KEY_GOES_HERE}