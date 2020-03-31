export default function sortArr(arr) {
  const tempArr = [];
  const sortedArr = [];

  for (let obj in arr) {
    tempArr.push([arr[obj].playerId, arr[obj].points, arr[obj].playerName]);
  }

  tempArr.sort(function(a, b) {
    return b[1] - a[1];
  });

  if (tempArr.length >= 10) {
    for (let i = 0; i < 9; i++) {
      sortedArr.push({
        playerId: tempArr[i][0],
        points: tempArr[i][1],
        playerName: tempArr[i][2]
      });
    }
  } else {
    for (let i = 0; i < tempArr.length; i++) {
      sortedArr.push({
        playerId: tempArr[i][0],
        points: tempArr[i][1],
        playerName: tempArr[i][2]
      });
    }
  }
  return sortedArr;
}
