(Run the code and see output in console.)

This code demonstrates the solution to the following riddle:

**************

RIDDLE:

Suppose you have 12 pebbles, and a balance scale you can use to weigh groups of pebbles against each other. You know that 11 pebbles weight the same, but one has a slightly different weight. You don't know if the anomaly pebble weighs more or less than the rest. Using the balance scale only 3 times, can you find the odd pebble out?

**************

The solution is highly conditional and difficult to express in language, which was the motivation of this format. However, here is a best attempt:

**************

SPOILERS! Try to solve on your own first!

**************

SOLUTION:

First, weigh the first 4 stones against the next 4. If they are equal, we know the anomaly is in the last 4. This is the simplest case and will be left to the end.

If one group of 4 weighs more than the other, we still don't know which group contains the anomaly. We "mix" these groups together in a sieve which will help us distinguish.

Imagine our first weigh was 1,2,3,4 v 5,6,7,8. Imagine the 1,2,3,4 side weighed more.

Our second weigh will be a 3v3. Both sides will take 2 pebbles from the first side, and one from the second side. In our example, this means we might weigh 1,3,5 against 2,4,6.

If 1,3,5 is heavier than 6,4,2 there are three possibilities: 1 is heavy, 3 is heavy, or 6 is light. These are the only possibilties that observe the results of the first step.

From here, we weigh 1v3. If one is heavier than the other, it must be the anomaly and be heavy. If they are the same, 6 must be the anomaly, and be lighter.

This progression is the same with different values, for different outcomes of the first two weighs. Their details can be traced in the code, but it works the same way.

The only thing left uncovered is the easier result of the first weigh. If 1,2,3,4 v 5,6,7,8 are equal, we know the anomaly is in the last 4 pebbles, 9,10,11 or 12.

We simply weigh 3 of them against 3 of the other stones now known to be normal. For example, 9,10,11 v 1,2,3. If the groups do not match, we know the weight of the anomaly by the scale. In our example, lets say that 9,10,11 weigh less, and as we now know, contain the anomaly.


We then pick two stones from the set of 3 and weigh them against each other. If they are different, the one that corresponds to the result of the previous step is the anomaly. For example, if 9 weighs less than 10, it is the anomaly.

If this last weigh comes out equal, the one left unweighed is the anomaly, and we know the status of its weight from step 2.

There it is!

Incidentally, using three steps, it is impossible to know the identity of the pebble without also learning its weight. The two discoveries are one and the same.
