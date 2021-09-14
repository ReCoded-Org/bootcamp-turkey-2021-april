# Re:Coded Mad Libz

## What is Mad Libs? 
See [wikipedia](https://en.wikipedia.org/wiki/Mad_Libs). Yes, I know this section is short, do not skip this, **please read what Mad Libs is or the rest of this will make no sense**. In normal mad libs, you usually just insert the word, but in this version, it's more like a "fill in the blank" of an existing story.

## Instructions

### Collaboration requirements
Please don't split the code. Write every line of code together. In each group, every person should understand every line of code. See [pair programming](Pair_programming).

### Write a story

In `story.txt`, you'll find a brief story **that you need to replace with your own**. By the way, for the purposes of [parsing](https://en.wikipedia.org/wiki/Parsing), you're only allowed to use periods and commas as grammar.

Confusingly, you should write out the full story, although the "blanks" will be anywhere a grammar part is denoted. The reason for this will be apparent later in some of the extra challenges.

For example:
* `Louis[n]`: normally it says Louis, but the user should replace it with a *noun*
* `went[v]`: normally it says went, but the user should replace it with a *verb*
* `[a]` for adjective...

Note that when you write a story, the period and commas should go after the part of speech, e.g., `Louis[n].` (NOT `Louis.[n]`).

### Code

In this project, you will be using HTML, CSS, and JS in unison in order to create a variant of a Mad Libs game with the story of your choice. 

Below, we discuss the requirements. We use the word "input" to refer to the blanks in the Mad Libs story.

Here is a very, very simple visual example of what it might look like; however, all styling is at your liberty in this project.

### Barebones Example
![Example](https://i.imgur.com/ZRNvFC7.png)

#### Functional requirements

0. **Parsing the story:** I've already written some code for you that reads in the file `story.txt` into a string. However, you need to process it into a format that will allow you to keep track of "blanks." See `madlibs.js` for further instructions. You will likely want to [read about regular expressions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/) (yes, this is extra expected reading :) ). It's possible, but annoying, to do this without regular expressions.

1. **Showing the story:** It should show **two copies** of the story. In one copy ("edit view"),
all words in the story with blanks (e.g., `Louis[n]`, `went[v]`, ...) are replaced with inputs. This should be in `div.madLibsEdit`. In the second copy ("preview"), it should show the same story, but formatted prettily (without the blanks!). Refer to the example picture above.

2. **Hotkeys:** When the user presses `Enter` in an input, it should move the cursor to the next input in the story.

3. **Constraining user inputs:** An input should be allowed to have a maximum of 20 characters.

4. **Live update:** Whenever the user updates a blank in the edit view, it should update the preview any time a new character is typed (hint: this is handling an event of sorts). The user should **not** have to click a button in order to update the preview.

5. **Story length:** Your story should have at least 10 blanks.

#### Styling requirements

0. **Responsiveness**: When the screen is small, the story should take the full width of the screen. When the screen is larger, as on a computer. Values "small" and "large" are up to you to decide.

1. **Flexbox**: Use at least one flexbox.

2. **Highlighting currently focused input**: There should be three possible styles of inputs (style is a vague word here, they just need to be distinguishable to the user):
* currently highlighted input (if the user is typing in one)
* filled out input (the user has already put a word there -- might require JS here ;) )
* empty input (the user has not already put a word there).