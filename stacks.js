//the goal of this formula is to divide a number into as many of a smaller number as possible, plus a single remainder to fill it in.
//y must be less than or equal to x

[(x-x%y)/y, x%y]

//[quotient (number of whole y's in x), remainder (smaller than y)]
