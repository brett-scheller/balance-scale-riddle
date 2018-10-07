function seed() {
  console.log("Challenge:");
  const anomaly = Math.floor(Math.random() * 12);
  const weight = Math.floor(Math.random() * 2);
  let anomalyWeight = 0.9;
  if (weight) anomalyWeight = 1.1;
  const pebbles = new Array(12).fill(1);
  pebbles[anomaly] = anomalyWeight;
  console.log(
    `The anomaly is at index ${anomaly} and weighs ${
      anomalyWeight < 1 ? "less" : "more"
    }`
  );
  return pebbles;
}

function riddle(p) {
  console.log("Solution:");
  const step1 = comparator(p, [0, 1, 2, 3], [4, 5, 6, 7]);
  if (step1 > 0) {
    const step2 = comparator(p, [0, 2, 4], [1, 3, 5]);
    if (step2 > 0) {
      const step3 = comparator(p, [0], [2]);
      if (step3 > 0) console.log("The pebble at index 0 weighs more");
      else if (step3 < 0) console.log("The pebble at index 2 weighs more");
      else if (step3 === 0) console.log("The pebble at index 5 weighs less");
    } else if (step2 < 0) {
      const step3 = comparator(p, [1], [3]);
      if (step3 > 0) console.log("The pebble at index 1 weighs more");
      else if (step3 < 0) console.log("The pebble at index 3 weighs more");
      else if (step3 === 0) console.log("The pebble at index 4 weighs less");
    } else if (step2 === 0) {
      const step3 = comparator(p, [6], [7]);
      if (step3 > 0) console.log("The pebble at index 7 weighs less");
      else if (step3 < 0) console.log("The pebble at index 6 weighs less");
    }
  } else if (step1 < 0) {
    const step2 = comparator(p, [0, 2, 4], [1, 3, 5]);
    if (step2 < 0) {
      const step3 = comparator(p, [0], [2]);
      if (step3 > 0) console.log("The pebble at index 2 weighs less");
      else if (step3 < 0) console.log("The pebble at index 0 weighs less");
      else if (step3 === 0) console.log("The pebble at index 5 weighs more");
    } else if (step2 > 0) {
      const step3 = comparator(p, [1], [3]);
      if (step3 > 0) console.log("The pebble at index 3 weighs less");
      else if (step3 < 0) console.log("The pebble at index 1 weighs less");
      else if (step3 === 0) console.log("The pebble at index 4 weighs more");
    } else if (step2 === 0) {
      const step3 = comparator(p, [6], [7]);
      if (step3 > 0) console.log("The pebble at index 6 weighs more");
      else if (step3 < 0) console.log("The pebble at index 7 weighs more");
    }
  } else if (step1 === 0) {
    const step2 = comparator(p, [8, 9, 10], [0, 1, 2]);
    if (step2 > 0) {
      const step3 = comparator(p, [8], [9]);
      if (step3 > 0) console.log("The pebble at index 8 weighs more");
      else if (step3 < 0) console.log("The pebble at index 9 weighs more");
      else if (step3 === 0) console.log("The pebble at index 10 weighs more");
    } else if (step2 < 0) {
      const step3 = comparator(p, [8], [9]);
      if (step3 > 0) console.log("The pebble at index 9 weighs less");
      else if (step3 < 0) console.log("The pebble at index 8 weighs less");
      else if (step3 === 0) console.log("The pebble at index 10 weighs less");
    } else if (step2 === 0) {
      const step3 = comparator(p, [11], [0]);
      if (step3 > 0) console.log("The pebble at index 11 weighs more");
      else if (step3 < 0) console.log("The pebble at index 11 weighs less");
    }
  }
}

function comparator(p, l, r) {
  console.log(`Weighing pebble(s) at indices ${l} against pebble(s) at indices ${r}`);
  let left = 0;
  l.forEach(function(n) {
    left += p[n];
  });
  let right = 0;
  r.forEach(function(n) {
    right += p[n];
  });
  console.log('Result:')
  if (left > right) {
    console.log(`Pebble(s) at ${l} weigh more than pebble(s) at ${r}`);
    return 1;
  } else if (right > left) {
    console.log(`Pebble(s) at ${r} weigh more than pebble(s) at ${l}`);
    return -1;
  } else {
    console.log(`Pebble(s) at ${l} and ${r} weigh the same`);
    return 0;
  }
}

console.log(riddle(seed()));
