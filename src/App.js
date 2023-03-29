import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Result from "./components/result/Result";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base: "",
      power: "",
      result: "",
    };
  }

  // pov = (_a, _b) => {
  //   debugger
  //   const mul = (_a, _b) => {
  //     let buf = 0;
  //     let s = [];
  //     let a = _a.toString().split().reverse();
  //     let b = _b.toString().split().reverse();
  //     for (let i = 0; i < a.length; i++) {
  //       for (let j = 0; j < b.length; j++) {
  //         let l = i + j;
  //         if (!s[l]) s[l] = 0;
  //         let t = a[i] * b[j] + s[l] + buf;
  //         s[l] = t % 10;
  //         buf = Math.floor(t / 10);
  //       }
  //       if (buf) {
  //         let l = i + b.length;
  //         if (!s[l]) s[l] = 0;
  //         if (!s[l + 1]) s[l + 1] = 0;
  //         let t = s[l] + buf;
  //         s[l] = t % 10;
  //         s[l + 1] = Math.floor(t / 10);
  //       }
  //     }
  //     return s.reverse();
  //   };
  //   const mi = (_a) => {
  //     let a = _a.toString().split().reverse();
  //     for (let i = 0; i < a.length; i++) {
  //       if (+a[i] === 0) {
  //         if (i + 1 < a.length) {
  //           a[i] = "9";
  //         } else {
  //           return [];
  //         }
  //       } else {
  //         a[i] = `${+a[i] - 1}`;
  //         break;
  //       }
  //     }

  //     if (a.length === 1 && a[0] === "0") return [];

  //     a.reverse();

  //     while (a.length > 0) {
  //       if (a[0] === "0") {
  //         a.splice(0, 1);
  //       } else {
  //         break;
  //       }
  //     }

  //     return a.join("");
  //   };
  //   let m = ["1"];
  //   let b = _b.toString().split();
  //   let i = 0;
  //   while (b.length > 0) {
  //     i++;
  //     m = mul(m.join(""), _a);
  //     b = mi(b);
  //   }
  //   return m.join("");
  // };

  componentDidMount() {
    return this.multiplication(12, 19);
  }

  handleChangeInput = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        if (this.state.power && this.state.base) {
          return this.power(25, 25);
          return this.power(this.state.base, this.state.power);
        } else
          this.setState({
            result: "",
          });
      }
    );
  };

  tavan = (p) => {
    let temp = "";
    let zero = "";
    for (let i = p; i > 0; i--) {
      temp = "0";
      zero = zero + temp;
    }
    return zero;
  };

  multiplication = (x = 0, y = 0) => {
    debugger;
    let a = [...String(x)];
    let b = [...String(y)];

    let n = a.length;
    let m = b.length;
    let na = n - 1;
    let nb = m - 1;
    let ai = a[na];
    let bj = b[nb];
    let sum = "";
    let sum2 = "";
    let final_sum = "";
    let single = "";

    let maxLength = Math.max(n, m);
    maxLength = maxLength + 1;
    let newsum = new Array(maxLength).fill("");

    //     for(let i = na; i>=0;i--){
    //       let k = [];

    //       if(i < na){
    //         k[na - i - 1] = "";
    //       }
    //       sum[i] = k.fill('0').join('');

    //       let tem = 0;
    //       for(let j = nb; j >=0; j--){
    //         let c = (a[i] * b[j]) + tem;
    //         let d = c % 10;

    //         sum[i] = d + sum[i];

    //         tem = Math.floor(c / 10);

    //       }
    //       sum[i] = tem + sum[i];
    //     }

    //     let s = "";
    //     let _t = 0;
    //     console.log(sum);
    //     let max = sum[0].length;
    //     for(let i = 0; i < max; i++){
    //       for(let j = 0; j < sum.length; j++){
    //         let c =
    //         s = +(sum[j][i] || 0) + _t + s;
    //       }
    //       console.log('----');
    //     }


    // if(tem) {sum[na+1] = tem; tem=0;}

    for (let z = 0; na > -1; na--, z++) {
      // sum = "";
      let dahgan = 0;
      let yekan = 0;
      nb = m - 1;
      for (let k = 0, mxl = maxLength - 1; nb > -1; nb--, k++, mxl--) {
        // let mul = 0;
        //   mul = String(mul[]) + (a[na] * b[nb]) + +dahgan;
        //   nmul = mul.length
        // for (let i = mul.length - 1; i > 1; i--) {
        //   yekan = String(mul)[String(mul).length - 1];
        //   dahgan = String(mul)[String(mul).length - 2];
        // }
        let mul;
        if (nb == m - 1) {
          mul = a[na] * b[nb] + +dahgan + this.tavan(z);
        } else {
          mul = a[na] * b[nb] + +dahgan;
        }
        // let mul = a[na] * b[nb] + +dahgan + this.tavan(z);
        let final_mul = "";
        for (let j = b[nb].length; j > 0; j--) {
          // let yekan = String(mul)[String(mul).length - 1];

          if (String(mul).length > 1) {
            final_mul = String(mul)[1];
            dahgan = String(mul)[0];
          } else {
            final_mul = String(mul)[0];
            single = String(mul)[0];
          }
          // if (nb == m - 1) {
          //   final_mul = final_mul + this.tavan(z);
          // }
          // else {
          //   final_mul = final_mul + yekan + this.tavan(z);
          // }
          // if (nb == 0) {
          // final_mul = dahgan + final_mul;
          // dahgan = 0;
          // }

          // for (let n = String(yekan).length, i = n - 1; i > 0; i--) {
          //   temp = temp + c;
          // }
        }

        // sum.length;

        // sum = final_mul + sum;
        if (z == 0) {
          if (nb == 0 && String(mul).length > 1) {
            newsum[mxl] = String(final_mul)[final_mul.length - 1];
            newsum[mxl - 1] = String(dahgan)[dahgan.length - 2];
          } else {
            newsum[mxl] = String(final_mul)[final_mul.length - 1];
          }
        } else if(dahgan !== ""){
          newsum[mxl] = String(final_mul)[final_mul.length - 1];
          newsum[mxl - 1] = String(dahgan)[dahgan.length - 1];
          dahgan = ""
        }
        else {
          newsum[mxl - 1] = String(final_mul)[final_mul.length - 1];

        }
      }
    }
    // if (bj.length - 1 == 0) {
    //   final_sum = this.sum(sum, sum2);
      // sum = sum + this.tavan(z);
    // }
    // sum2 = sum;
    return newsum;
    // this.setState({
    //   result: String(sum).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    // });
  };

  sum = (x, y) => {
    let a = String(x);
    let b = String(y);

    let na = a.length;

    let ai = na - 1;

    let sum = "";

    let yekan = 0;
    let dahgan = 0;

    let tempSum = "";

    for (let i = ai, k = 0; i > -1; i--, k++) {
      sum = Number(a[i]) + Number(b[i]) + Number(dahgan);
      if (String(sum).length > 1) {
        yekan = String(sum)[1];
        dahgan = String(sum)[0];
        tempSum = tempSum + yekan;
      } else {
        tempSum = String(sum) + yekan;
      }
    }
    return tempSum;
  };

  power = (x = 0, y = 0) => {
    this.setState({
      result: this.multiplication(x, y),
    });
    let mul = 1;
    let sum = "";
    let acc = x;
    // let a = [...String(mul)];
    // let b = [...String(sum)];
    // let n = a.length;
    // let m = b.length;
    // for (let i = y; i > 1; i--) {
    //   for (let i = n, j = m - 1; i > 0; i--, j--) {
    //     acc = this.multiplication(x, acc);
    //     //  sum = mul[i] * sum[j]
    //   }
    //   // sum = mul + sum;
    // }
    // this.setState({
    //   result: String(acc).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    // });
  };

  render() {
    return (
      <div className="App">
        <Input
          base={this.state.base}
          power={this.state.power}
          handleChangeInput={this.handleChangeInput}
        />

        <Result result={this.state.result} />
      </div>
    );
  }
}

export default App;
