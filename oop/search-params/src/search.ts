const options = "name=baba&test=30&test=50&size=large";
// const options = ?page=30&test=30&test=50&size=large;

// const options = [
//   ["size", "large"],
//   ["name", "baba"],
//   ["test", 30],
//   ["test", 50],
// ];

// const options = {
//   size: "large",
//   name: "david",
//   test: [30, 50],
// };

export class MyURLSearchParams {
  private options: Record<string, any>;

  constructor(_options: Record<string, any> | Array<[string, any]> | string) {
    if (typeof _options === "string") {
      const keyValuePairs = _options.split("&");
      this.options = keyValuePairs.reduce((acc, pair) => {
        const [key, value] = pair.split("=");

        // console.log(acc);

        if (!acc[key]) {
          acc[key] = value;
        } else {
          const prevValue = acc[key];
          acc[key] = [prevValue];
          acc[key].push(value);
        }

        return acc;
      }, {});
    } else if (Array.isArray(_options)) {
      this.options = _options.reduce((acc, [key, value]) => {
        if (!acc[key]) {
          acc[key] = value;
        } else {
          const prevValue = acc[key];
          acc[key] = [prevValue];
          acc[key].push(value);
        }
        return acc;
      }, {});
    } else {
      this.options = _options;
    }
  }
  toString() {
    let resultString = "?";

    const tuples = Object.entries(this.options);

    for (let i = 0; i < tuples.length; i++) {
      const lastChar = tuples.length - 1 === i ? "" : "&";
      const currTuple = tuples[i];

      if (Array.isArray(currTuple[1])) {
        for (let i = 0; i < currTuple[1].length; i++) {
          resultString += currTuple[0] + "=" + currTuple[1][i] + lastChar;
        }
      } else {
        resultString += currTuple[0] + "=" + currTuple[1] + lastChar;
      }
    }

    return resultString;
  }

  getAll(key: string) {
    if (Array.isArray(this.options[key])) {
      return this.options[key];
    }
    return [this.options[key]];
  }

  get(key: string) {
    if (Array.isArray(this.options[key])) {
      return this.options[key][0];
    }
    return this.options[key];
  }

  set(key: string, value: any) {
    this.options[key] = value;
  }
}

const url = new MyURLSearchParams(options);
console.log(url.get("name"));
console.log(url.getAll("name"));

console.log(url.get("size"));
console.log(url.getAll("size"));

console.log(url.get("test"));
console.log(url.getAll("test"));

url.set("name", "new-name");
console.log(url.get("name"));

url.set("test", "single-item-again");
console.log(url.get("test"));
console.log(url.getAll("test"));

console.log(url.toString());
