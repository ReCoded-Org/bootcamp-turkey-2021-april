Example 1: Boiling Water
Go to the Kitchen
bring the kettle 
If the kettle is filled to 300 ml or more {
     Put the kettle on the stove
     Turn on the stove
     Let the kettle boil to 100 C degree
     Turn the stove off
}
Else if it is less than 300 ml {
     If there is a water bottle {
          open the water tap of the bottle
          Fill the kettle to 300 ml of water
          Close the water tap of the bottle
          Close the kettle
          Back to 4
      }
      Else {
           Go to the market
           Buy a new bottle of water
           Pay to the market cashier
           Go back to home
           Go back to 10
      }
} 
Quit


Example 2: Pseudocode to print all numbers from 1 to 100.
Turn the computer on
write in your password 
open microsoft word
create a new file
write the numbers from 1 to 100
save the file
check that printer
  if it is on {
    check the paper tray
      if the paper tray is filled {
          provide the Print order to print numbers from 1 to 100
      }
      else {
        fill in the paper tray
        go back to 40
      }
  }
  else {
    turn it on
    go back to 38
  }
quit



Example 3: Pseudocode to print even numbers less than or equal to user input, that we call N (inclusive).
Turn the computer on
write in your password 
check that printer
if it is on {
      check the paper tray
        if the paper tray is filled {
          Open the user file
          interpret the user input
          define the user input as N
            If N <= 0 {
              print error "you should enter a number that is greater than 0"
              }
            Else if N is even number {
              print the series of numbrs starting from N then N - 2 till the number 2
              }
            Else if N is odd number {
              print the series of numbrs starting from N-1 till the number 2
             }
        else {
          fill in the paper tray
          go back to 66
        }
    }
    else {
      turn it on
      go back to 64
    }
End
