import { useState, useRef, useEffect, useCallback, useLayoutEffect, useMemo } from "react";
function cov_esxf737i5() {
  var path = "/home/jannis/development/private/react-use-utils/src/hooks/use-rerender.ts";
  var hash = "4daf69dde0c2942b88138c2364b66d8ddbf3fb66";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/hooks/use-rerender.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 4,
          column: 42
        }
      },
      "2": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 51
        }
      },
      "4": {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 7,
          column: 49
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 19
          },
          end: {
            line: 6,
            column: 20
          }
        },
        loc: {
          start: {
            line: 6,
            column: 31
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 17
          }
        },
        loc: {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 7,
            column: 49
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4daf69dde0c2942b88138c2364b66d8ddbf3fb66"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_esxf737i5 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_esxf737i5();
cov_esxf737i5().s[0]++;
const useRerender = () => {
  cov_esxf737i5().f[0]++;
  const [_, updateState] = (cov_esxf737i5().s[1]++, useState(false));
  cov_esxf737i5().s[2]++;
  const rerender = () => {
    cov_esxf737i5().f[1]++;
    cov_esxf737i5().s[3]++;
    updateState((previousState) => {
      cov_esxf737i5().f[2]++;
      cov_esxf737i5().s[4]++;
      return !previousState;
    });
  };
  cov_esxf737i5().s[5]++;
  return rerender;
};
function cov_10a2oujhu7() {
  var path = "/home/jannis/development/private/react-use-utils/src/hooks/use-render-count.ts";
  var hash = "5fc803e270432106a36691ecd16747a7fe0703dc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/hooks/use-render-count.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 7,
          column: 46
        }
      },
      "2": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 9,
          column: 48
        }
      },
      "3": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 32
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 50
        }
      },
      "6": {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "7": {
        start: {
          line: 17,
          column: 18
        },
        end: {
          line: 17,
          column: 66
        }
      },
      "8": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 32
        }
      },
      "9": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 15
        }
      },
      "10": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 63
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 12,
            column: 13
          }
        },
        loc: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 17
          }
        },
        loc: {
          start: {
            line: 16,
            column: 39
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 41
          }
        }, {
          start: {
            line: 7,
            column: 45
          },
          end: {
            line: 7,
            column: 46
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 18
          },
          end: {
            line: 17,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 43
          },
          end: {
            line: 17,
            column: 45
          }
        }, {
          start: {
            line: 17,
            column: 48
          },
          end: {
            line: 17,
            column: 66
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5fc803e270432106a36691ecd16747a7fe0703dc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_10a2oujhu7 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10a2oujhu7();
cov_10a2oujhu7().s[0]++;
const useRenderCount = (initialValue) => {
  var _a;
  cov_10a2oujhu7().f[0]++;
  const initialRenderCount = (cov_10a2oujhu7().s[1]++, (_a = (cov_10a2oujhu7().b[0][0]++, initialValue)) != null ? _a : (cov_10a2oujhu7().b[0][1]++, 1));
  const renderCount = (cov_10a2oujhu7().s[2]++, useRef(initialRenderCount));
  const rerender = (cov_10a2oujhu7().s[3]++, useRerender());
  cov_10a2oujhu7().s[4]++;
  useEffect(() => {
    cov_10a2oujhu7().f[1]++;
    cov_10a2oujhu7().s[5]++;
    renderCount.current = renderCount.current + 1;
  });
  cov_10a2oujhu7().s[6]++;
  const reset = (to) => {
    cov_10a2oujhu7().f[2]++;
    const value = (cov_10a2oujhu7().s[7]++, typeof to === "number" ? (cov_10a2oujhu7().b[1][0]++, to) : (cov_10a2oujhu7().b[1][1]++, initialRenderCount));
    cov_10a2oujhu7().s[8]++;
    renderCount.current = value;
    cov_10a2oujhu7().s[9]++;
    rerender();
  };
  cov_10a2oujhu7().s[10]++;
  return [renderCount.current, {
    reset
  }];
};
function cov_1q9eukat2r() {
  var path = "/home/jannis/development/private/react-use-utils/src/hooks/use-dimensions.ts";
  var hash = "db1f58b88aea112902a5b3d80925a518344b40e9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/hooks/use-dimensions.ts",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 42
        }
      },
      "2": {
        start: {
          line: 19,
          column: 38
        },
        end: {
          line: 19,
          column: 65
        }
      },
      "3": {
        start: {
          line: 21,
          column: 18
        },
        end: {
          line: 21,
          column: 71
        }
      },
      "4": {
        start: {
          line: 21,
          column: 40
        },
        end: {
          line: 21,
          column: 71
        }
      },
      "5": {
        start: {
          line: 23,
          column: 20
        },
        end: {
          line: 25,
          column: 8
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 47
        }
      },
      "7": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 30,
          column: 18
        }
      },
      "8": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 36
        }
      },
      "9": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 28,
          column: 36
        }
      },
      "10": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 16
        }
      },
      "11": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 22
          },
          end: {
            line: 15,
            column: 23
          }
        },
        loc: {
          start: {
            line: 17,
            column: 29
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 19
          }
        },
        loc: {
          start: {
            line: 21,
            column: 40
          },
          end: {
            line: 21,
            column: 71
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 32
          },
          end: {
            line: 23,
            column: 33
          }
        },
        loc: {
          start: {
            line: 23,
            column: 44
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 18
          },
          end: {
            line: 27,
            column: 19
          }
        },
        loc: {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 36
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 36
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 28
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "db1f58b88aea112902a5b3d80925a518344b40e9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1q9eukat2r = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1q9eukat2r();
cov_1q9eukat2r().s[0]++;
const useDimensions = () => {
  cov_1q9eukat2r().f[0]++;
  const elementRef = (cov_1q9eukat2r().s[1]++, useRef(null));
  const [dimensions, setDimensions] = (cov_1q9eukat2r().s[2]++, useState());
  cov_1q9eukat2r().s[3]++;
  const measure = (element) => {
    cov_1q9eukat2r().f[1]++;
    cov_1q9eukat2r().s[4]++;
    return element.getBoundingClientRect();
  };
  const reMeasure = (cov_1q9eukat2r().s[5]++, useCallback(() => {
    cov_1q9eukat2r().f[2]++;
    cov_1q9eukat2r().s[6]++;
    setDimensions(measure(elementRef.current));
  }, []));
  cov_1q9eukat2r().s[7]++;
  useLayoutEffect(() => {
    cov_1q9eukat2r().f[3]++;
    cov_1q9eukat2r().s[8]++;
    if (!elementRef.current) {
      cov_1q9eukat2r().b[0][0]++;
      cov_1q9eukat2r().s[9]++;
      return;
    } else {
      cov_1q9eukat2r().b[0][1]++;
    }
    cov_1q9eukat2r().s[10]++;
    reMeasure();
  }, [reMeasure]);
  cov_1q9eukat2r().s[11]++;
  return [elementRef, dimensions, {
    reMeasure
  }];
};
function cov_1poc3gemdc() {
  var path = "/home/jannis/development/private/react-use-utils/src/util.ts";
  var hash = "69c19be286c35d036fd185545eb7281ef69c65e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/util.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 7,
          column: 19
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 13,
          column: 4
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 28
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 62
        }
      },
      "5": {
        start: {
          line: 11,
          column: 33
        },
        end: {
          line: 11,
          column: 53
        }
      },
      "6": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "7": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 17,
          column: 29
        }
      },
      "8": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 25
          }
        },
        loc: {
          start: {
            line: 6,
            column: 64
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 10
          }
        },
        loc: {
          start: {
            line: 8,
            column: 72
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 27
          },
          end: {
            line: 11,
            column: 28
          }
        },
        loc: {
          start: {
            line: 11,
            column: 33
          },
          end: {
            line: 11,
            column: 53
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 16,
            column: 26
          }
        },
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 29
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "69c19be286c35d036fd185545eb7281ef69c65e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1poc3gemdc = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1poc3gemdc();
cov_1poc3gemdc().s[0]++;
const throttle = (fn, delay) => {
  cov_1poc3gemdc().f[0]++;
  let timeoutId = (cov_1poc3gemdc().s[1]++, 0);
  cov_1poc3gemdc().s[2]++;
  return function(...args) {
    cov_1poc3gemdc().f[1]++;
    cov_1poc3gemdc().s[3]++;
    clearTimeout(timeoutId);
    cov_1poc3gemdc().s[4]++;
    timeoutId = setTimeout(() => {
      cov_1poc3gemdc().f[2]++;
      cov_1poc3gemdc().s[5]++;
      return fn.apply(this, args);
    }, delay);
    cov_1poc3gemdc().s[6]++;
    return void 0;
  };
};
cov_1poc3gemdc().s[7]++;
function cov_2r3kgobokc() {
  var path = "/home/jannis/development/private/react-use-utils/src/hooks/use-resize-observer.ts";
  var hash = "43c4cd04e0210b78211c4434998f8c328299cb50";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/hooks/use-resize-observer.ts",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 33
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 26
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 21,
          column: 42
        }
      },
      "3": {
        start: {
          line: 22,
          column: 38
        },
        end: {
          line: 22,
          column: 65
        }
      },
      "4": {
        start: {
          line: 24,
          column: 30
        },
        end: {
          line: 24,
          column: 37
        }
      },
      "5": {
        start: {
          line: 26,
          column: 25
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "6": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 35,
          column: 7
        }
      },
      "7": {
        start: {
          line: 30,
          column: 10
        },
        end: {
          line: 33,
          column: 11
        }
      },
      "8": {
        start: {
          line: 31,
          column: 12
        },
        end: {
          line: 31,
          column: 39
        }
      },
      "9": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 32,
          column: 36
        }
      },
      "10": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 47,
          column: 9
        }
      },
      "11": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 36
        }
      },
      "12": {
        start: {
          line: 40,
          column: 29
        },
        end: {
          line: 40,
          column: 36
        }
      },
      "13": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 47
        }
      },
      "14": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 46,
          column: 6
        }
      },
      "15": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 34
        }
      },
      "16": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 26
          },
          end: {
            line: 18,
            column: 27
          }
        },
        loc: {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 35,
            column: 7
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 41
          },
          end: {
            line: 29,
            column: 42
          }
        },
        loc: {
          start: {
            line: 29,
            column: 54
          },
          end: {
            line: 34,
            column: 9
          }
        },
        line: 29
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 39,
            column: 13
          }
        },
        loc: {
          start: {
            line: 39,
            column: 18
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 44,
            column: 11
          },
          end: {
            line: 44,
            column: 12
          }
        },
        loc: {
          start: {
            line: 44,
            column: 17
          },
          end: {
            line: 46,
            column: 5
          }
        },
        line: 44
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 45
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 36
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 36
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 40
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "43c4cd04e0210b78211c4434998f8c328299cb50"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2r3kgobokc = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2r3kgobokc();
const DEFAULT_OPTIONS = (cov_2r3kgobokc().s[0]++, {
  delay: 100
});
cov_2r3kgobokc().s[1]++;
const useResizeObserver = (options = (cov_2r3kgobokc().b[0][0]++, DEFAULT_OPTIONS)) => {
  cov_2r3kgobokc().f[0]++;
  const elementRef = (cov_2r3kgobokc().s[2]++, useRef(null));
  const [dimensions, setDimensions] = (cov_2r3kgobokc().s[3]++, useState());
  const {
    delay,
    onResize
  } = (cov_2r3kgobokc().s[4]++, options);
  const resizeObserver = (cov_2r3kgobokc().s[5]++, useMemo(() => {
    cov_2r3kgobokc().f[1]++;
    cov_2r3kgobokc().s[6]++;
    return new ResizeObserver(throttle((entries) => {
      cov_2r3kgobokc().f[2]++;
      cov_2r3kgobokc().s[7]++;
      for (const {
        contentRect
      } of entries) {
        cov_2r3kgobokc().s[8]++;
        setDimensions(contentRect);
        cov_2r3kgobokc().s[9]++;
        onResize == null ? void 0 : onResize(contentRect);
      }
    }, delay));
  }, [delay]));
  cov_2r3kgobokc().s[10]++;
  useEffect(() => {
    cov_2r3kgobokc().f[3]++;
    cov_2r3kgobokc().s[11]++;
    if (!elementRef.current) {
      cov_2r3kgobokc().b[1][0]++;
      cov_2r3kgobokc().s[12]++;
      return;
    } else {
      cov_2r3kgobokc().b[1][1]++;
    }
    cov_2r3kgobokc().s[13]++;
    resizeObserver.observe(elementRef.current);
    cov_2r3kgobokc().s[14]++;
    return () => {
      cov_2r3kgobokc().f[4]++;
      cov_2r3kgobokc().s[15]++;
      resizeObserver.disconnect();
    };
  }, []);
  cov_2r3kgobokc().s[16]++;
  return [elementRef, dimensions];
};
function cov_26xybjnpu5() {
  var path = "/home/jannis/development/private/react-use-utils/src/hooks/use-callback-ref.ts";
  var hash = "578f37cd508913b83da8863f44b255d607556cdc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/hooks/use-callback-ref.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 38
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "3": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 35
        }
      },
      "4": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 23
          },
          end: {
            line: 4,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 9,
            column: 19
          }
        },
        loc: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "578f37cd508913b83da8863f44b255d607556cdc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_26xybjnpu5 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_26xybjnpu5();
