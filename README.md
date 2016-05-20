CMPT276-Assign1: Grade Calculator & Added Feature
By Sabrina Bolognese
sbologne@sfu.ca
-------------------------------------------------------------------------------


REQUIRED COMPONENTS:
--------------------
CSS Matching the given example
A grade calculator with input boxes for achieved grade and possible grade
  1) Calculator displays percentage when input box values are changed
  2) Pressing "MEAN" calculates the average grade using the following:
      (percentage1 + percentage2 + percentage3 + percentage4)/4
      Displayed in fraction form
  3) Pressing "AVERAGE" calculates the mean grade using the following:
      (achievedGrade1 + achievedGrade2 + achievedGrade3 + achievedGrade4)
      /(possibleGrade1 + possibleGrade2 + possibleGrade3 + possibleGrade4)
      Displayed in fraction form


ADDED COMPONENTS:
-----------------
Grade Calculator:
  1) Hovering over the table will highlight the row, with the immediate square
    appearing the brightest
  2) Adding numbers to the achieved grade text box while keeping the possible
    grade text box at or below "0" will result in a N/A grade (to avoid
    dividing by 0 or keeping an invalid grade)
  3) Grades out of <=0 will not be included in the MEAN/AVERAGE calculations
  4) If grades are edited after a MEAN or AVERAGE calculation, the previously
    displayed MEAN/AVERAGE turns red to alert the user that it is expired
