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

function riddleStep1(p) {
  console.log("****************\nStep 1:");
  const step1 = comparator(p, [0, 1, 2, 3], [4, 5, 6, 7]);
  if (step1 > 0) riddleStep2a(p);
  else if (step1 < 0) riddleStep2b(p);
  else riddleStep2c(p);
}

function riddleStep2a(p) {
  console.log("****************\nStep 2:");
  const step2 = comparator(p, [0, 2, 4], [1, 3, 5]);
  if (step2 > 0) riddleStep3aa(p);
  else if (step2 < 0) riddleStep3ab(p);
  else if (step2 === 0) riddleStep3ac(p);
}

function riddleStep3aa(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [0], [2]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 0 weighs more");
  else if (step3 < 0) console.log("The pebble at index 2 weighs more");
  else if (step3 === 0) console.log("The pebble at index 5 weighs less");
}

function riddleStep3ab(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [1], [3]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 1 weighs more");
  else if (step3 < 0) console.log("The pebble at index 3 weighs more");
  else if (step3 === 0) console.log("The pebble at index 4 weighs less");
}

function riddleStep3ac(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [6], [7]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 7 weighs less");
  else if (step3 < 0) console.log("The pebble at index 6 weighs less");
}

function riddleStep2b(p) {
  console.log("****************\nStep 2:");
  const step2 = comparator(p, [0, 2, 4], [1, 3, 5]);
  if (step2 < 0) riddleStep3ba(p);
  else if (step2 > 0) riddleStep3bb(p);
  else if (step2 === 0) riddleStep3bc(p);
}

function riddleStep3ba(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [0], [2]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 2 weighs less");
  else if (step3 < 0) console.log("The pebble at index 0 weighs less");
  else if (step3 === 0) console.log("The pebble at index 5 weighs more");
}

function riddleStep3bb(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [1], [3]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 3 weighs less");
  else if (step3 < 0) console.log("The pebble at index 1 weighs less");
  else if (step3 === 0) console.log("The pebble at index 4 weighs more");
}

function riddleStep3bc(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [6], [7]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 6 weighs more");
  else if (step3 < 0) console.log("The pebble at index 7 weighs more");
}

function riddleStep2c(p) {
  console.log("****************\nStep 2:");
  const step2 = comparator(p, [8, 9, 10], [0, 1, 2]);
  if (step2 > 0) riddleStep3ca(p);
  else if (step2 < 0) riddleStep3cb(p);
  else if (step2 === 0) riddleStep3cc(p);
}

function riddleStep3ca(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [8], [9]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 8 weighs more");
  else if (step3 < 0) console.log("The pebble at index 9 weighs more");
  else if (step3 === 0) console.log("The pebble at index 10 weighs more");
}

function riddleStep3cb(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [8], [9]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 9 weighs less");
  else if (step3 < 0) console.log("The pebble at index 8 weighs less");
  else if (step3 === 0) console.log("The pebble at index 10 weighs less");
}

function riddleStep3cc(p) {
  console.log("****************\nStep 3:");
  const step3 = comparator(p, [11], [0]);
  console.log("****************\nSolution:");
  if (step3 > 0) console.log("The pebble at index 11 weighs more");
  else if (step3 < 0) console.log("The pebble at index 11 weighs less");
}

function comparator(p, l, r) {
  let s = ''
  let pl = 's'
  if (l.length > 1) {
    s = 's';
    pl = ''
  }
  console.log(
    `Weighing pebble${s} at ind${l.length > 1 ? 'ices' : 'ex'} ${l} against pebble${s} at ind${l.length > 1 ? 'ices' : 'ex'} ${r}`
  );
  let left = 0;
  l.forEach(function(n) {
    left += p[n];
  });
  let right = 0;
  r.forEach(function(n) {
    right += p[n];
  });
  console.log("Result:");
  if (left > right) {
    console.log(`Pebble${s} at ${l} weigh${pl} more than pebble${s} at ${r}`);
    return 1;
  } else if (right > left) {
    console.log(`Pebble${s} at ${r} weigh${pl} more than pebble${s} at ${l}`);
    return -1;
  } else {
    console.log(`Pebble${s} at ${l} and ${r} weigh the same`);
    return 0;
  }
}

console.log(riddleStep1(seed()));
