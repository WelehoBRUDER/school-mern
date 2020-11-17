function sortList(list, reverse, filter, string) {
  return list.sort(function (a, b) {
    var compareA;
    var compareB;
    if (string === true) {
      compareA = a[filter].toUpperCase(); // ignore upper and lowercase
      compareB = b[filter].toUpperCase(); // ignore upper and lowercase
    } else if (string === false) {
      compareA = a[filter];
      compareB = b[filter];
    }

    if (compareA < compareB) {
      if (!reverse) return 1;
      else return -1;
    }
    if (compareA > compareB) {
      if (!reverse) return -1;
      else return 1;
    }

    return 0;
  });
}

export default sortList;