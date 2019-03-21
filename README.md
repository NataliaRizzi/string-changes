# Algorithm challenge // String Changes

## 1. Getting started

https://github.com/NataliaRizzi/string-changes


Fork this repo and then `git clone` your forked repo to your computer. 
Once happy with your solution, `git push` and submit a pull request at `https://github.com/NataliaRizzi/string-changes` 
or send an email to `natalia.rizzi88@gmail.com`

## 2. Challenge

Have the function StringChanges(str) take the str parameter being passed, which will be a string containing letters 
from the alphabet, and return a new string based on the following rules.

Whenever a capital M is encountered, duplicate the previous character (then remove the M), and whenever a capital N 
is encountered remove the next character from the string (then remove the N).

All other characters in the string will be lowercase letters. For example: "abcNdgM" should 
return "abcgg". The final string will never be empty. 

### 2.1. Examples

Input:"MrtyNNgMM"

Output:"rtyggg"


Input:"oMoMkkNrrN"

Output:"ooookkr"


### 2.2. Testing your solution

To test your solution, run `npm install` in the root directory and then run `npm test` to run the automated tests.

### 2.3. Submitting your solution

You have 2 options to submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo
2. Send an email with your solution to `natalia.rizzi88@gmail.com`.