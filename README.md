# fibonacci-exercise
Exercise with Fibonacci Sequence

- The objective is to display up to 50 Fibonacci numbers. When the page initially loads it should show the first 50 such numbers.
- There should be checkboxes to enable and disable three filters. These filters allow you to omit some numbers
from the result. Omitted numbers are not counted in the total; you should keep generating numbers until
you have 50 of them that pass the filter.
    - One filter keeps only even numbers in the result
    - One filter keeps only prime numbers in the result
    - One filter keeps only numbers with at least one odd digit
    - When multiple filters are selected, they should be treated as an AND filter; a number has to pass
all of the filters to be included in the result.
- It is expected that you will not have 50 results for all possible combinations of filter settings. You can stop
searching once your candidate number reaches Number.MAX_SAFE_INTEGER (9,007,199,254,740,991)
- The three filters should start off all unchecked. The table of results should be filled when the page loads.
- It needs to have the three headers shown (Some title of your choosing, "Filtering Options", and "Results")
- Results should be displayed in a single properly structured table.
- Checking or unchecking any of the filters should recalculate the results in the table.
