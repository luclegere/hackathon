// utility functions
import React from "react";

import Snake from "react-simple-snake";
import "./bubblewrap.css";
import CoolTabs from 'react-cool-tabs';

export  default  class  Destress  extends  React.Component {
    render() {
       return (
         <div>
             <CoolTabs
               tabKey={'1'}
               style={{ width:  1000, height:  1000, background:  'yellow' }}
               activeTabStyle={{ background:  'blue', color:  'white' }}
               unActiveTabStyle={{ background:  'green', color:  'black' }}
               activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
               activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
               tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
               leftContentStyle={{ background:  'violet' }}
               rightContentStyle={{ background:  'red' }}
               leftTabTitle={'Snake Game'}
               rightTabTitle={'Bubble Wrap'}
               leftContent={<SnakeGame/>}
               rightContent={<BubbleWrap/>}
               contentTransitionStyle={'transform 0.6s ease-in'}
               borderTransitionStyle={'all 0.6s ease-in'}/>
         </div>
    );
    }}

  class SnakeGame extends React.Component {
    render() {
      return <div>
        <Snake />
      </div>
    }
  }
  class BubbleWrap extends React.Component {
    render() {
      return <div>
        <body>
          <form class="bw">
            <div class="bw__bubbles">
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b1"
                  type="checkbox"
                  name="b1"
                  value="1"
                />
                <label class="bw__label" for="b1">
                  Bubble 1
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b2"
                  type="checkbox"
                  name="b2"
                  value="2"
                />
                <label class="bw__label" for="b2">
                  Bubble 2
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b3"
                  type="checkbox"
                  name="b3"
                  value="3"
                />
                <label class="bw__label" for="b3">
                  Bubble 3
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b4"
                  type="checkbox"
                  name="b4"
                  value="4"
                />
                <label class="bw__label" for="b4">
                  Bubble 4
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b5"
                  type="checkbox"
                  name="b5"
                  value="5"
                />
                <label class="bw__label" for="b5">
                  Bubble 5
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b6"
                  type="checkbox"
                  name="b6"
                  value="6"
                />
                <label class="bw__label" for="b6">
                  Bubble 6
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b7"
                  type="checkbox"
                  name="b7"
                  value="7"
                />
                <label class="bw__label" for="b7">
                  Bubble 7
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b8"
                  type="checkbox"
                  name="b8"
                  value="8"
                />
                <label class="bw__label" for="b8">
                  Bubble 8
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b9"
                  type="checkbox"
                  name="b9"
                  value="9"
                />
                <label class="bw__label" for="b9">
                  Bubble 9
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b10"
                  type="checkbox"
                  name="b10"
                  value="10"
                />
                <label class="bw__label" for="b10">
                  Bubble 10
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b11"
                  type="checkbox"
                  name="b11"
                  value="11"
                />
                <label class="bw__label" for="b11">
                  Bubble 11
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b12"
                  type="checkbox"
                  name="b12"
                  value="12"
                />
                <label class="bw__label" for="b12">
                  Bubble 12
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b13"
                  type="checkbox"
                  name="b13"
                  value="13"
                />
                <label class="bw__label" for="b13">
                  Bubble 13
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b14"
                  type="checkbox"
                  name="b14"
                  value="14"
                />
                <label class="bw__label" for="b14">
                  Bubble 14
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b15"
                  type="checkbox"
                  name="b15"
                  value="15"
                />
                <label class="bw__label" for="b15">
                  Bubble 15
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b16"
                  type="checkbox"
                  name="b16"
                  value="16"
                />
                <label class="bw__label" for="b16">
                  Bubble 16
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b17"
                  type="checkbox"
                  name="b17"
                  value="17"
                />
                <label class="bw__label" for="b17">
                  Bubble 17
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b18"
                  type="checkbox"
                  name="b18"
                  value="18"
                />
                <label class="bw__label" for="b18">
                  Bubble 18
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b19"
                  type="checkbox"
                  name="b19"
                  value="19"
                />
                <label class="bw__label" for="b19">
                  Bubble 19
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b20"
                  type="checkbox"
                  name="b20"
                  value="20"
                />
                <label class="bw__label" for="b20">
                  Bubble 20
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b21"
                  type="checkbox"
                  name="b21"
                  value="21"
                />
                <label class="bw__label" for="b21">
                  Bubble 21
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b22"
                  type="checkbox"
                  name="b22"
                  value="22"
                />
                <label class="bw__label" for="b22">
                  Bubble 22
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b23"
                  type="checkbox"
                  name="b23"
                  value="23"
                />
                <label class="bw__label" for="b23">
                  Bubble 23
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b24"
                  type="checkbox"
                  name="b24"
                  value="24"
                />
                <label class="bw__label" for="b24">
                  Bubble 24
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b25"
                  type="checkbox"
                  name="b25"
                  value="25"
                />
                <label class="bw__label" for="b25">
                  Bubble 25
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b26"
                  type="checkbox"
                  name="b26"
                  value="26"
                />
                <label class="bw__label" for="b26">
                  Bubble 26
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b27"
                  type="checkbox"
                  name="b27"
                  value="27"
                />
                <label class="bw__label" for="b27">
                  Bubble 27
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b28"
                  type="checkbox"
                  name="b28"
                  value="28"
                />
                <label class="bw__label" for="b28">
                  Bubble 28
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b29"
                  type="checkbox"
                  name="b29"
                  value="29"
                />
                <label class="bw__label" for="b29">
                  Bubble 29
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b30"
                  type="checkbox"
                  name="b30"
                  value="30"
                />
                <label class="bw__label" for="b30">
                  Bubble 30
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b31"
                  type="checkbox"
                  name="b31"
                  value="31"
                />
                <label class="bw__label" for="b31">
                  Bubble 31
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b32"
                  type="checkbox"
                  name="b32"
                  value="32"
                />
                <label class="bw__label" for="b32">
                  Bubble 32
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b33"
                  type="checkbox"
                  name="b33"
                  value="33"
                />
                <label class="bw__label" for="b33">
                  Bubble 33
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b34"
                  type="checkbox"
                  name="b34"
                  value="34"
                />
                <label class="bw__label" for="b34">
                  Bubble 34
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b35"
                  type="checkbox"
                  name="b35"
                  value="35"
                />
                <label class="bw__label" for="b35">
                  Bubble 35
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b36"
                  type="checkbox"
                  name="b36"
                  value="36"
                />
                <label class="bw__label" for="b36">
                  Bubble 36
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b37"
                  type="checkbox"
                  name="b37"
                  value="37"
                />
                <label class="bw__label" for="b37">
                  Bubble 37
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b38"
                  type="checkbox"
                  name="b38"
                  value="38"
                />
                <label class="bw__label" for="b38">
                  Bubble 38
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b39"
                  type="checkbox"
                  name="b39"
                  value="39"
                />
                <label class="bw__label" for="b39">
                  Bubble 39
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b40"
                  type="checkbox"
                  name="b40"
                  value="40"
                />
                <label class="bw__label" for="b40">
                  Bubble 40
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b41"
                  type="checkbox"
                  name="b41"
                  value="41"
                />
                <label class="bw__label" for="b41">
                  Bubble 41
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b42"
                  type="checkbox"
                  name="b42"
                  value="42"
                />
                <label class="bw__label" for="b42">
                  Bubble 42
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b43"
                  type="checkbox"
                  name="b43"
                  value="43"
                />
                <label class="bw__label" for="b43">
                  Bubble 43
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b44"
                  type="checkbox"
                  name="b44"
                  value="44"
                />
                <label class="bw__label" for="b44">
                  Bubble 44
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b45"
                  type="checkbox"
                  name="b45"
                  value="45"
                />
                <label class="bw__label" for="b45">
                  Bubble 45
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b46"
                  type="checkbox"
                  name="b46"
                  value="46"
                />
                <label class="bw__label" for="b46">
                  Bubble 46
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b47"
                  type="checkbox"
                  name="b47"
                  value="47"
                />
                <label class="bw__label" for="b47">
                  Bubble 47
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b48"
                  type="checkbox"
                  name="b48"
                  value="48"
                />
                <label class="bw__label" for="b48">
                  Bubble 48
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b49"
                  type="checkbox"
                  name="b49"
                  value="49"
                />
                <label class="bw__label" for="b49">
                  Bubble 49
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b50"
                  type="checkbox"
                  name="b50"
                  value="50"
                />
                <label class="bw__label" for="b50">
                  Bubble 50
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b51"
                  type="checkbox"
                  name="b51"
                  value="51"
                />
                <label class="bw__label" for="b51">
                  Bubble 51
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b52"
                  type="checkbox"
                  name="b52"
                  value="52"
                />
                <label class="bw__label" for="b52">
                  Bubble 52
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b53"
                  type="checkbox"
                  name="b53"
                  value="53"
                />
                <label class="bw__label" for="b53">
                  Bubble 53
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b54"
                  type="checkbox"
                  name="b54"
                  value="54"
                />
                <label class="bw__label" for="b54">
                  Bubble 54
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b55"
                  type="checkbox"
                  name="b55"
                  value="55"
                />
                <label class="bw__label" for="b55">
                  Bubble 55
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b56"
                  type="checkbox"
                  name="b56"
                  value="56"
                />
                <label class="bw__label" for="b56">
                  Bubble 56
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b57"
                  type="checkbox"
                  name="b57"
                  value="57"
                />
                <label class="bw__label" for="b57">
                  Bubble 57
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b58"
                  type="checkbox"
                  name="b58"
                  value="58"
                />
                <label class="bw__label" for="b58">
                  Bubble 58
                </label>
                <span class="bw__cover"></span>
              </div>
              <div class="bw__bubble">
                <input
                  class="bw__input"
                  id="b59"
                  type="checkbox"
                  name="b59"
                  value="59"
                />
                <label class="bw__label" for="b59">
                  Bubble 59
                </label>
                <span class="bw__cover"></span>
              </div>
            </div>
            <button class="bw__btn" type="reset">
              New Sheet
            </button>
          </form>
        </body>
      </div>
    }
  }