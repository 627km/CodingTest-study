function solution1(param) {
  // console.log("call solution1");
  // return param;
  // 내 답
  let answer = [];
  let xContainer = [];
  let yContainer = [];
  let xPoint = "";
  let yPoint = "";

  let i = 0;
  param.map((it) => {
    xContainer[i] = it[0];
    yContainer[i] = it[1];
    i += 1;
  });

  xPoint = xContainer[0];
  yPoint = yContainer[0];

  if (xPoint == xContainer[1]) {
    xPoint = xContainer[2];
  } else {
    if (xPoint == xContainer[2]) {
      xPoint = xContainer[1];
    } else {
      xPoint = xContainer[0];
    }
  }

  if (yPoint == yContainer[1]) {
    yPoint = yContainer[2];
  } else {
    if (yPoint == yContainer[2]) {
      yPoint = yContainer[1];
    } else {
      yPoint = yContainer[0];
    }
  }

  answer[0] = parseInt(xPoint);
  answer[1] = parseInt(yPoint);
  return answer;
}

function getParameter() {
  // console.log("call getParameter");
  return [
    [1, 3],
    [1, 10],
    [5, 3],
  ];
}

module.exports = {
  solution1,
  getParameter,
};
