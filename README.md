# Fluent Recall

<div>

<h5 align="center">
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Demo'> Demo </a> <span> · </span>  
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Tech'> Tech </a> <span> · </span>
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Spec'> Spec </a> <span> · </span>
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Installation'> Installation </a><span> · </span>
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Features'> Features </a>
<h5>
</div>
  
# Demo  

Click on the image below for a quick demo (please excuse the bad quality from YouTube)

[![Demo link](https://img.youtube.com/vi/RdIN3OW0Lqw/0.jpg)](https://www.youtube.com/watch?v=RdIN3OW0Lqw)

# Tech
![Image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Image](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge)
![Image](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Image](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

# Spec

A language-based flashcard web application, designed to help you remember words in foreign languages. Each user can create their own account and have flashcards associated with their account. Once you have created a flashcard, you can enter into practice mode during which you can attempt as many flashcards as you like. The application will prioritise flashcards that you have the fewest attempts on when determining which cards to show you first. Your scores for each card are stored, and you can access stats during practice mode. Your flashcards are colour coded according to your success rate.

# Installation

[Clone this repo](https://github.com/tbuller/fluent-recall.git)

In terminal (Mac), run:

```
cd api
npm install
npm start
```
Open another terminal in the same codebase:
```
cd frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
  
# Features 
  
<div>

<h5 align="center">
  <a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Auth'> Auth </a> <span> · </span>
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Create'> Create </a> <span> · </span>  
<a href='https://github.com/tbuller/fluent-recall/blob/main/README.md#Practice-mode'> Practice-mode </a>
<h5>
</div> 
  
## Auth
  
Each user can create their own account, and the flashcards that they subsequently create will be associated with their account. Records of attempts are stored in the database.
  
![Image](https://github.com/tbuller/fluent-recall/blob/main/frontend/public/README_images/fluent-recall-auth-screenshot.png)  
  
## Create
  
Users can create words/phrases in their desired target language by selecting from the country icons in the top left of the screen. Once a card is created, it appears dynamically in the relevant tab below. The logged in user can navigate between the tabs to see all of the flashcards that they have in each language. The cards are colour coded according to the success rate that the user has with each flashcard (the cards are grey if the user has attempted the word/phrase fewer than 5 times).  
  
![Image](https://github.com/tbuller/fluent-recall/blob/main/frontend/public/README_images/fluent-recall-home-screenshot.png)  
  
## Practice-mode 
  
Once the logged in user enters into practice mode, they will attempt each word/phrase, starting with the words that they have the fewest attempts on. Once the arrow next to word is clicked, a green/red block gets added to the row of recent attempts. The "Recent attempts" shows the last 10 attempts for the flashcard. Additionally, there is a collapsable "Word info" section, which shows the overall success rate and when the card was added. You can also hear what the word/phrase sounds like by clicking on the speaker icon.

![Image](https://github.com/tbuller/fluent-recall/blob/main/frontend/public/README_images/fluent-recall-practice-screenshot.png)