cov_26xybjnpu5().s[0]++;
const useCallbackRef = (callback) => {
  cov_26xybjnpu5().f[0]++;
  const callbackRef = (cov_26xybjnpu5().s[1]++, useRef(callback));
  cov_26xybjnpu5().s[2]++;
  useLayoutEffect(() => {
    cov_26xybjnpu5().f[1]++;
    cov_26xybjnpu5().s[3]++;
    callbackRef.current = callback;
  });
  cov_26xybjnpu5().s[4]++;
  return callbackRef.current;
};
function cov_1ses9dvedc() {
  var path = "/home/jannis/development/private/react-use-utils/src/hooks/use-previous-value.ts";
  var hash = "2c1d9559eb274d8e925446999d18b2c8047bf9fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/src/hooks/use-previous-value.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 32
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 14
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 29
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 25
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 45
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 13
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2c1d9559eb274d8e925446999d18b2c8047bf9fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1ses9dvedc = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ses9dvedc();
cov_1ses9dvedc().s[0]++;
const usePreviousValue = (value) => {
  cov_1ses9dvedc().f[0]++;
  const valueRef = (cov_1ses9dvedc().s[1]++, useRef(value));
  cov_1ses9dvedc().s[2]++;
  useEffect(() => {
    cov_1ses9dvedc().f[1]++;
    cov_1ses9dvedc().s[3]++;
    valueRef.current = value;
  }, [value]);
  cov_1ses9dvedc().s[4]++;
  return valueRef.current;
};
function cov_rp28nbqkn() {
  var path = "/home/jannis/development/private/react-use-utils/index.ts";
  var hash = "3f7fca8667cbdb32eed24638ad3c64c4c2f4a7c9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/jannis/development/private/react-use-utils/index.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3f7fca8667cbdb32eed24638ad3c64c4c2f4a7c9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_rp28nbqkn = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_rp28nbqkn();
export { useCallbackRef, useDimensions, usePreviousValue, useRenderCount, useRerender, useResizeObserver };
