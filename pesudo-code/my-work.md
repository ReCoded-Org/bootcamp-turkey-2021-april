## Pesudo code

pesuedo code to check if a student get a certain grade, according to the following:
0   to  50   => Failed the class
51  to  60   => D Grade
61  to  70   => C Grade
71  to  80   => B Grade
81  to  90   => A Grade
91  to  100  => S Grade

Pesudo Code is the following:
create and integer and name it grade
Take a user input of an integer and assign it to grade
check the grade status
if {
    grade is less than 0 or higher than 100 return false entry
}
else {
    if {
        grade is less than or equal to 50 return "Student has failed this class"
    }
    else if {
        grade is less than or equal to 60 and higher than 50 return "D grade"
    }
    else if {
        grade is less than or equal to 70 and higher than 60 return "C grade"
    }
    else if {
        grade is less than or equal to 80 and higher than 70 return "B grade"
    }
    else if {
        grade is less than or equal to 90 and higher than 80 return "A grade"
    }
    else {
        return "S grade"
    }
}