# alexaEnglishVocabularySkill
 In this skill, the user can : 
 
      * Ask Alexa to get word of the day i.e a new word and it's meaning, helping the user to enhance their English vocab. 
      * Ask Alexa to spell a certain word like Pneumonia, on which Alexa will respond with P N E U M O N I A. 
      * ask Alexa to give them a word and the user will try to spell it if the user is unable to spell it Alexa will respond with the             correct pronunciation. 

I started with creating a simple intent for getting the word of the day where I created a static list of words, their spelling and their meaning. And then I generated a random number each time the Intent was called.

After that I created the spell Intent where the user would ask Alexa to spell a word of user's choice, I caught the word in a slot and then return the spelling of it.

After that, I created the ask spelling Intent where Alexa would ask the user to spell a certain word, if correct Alexa will respond with a praise or else Alexa will ask the user to try again. If the user cannot spell the word, Alexa will respond with the correct pronunciation.   
Currently, the words list is static, in future I want to dynamically build the list and also shape the skill according to each user rather than in general.
